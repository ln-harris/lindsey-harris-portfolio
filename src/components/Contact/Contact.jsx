import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../../utils/emailjs-config";
import "./Contact.css";

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  function validate(name, value) {
    const text = value.trim();
    if (name === "name")
      return !text
        ? "Please enter your name."
        : text.length < 2
          ? "Name must be at least 2 characters."
          : "";
    if (name === "email")
      return !text
        ? "Please enter your email."
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)
          ? "Please enter a valid email address."
          : "";
    return !text
      ? "Please add a message."
      : text.length < 10
        ? "Message must be at least 10 characters."
        : "";
  }
  function handleField(event) {
    const { name, value } = event.target;
    setErrors((previous) => ({ ...previous, [name]: validate(name, value) }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const nextErrors = Object.fromEntries(
      ["name", "email", "message"].map((name) => [
        name,
        validate(name, form.elements[name].value),
      ]),
    );
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      setStatus("Please fix the highlighted fields.");
      return;
    }
    setSending(true);
    setStatus("Sending your message...");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      form.reset();
      setErrors({});
      setStatus("Thanks for reaching out. Your message has been sent.");
    } catch {
      setStatus("Something went wrong while sending. Please try again.");
    } finally {
      setSending(false);
    }
  }
  return (
    <section id="contact" className="contact">
      <div className="contact__container animate-on-scroll">
        <div className="contact__content">
          <span className="section-label">Get In Touch</span>
          <h2 className="contact__title">Let's Build Something Amazing</h2>
          <p className="contact__text">
            I'm currently open to new opportunities and exciting projects.
            Whether you have a question or just want to say hi, I'll get back to
            you!
          </p>
          <div className="contact__info">
            <a href="mailto:your.email@example.com" className="contact__item">
              <i className="fas fa-envelope"></i>
              <span>harrisnl95@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lindseyharr/"
              target="_blank"
              className="contact__item"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/ln-harris"
              target="_blank"
              className="contact__item"
            >
              <i className="fab fa-github"></i>
              <span>github.com/ln-harris</span>
            </a>
          </div>
        </div>
        <form className="contact__form" noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onBlur={handleField}
              onChange={(event) => {
                if (errors.name) handleField(event);
                setStatus("");
              }}
              aria-invalid={Boolean(errors.name)}
              className={errors.name ? "form-input-error" : ""}
              required
              minLength="2"
              aria-describedby="name-error"
            />
            <span className="form-error" id="name-error" aria-live="polite">
              {errors.name}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onBlur={handleField}
              onChange={(event) => {
                if (errors.email) handleField(event);
                setStatus("");
              }}
              aria-invalid={Boolean(errors.email)}
              className={errors.email ? "form-input-error" : ""}
              required
              aria-describedby="email-error"
            />
            <span className="form-error" id="email-error" aria-live="polite">
              {errors.email}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onBlur={handleField}
              onChange={(event) => {
                if (errors.message) handleField(event);
                setStatus("");
              }}
              aria-invalid={Boolean(errors.message)}
              className={errors.message ? "form-input-error" : ""}
              rows="5"
              required
              minLength="10"
              aria-describedby="message-error"
            ></textarea>
            <span className="form-error" id="message-error" aria-live="polite">
              {errors.message}
            </span>
          </div>
          <p className="form-status" aria-live="polite">
            {status}
          </p>
          <button disabled={sending} type="submit" className="btn btn-primary">
            <span>{sending ? "Sending..." : "Send Message"}</span>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
