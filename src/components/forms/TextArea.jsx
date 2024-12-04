import "./TextEra.css";

export default function TextArea({
  children,
  id,
  name,
  rows,
  cols,
  placeholder,
  label,
}) {
  return (
    <div className="input__container">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
      >
        {children}
      </textarea>
    </div>
  );
}
