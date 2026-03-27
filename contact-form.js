const contactForm = document.querySelector(".contact__form");
const EMAILJS_PUBLIC_KEY = "UK5HPcPenI-inRF0b";
const EMAILJS_SERVICE_ID = "service_9uj8g1v";
const EMAILJS_TEMPLATE_ID = "template_el89knz";

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const submitButtonLabel = submitButton?.querySelector("span");

  if (window.emailjs) {
    window.emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY,
    });
  }

  const fields = {
    name: {
      input: contactForm.querySelector("#name"),
      error: contactForm.querySelector("#name-error"),
      validate(value) {
        const trimmedValue = value.trim();

        if (!trimmedValue) return "Please enter your name.";
        if (trimmedValue.length < 2) {
          return "Name must be at least 2 characters.";
        }

        return "";
      },
    },
    email: {
      input: contactForm.querySelector("#email"),
      error: contactForm.querySelector("#email-error"),
      validate(value) {
        const trimmedValue = value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!trimmedValue) return "Please enter your email.";
        if (!emailPattern.test(trimmedValue)) {
          return "Please enter a valid email address.";
        }

        return "";
      },
    },
    message: {
      input: contactForm.querySelector("#message"),
      error: contactForm.querySelector("#message-error"),
      validate(value) {
        const trimmedValue = value.trim();

        if (!trimmedValue) return "Please add a message.";
        if (trimmedValue.length < 10) {
          return "Message must be at least 10 characters.";
        }

        return "";
      },
    },
  };

  const statusMessage = contactForm.querySelector(".form-status");

  function setFieldError(fieldConfig, message) {
    fieldConfig.error.textContent = message;
    fieldConfig.input.classList.toggle("form-input-error", Boolean(message));
    fieldConfig.input.setAttribute("aria-invalid", String(Boolean(message)));
  }

  function validateField(fieldName) {
    const fieldConfig = fields[fieldName];
    const errorMessage = fieldConfig.validate(fieldConfig.input.value);

    setFieldError(fieldConfig, errorMessage);
    return !errorMessage;
  }

  Object.keys(fields).forEach((fieldName) => {
    const fieldConfig = fields[fieldName];

    fieldConfig.input.addEventListener("blur", () => {
      validateField(fieldName);
    });

    fieldConfig.input.addEventListener("input", () => {
      if (fieldConfig.error.textContent) {
        validateField(fieldName);
      }

      statusMessage.textContent = "";
    });
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const isFormValid = Object.keys(fields).every((fieldName) =>
      validateField(fieldName),
    );

    if (!isFormValid) {
      statusMessage.textContent = "Please fix the highlighted fields.";
      return;
    }

    if (!window.emailjs) {
      statusMessage.textContent =
        "Email service is unavailable right now. Please try again later.";
      return;
    }

    statusMessage.textContent = "Sending your message...";

    if (submitButton) {
      submitButton.disabled = true;
    }

    if (submitButtonLabel) {
      submitButtonLabel.textContent = "Sending...";
    }

    try {
      await window.emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        contactForm,
      );

      statusMessage.textContent =
        "Thanks for reaching out. Your message has been sent.";
      contactForm.reset();

      Object.values(fields).forEach((fieldConfig) => {
        setFieldError(fieldConfig, "");
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      statusMessage.textContent =
        "Something went wrong while sending. Please try again.";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }

      if (submitButtonLabel) {
        submitButtonLabel.textContent = "Send Message";
      }
    }
  });
}
