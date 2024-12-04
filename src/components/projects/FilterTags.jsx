import { useState } from "react";
import "./FilterTags.css";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";

import IMAGES from "../../images";

export default function FilterTags({ onClickFilterButton }) {
  const [activeLink, setActiveLink] = useState("all");

  const activeFilterStyle = {
    boxShadow:
      "var(--second-color-lite) 0px 6px 0px 2px, var(--second-color) 0px 0px 0px 2px",
    color: "#fff",
    backgroundColor: "var(--main-color-lite)",
    fontFamily: "var(--font-2)",
    fontWeight: "bold",
  };

  const nonActiveFilterStyle = {
    boxShadow: "white 0px 0px 2px 0px",
    fontWeight: "400",
    fontFamily: "var(--font-1)",
    filter: "grayscale()",
  };

  const filterTags = [
    {
      filterName: "all",
      filterTag: "all",
      filterIcon: IMAGES.allIcon,
    },
    {
      filterName: "frontend",
      filterTag: "frontend",
      filterIcon: IMAGES.frontendIcon,
    },
    {
      filterName: "backend",
      filterTag: "backend",
      filterIcon: IMAGES.backendIcon,
    },
    {
      filterName: "full-stack",
      filterTag: "fullstack",
      filterIcon: IMAGES.fullstackIcon,
    },
    // {
    //   filterName: "landing-page",
    //   filterTag: "landing-page",
    //   filterIcon: IMAGES.landingPageIcon,
    // },
    {
      filterName: "ui elements",
      filterTag: "ui",
      filterIcon: IMAGES.uiElementsIcon,
    },
  ];

  return (
    <div className="filter__container">
      {filterTags.map(({ filterTag, filterName, filterIcon }, i) => (
        <ShowMoreButton
          key={i}
          style={
            filterTag === activeLink ? activeFilterStyle : nonActiveFilterStyle
          }
          onClick={() => {
            setActiveLink(filterTag);
            onClickFilterButton(filterTag);
          }}
          title={`${filterName}`}
          img={<img src={filterIcon} alt={filterTag} />}
        />
      ))}
    </div>
  );
}
