import "./Footer.css";

import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

import SocialLink from "./../SocialLink";

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
      <div className="footer__links">
        {SOCIAL_LINKS.map(({ link, icon }, i) => {
          return <SocialLink key={i} link={link} icon={icon} />;
        })}
      </div>
      <p className="footer__copyright">
        All right reserved © Ouakassi {`${new Date().getFullYear()}`}
      </p>
    </div>
  </footer>
);

export default Footer;
