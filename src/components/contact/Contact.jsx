import "./Contact.css";

import Section from "../../components/Section";
import ContactBox from "./ContactBox";
import SocialLink from "../SocialLink";
import { motion } from "framer-motion";
import { IoCallSharp } from "react-icons/io5";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import IMAGES from "../../images";
import Button from "../Buttons/Button";

const Contact = () => {
  const CONTACT_DATA = [
    {
      icon: "uil uil-envelope",
      title: "email",
      data: "ouakassi.oussama@gmail.com",
    },
    { icon: "uil uil-phone", title: "phone", data: "+212 6 11 42 31 16" },
    {
      icon: "uil uil-map-marker-shield",
      title: "location",
      data: "Morocco / Worldwide",
    },
  ];

  return (
    <Section
      className="contact"
      id="contact"
      icon={<IoCallSharp />}
      sectionTitle="contact me"
      sectionSubtitle="get in touch with me!"
    >
      <motion.div className="contact__container ">
        <img src={IMAGES.contactIcon} alt="contact me" />
        <h2>
          Got something in mind? <br />
          Share your thoughts!
        </h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 800"
        >
          <g
            strokeWidth="9"
            stroke="hsl(158, 100%, 67%)"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="36 46"
            transform="matrix(0.984807753012208,0.17364817766693033,-0.17364817766693033,0.984807753012208,83.53616986188894,-87.38237227165536)"
          >
            <path
              d="M184.72274780273438 317.1826477050781Q239.72274780273438 -126.81735229492188 360.2227478027344 492.6826477050781Q757.7227478027344 -126.81735229492188 535.7227478027344 668.1826477050781 "
              markerEnd="url(#SvgjsMarker7346)"
            ></path>
          </g>
          <defs>
            <marker
              markerWidth="6.5"
              markerHeight="6.5"
              refX="3.25"
              refY="3.25"
              viewBox="0 0 6.5 6.5"
              orient="auto"
              id="SvgjsMarker7346"
            >
              <polygon
                points="0,6.5 3.25,3.25 0,0 6.5,3.25"
                fill="hsl(158, 100%, 67%)"
              ></polygon>
            </marker>
          </defs>
        </svg>
      </motion.div>
      <a href="mailto:ouakassicontactcontac@gmail.com">
        <Button title="Send me a message" icon={<FaEnvelope />} />
      </a>
    </Section>
  );
};

export default Contact;
