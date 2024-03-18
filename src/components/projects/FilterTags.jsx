import { useState } from "react";
import "./FilterTags.css";
import { ShowMoreButton } from "../Buttons/ShowMoreButton";

import IMAGES from "../../images";

export default function FilterTags({ onClickFilterButton }) {
  const [activeLink, setActiveLink] = useState("all");

  const activeFilterStyle = {
    boxShadow:
      "var(--first-color-alt-light) 0px 6px 0px 2px, var(--first-color-alt) 0px 0px 0px 2px",
    color: "#fff",
    backgroundColor: "var(--first-color-light)",
    // fontWeight: "700",
    fontFamily: "var(--font-2)",
    width: "18rem",

    transform: "scale(1.1)",
  };

  const nonActiveFilterStyle = {
    boxShadow: "var(--first-color) 0px 0px 0px 2px",
    // color: "var(--first-color)",
    // fontWeight: "700",
    // fontFamily: "var(--font-2)",
    // width: "20rem",
    transform: "scale(1)",
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
    {
      filterName: "landing-page",
      filterTag: "landing",
      filterIcon: IMAGES.landingPageIcon,
    },
    {
      filterName: "ui elements",
      filterTag: "ui",
      filterIcon: IMAGES.uiElementsIcon,
    },
  ];

  return (
    <>
      <div className="filter__container">
        {filterTags.map(({ filterTag, filterName, filterIcon }, i) => {
          return (
            <ShowMoreButton
              style={
                filterTag === activeLink
                  ? activeFilterStyle
                  : nonActiveFilterStyle
              }
              key={i}
              onClick={() => {
                setActiveLink(filterTag);
                onClickFilterButton(filterTag);
              }}
              title={`${filterName}`}
              img={<img src={filterIcon} alt={filterTag} />}
            />
          );
        })}
      </div>
    </>
  );
}
