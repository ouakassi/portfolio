import "./Footer.css";

import SocialLink from "./../SocialLink";
import { Link } from "react-router-dom";

import { socialData } from "../../data/socialData";

const Footer = () => (
  <footer>
    <div className="footer__container container">
      <div className="footer__links">
        {socialData.map(({ link, icon }) => {
          return <SocialLink key={link} link={link} icon={icon} />;
        })}
      </div>
      <p className="footer__copyright">
        All rights reserved © OUAKASSI {`${new Date().getFullYear()}`}
      </p>
    </div>
  </footer>
);

export default Footer;
