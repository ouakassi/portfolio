import "./ButtonSubmit.css";

export default function ButtonSubmit({ className, title, icon }) {
  return (
    <button className={`button-submit ${className}`} type="submit">
      {title}
      <i className={`${icon} button__icon`}></i>
    </button>
  );
}
