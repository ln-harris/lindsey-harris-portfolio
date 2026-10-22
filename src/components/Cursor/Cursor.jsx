import { useEffect, useRef } from "react";
import "./Cursor.css";
export default function Cursor() {
  const dot = useRef(null);
  const outline = useRef(null);
  useEffect(() => {
    let x = 0,
      y = 0,
      ox = 0,
      oy = 0,
      frame;
    const move = (event) => {
      x = event.clientX;
      y = event.clientY;
      dot.current.style.left = `${x}px`;
      dot.current.style.top = `${y}px`;
    };
    const hover = (event) => {
      const scale = event.target.closest(
        "a, button, .project__card, .skills__card",
      )
        ? 1.5
        : 1;
      dot.current.style.transform =
        outline.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };
    const animate = () => {
      ox += (x - ox) * 0.15;
      oy += (y - oy) * 0.15;
      outline.current.style.left = `${ox}px`;
      outline.current.style.top = `${oy}px`;
      frame = requestAnimationFrame(animate);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", hover);
    animate();
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", hover);
    };
  }, []);
  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={outline} className="cursor-outline" aria-hidden="true" />
    </>
  );
}
