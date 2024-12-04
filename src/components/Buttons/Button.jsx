import "./Button.css";
export default function Button({ title, icon, iconDirection = "left" }) {
  return (
    <button className="button">
      {iconDirection === "left" && icon}
      {title}
      {iconDirection === "right" && icon}
    </button>
  );
}
