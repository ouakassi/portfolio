// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { ShowMoreButton } from "../../components/Buttons/ShowMoreButton";
import Section from "../../components/Section";
import "./NotFound.css";
import { RiHome5Line } from "react-icons/ri";
import IMAGES from "../../images";
import { MdError } from "react-icons/md";

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
      className="not-found"
      id="notfound"
      icon={<MdError />}
      sectionTitle="page not found"
    >
      <div className="not-found__container">
        {/* <h1>
          <i class="uil uil-sad"></i> oh sorry page not found ☹️
        </h1>
        <p>we c'ant seem to find the page that you're looking for ! Back in</p> */}
        <img src={IMAGES.pageNotfound} alt="page not found" />
        <Link to={"/"}>
          <ShowMoreButton title="go to Home page" icon={<RiHome5Line />} />
        </Link>
      </div>
    </Section>
  );
}
