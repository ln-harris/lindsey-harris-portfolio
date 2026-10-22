import { Children, cloneElement, isValidElement, useState } from "react";

export default function ProjectCarousel({ children }) {
  const [current, setCurrent] = useState(0);
  const track = Children.toArray(children).find(
    (child) =>
      isValidElement(child) &&
      child.props.className === "project__carousel-track",
  );
  const count = Children.toArray(track?.props.children).filter(
    (child) => isValidElement(child) && child.type === "img",
  ).length;
  function render(nodes) {
    let slide = 0;
    return Children.map(nodes, (child) => {
      if (!isValidElement(child)) return child;
      const props = {};
      if (child.type === "img") {
        const index = slide++;
        props.className = `project__image${index === current ? " is-active" : ""}`;
      }
      if ("data-carousel-prev" in child.props)
        props.onClick = (event) => {
          event.stopPropagation();
          setCurrent((index) => (index - 1 + count) % count);
        };
      if ("data-carousel-next" in child.props)
        props.onClick = (event) => {
          event.stopPropagation();
          setCurrent((index) => (index + 1) % count);
        };
      if ("data-carousel-dot" in child.props) {
        const index = Number(child.props["data-carousel-dot"]);
        props.className = `project__carousel-dot${index === current ? " is-active" : ""}`;
        props["aria-pressed"] = index === current;
        props.onClick = (event) => {
          event.stopPropagation();
          setCurrent(index);
        };
      }
      return cloneElement(
        child,
        props,
        child.props.children ? render(child.props.children) : undefined,
      );
    });
  }
  return (
    <div className="project__carousel project__image-container" data-carousel>
      {render(children)}
    </div>
  );
}
