import "./SocialLink.css";

const SocialLink = ({ link, icon }) => (
  <a href={link} className="social-icon">
    {icon}
  </a>
);

export default SocialLink;
