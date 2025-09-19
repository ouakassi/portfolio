import "./Footer.css";

import SocialLink from "./../SocialLink";
import { Link } from "react-router-dom";

import { socialData } from "../../data/socialData";
import SocialIcon from "../contact/SocialIcon";

const Footer = () => (
  <footer>
    <div className="footer__container container">
      <div className="footer__links">
        {socialData.map(({ link, icon, title, color }) => {
          return (
            <SocialIcon link={link} icon={icon} title={title} color={color} />
          );
        })}
      </div>
      <p className="footer__copyright">
        All rights reserved © OUAKASSI {`${new Date().getFullYear()}`}
      </p>
    </div>
  </footer>
);

export default Footer;
