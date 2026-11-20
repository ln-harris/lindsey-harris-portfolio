import { useEffect } from "react";

export default function usePageEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
      if (element.getBoundingClientRect().top < window.innerHeight)
        element.classList.add("active");
    });
    const cards = [...document.querySelectorAll(".skills__card, .about__card")];
    const tilt = (event) => {
      const card = event.currentTarget,
        rect = card.getBoundingClientRect();
      card.style.transform = `perspective(1000px) rotateX(${(event.clientY - rect.top - rect.height / 2) / 10}deg) rotateY(${(rect.width / 2 - event.clientX + rect.left) / 10}deg) translateY(-8px)`;
    };
    const reset = (event) => {
      event.currentTarget.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    };
    cards.forEach((card) => {
      card.addEventListener("mousemove", tilt);
      card.addEventListener("mouseleave", reset);
    });
    const progress = document.createElement("div");
    progress.id = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);
    const scroll = () => {
      document.querySelectorAll(".gradient-orb").forEach((orb, index) => {
        orb.style.transform = `translateY(${window.scrollY * (0.5 + index * 0.1)}px)`;
      });
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      progress.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
    };
    const smoothScroll = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href").slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    };
    window.addEventListener("scroll", scroll, { passive: true });
    document.addEventListener("click", smoothScroll);
    document.body.classList.add("loaded");
    scroll();
    return () => {
      observer.disconnect();
      progress.remove();
      document.body.classList.remove("loaded");
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("click", smoothScroll);
      cards.forEach((card) => {
        card.removeEventListener("mousemove", tilt);
        card.removeEventListener("mouseleave", reset);
      });
    };
  }, []);
}
