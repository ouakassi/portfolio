import "./Input.css";

export default function Input({
  value,
  label,
  toRef,
  placeholder,
  type,
  onChange,
  icon,
  className,
}) {
  return (
    <div className="input__container">
      {label && <label htmlFor={type}>{label}</label>}
      <input
        type={type}
        id={type}
        className={className}
        ref={toRef}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required
      />
      <i className={icon}></i>
    </div>
  );
}
