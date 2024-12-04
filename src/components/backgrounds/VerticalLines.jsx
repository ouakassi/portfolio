import "./VerticalLines.css";
const FuturisticVerticalLines = () => {
  return (
    <div className="vertical-lines-container">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="vertical-line"></div>
      ))}
    </div>
  );
};

export default FuturisticVerticalLines;
