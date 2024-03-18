import "./GlowingText.css";

export default function GlowingText({ text, fs, textTransform, color }) {
  return (
    <h2
      style={{
        fontSize: fs,
        color: color,
        textTransform: textTransform,
        textShadow: `0px 0px 8px ${color}`,
      }}
      className="glowing__text"
    >
      {text}
    </h2>
  );
}
