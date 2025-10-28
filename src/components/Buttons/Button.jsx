import "./Button.css";
export default function Button({
  className,
  title,
  icon,
  iconDirection = "left",
}) {
  return (
    <button className={`button ${className}`}>
      {iconDirection === "left" && icon}
      {title}
      {iconDirection === "right" && icon}
    </button>
  );
}
