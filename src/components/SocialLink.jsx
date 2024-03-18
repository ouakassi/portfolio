import "./SocialLink.css";

const SocialLink = ({ link, icon }) => (
  <a href={link} className="social-icon">
    <i className={icon} />
  </a>
);

export default SocialLink;
