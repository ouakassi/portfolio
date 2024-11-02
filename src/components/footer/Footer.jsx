import "./Footer.css";

import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

import SocialLink from "./../SocialLink";
import { Link } from "react-router-dom";

const SOCIAL_LINKS = [
  {
    link: "https://www.linkedin.com/in/oussama-ouakassi-28372216a/",
    icon: <FaLinkedin />,
  },
  {
    link: "https://github.com/ouakassi",
    icon: <FaGithub />,
  },
  { link: "https://twitter.com/OuakassiOussama", icon: <FaSquareXTwitter /> },
];

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
              <li>
                <a href="https://twitter.com/OuakassiOussama">twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ouakassi/">linkedin</a>
              </li>
              <li>
                <a href="https://github.com/ouakassi">github</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer__links">
        {SOCIAL_LINKS.map(({ link, icon }, i) => {
          return <SocialLink key={i} link={link} icon={icon} />;
        })}
      </div>
      <p className="footer__copyright">
        All rights reserved © Ouakassi {`${new Date().getFullYear()}`}
      </p>
    </div>
  </footer>
);

export default Footer;
