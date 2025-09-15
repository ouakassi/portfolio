import React from "react";

const SecondArrow = () => {
  return (
    <svg
      className="second__arrow"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
      aria-label="Decorative arrow"
    >
      <defs>
        <marker
          id="SvgjsMarker2267"
          markerWidth="7"
          markerHeight="7"
          refX="3.5"
          refY="3.5"
          viewBox="0 0 7 7"
          orient="auto"
        >
          <polygon
            points="2.333,7 0,3.5 2.333,0 7,3.5"
            fill="hsl(158, 100%, 67%)"
          />
        </marker>
      </defs>
      <g
        strokeWidth="6"
        stroke="hsl(158, 100%, 67%)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="111 38"
        transform="matrix(0.6947,0.7193,-0.7193,0.6947,405.87,-165.6)"
      >
        <path d="M189 189Q389 193 611 611" markerEnd="url(#SvgjsMarker2267)" />
      </g>
    </svg>
  );
};

export default SecondArrow;
