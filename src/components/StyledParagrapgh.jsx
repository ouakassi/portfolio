import "./StyledParagrapgh.css";

const StyledParagraph = ({ children, style }) => (
  <p style={style} className="styles__paragraph">
    {children}
  </p>
);

export default StyledParagraph;
