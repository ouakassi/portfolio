import "./Footer.css";

import SocialLink from "./../SocialLink";
import { Link } from "react-router-dom";

import { socialData } from "../../data/socialData";

const Footer = () => (
  <footer>
    <div className="footer__container container">
      <div className="footer__nav">
        <div className="profession">
          <h2>oussama ouakassi</h2>
          <h3>Software Engineer at Procol</h3>
          <h3>Open for side-projects & collaborations</h3>
        </div>
        <div style={{ display: "flex", gap: "4rem" }}>
          <nav>
            <span>website</span>
            <ul>
              <li>
                <Link to={"projects"}>projects</Link>
              </li>
              <li>
                <Link to={"about"}> about me</Link>
              </li>
              <li>
                <Link to={"contact"}>contact</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <span>connect</span>
            <ul>
              {socialData.map(({ link, title }) => (
                <li>
                  <a href={link}>{title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer__links">
        {socialData.map(({ link, icon }, i) => {
          return <SocialLink key={i} link={link} icon={icon} />;
        })}
      </div>
      <p className="footer__copyright">
        All rights reserved © OUAKASSI {`${new Date().getFullYear()}`}
      </p>
    </div>
  </footer>
);

export default Footer;
