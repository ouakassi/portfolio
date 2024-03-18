import "./Footer.css";

import SocialLink from "./../SocialLink";

const SOCIAL_LINKS = [
  {
    link: "https://www.linkedin.com/in/oussama-ouakassi-28372216a/",
    icon: "uil uil-linkedin-alt",
  },
  {
    link: "https://github.com/ouakassi",
    icon: "uil uil-github-alt",
  },
  { link: "https://twitter.com/OuakassiOussama", icon: "uil uil-twitter" },
];

const Footer = () => (
  <footer>
    <div className="footer__container container">
      <div className="footer__links">
        {SOCIAL_LINKS.map(({ link, icon }, i) => {
          return <SocialLink key={i} link={link} icon={icon} />;
        })}
      </div>
      <p className="footer__copyright">© Ouakassi. All right reserved</p>
    </div>
  </footer>
);

export default Footer;
