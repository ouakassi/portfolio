// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { ShowMoreButton } from "../../components/Buttons/ShowMoreButton";
import Section from "../../components/Section";
import "./NotFound.css";

export default function NotFound() {
  // const navigate = useNavigate();
  // const DELAY = "1000";
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/");
  //   }, DELAY);
  // }, [navigate]);

  return (
    <Section
      className="notfound"
      id="notfound"
      icon="uil uil-cloud-slash"
      sectionTitle="404 not found"
      sectionSubtitle="sorry nothing here"
    >
      <div className="notfound__container">
        <h1>
          <i class="uil uil-sad"></i> oh page not found
        </h1>
        <p>
          we c'ant seem to find the page that you're looking for ! Back in
          {}
        </p>
        <Link to={-1}>
          <ShowMoreButton title="go back" icon="uil uil-corner-up-left" />
        </Link>
      </div>
    </Section>
  );
}
