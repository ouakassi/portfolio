import "./Contact.css";

import Section from "../../components/Section";
import ContactBox from "./ContactBox";
import SocialLink from "../SocialLink";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { IoCallSharp } from "react-icons/io5";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import IMAGES from "../../images";
import Button from "../Buttons/Button";
import SecondArrow from "./SecondArrow";
import AnimatedText from "../animations/AnimatedText";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Contact = () => {
  const sectionRef = useRef();
  const isSectionInView = useInView(sectionRef, { amount: 0.8 });

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
      className="contact-section"
      id="contact"
      icon={<IoCallSharp />}
      sectionTitle="contact"
      sectionSubtitle="get in touch with me!"
    >
      <motion.div ref={sectionRef} className="contact__container ">
        {/* <div className="img-container"> */}
        <motion.img
          initial={{ x: -20, opacity: 0, scale: 0.7 }}
          animate={isSectionInView ? { x: 0, opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          src={"./mail-icon.png"}
          alt="contact me"
        />
        {/* </div> */}
        <h2>
          <AnimatedText
            text=" Got something in mind?
                Share your thoughts!"
            speed={0.02}
          />
        </h2>
      </motion.div>
      <div className="button-container">
        {isSectionInView && <Arrow />}
        <Link
          target="_blank"
          to="mailto:ouakassi.oussama@gmail.com"
          initial={{ opacity: 0, y: -210 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          aria-label="Send email"
        >
          <Button title="Send me a message" icon={<FaEnvelope />} />
        </Link>
      </div>
      {/* <SecondArrow /> */}
    </Section>
  );
};

export default Contact;

const Arrow = () => (
  <motion.svg
    className="contact-arrow"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 800 800"
    aria-label="Decorative arrow"
    initial="hidden"
    animate="visible"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <motion.defs>
      <marker
        id="SvgjsMarker7346"
        markerWidth="6.5"
        markerHeight="6.5"
        refX="3.25"
        refY="3.25"
        viewBox="0 0 6.5 6.5"
        orient="auto"
      >
        <motion.polygon
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          points="0,6.5 3.25,3.25 0,0 6.5,3.25"
          fill="var(--main-color)"
        />
      </marker>
    </motion.defs>

    <motion.g
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay: 0.1, when: "beforeChildren" },
        },
      }}
      stroke="var(--main-color)"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      // Keep original transform matrix
      transform="matrix(0.984807753012208,0.17364817766693033,-0.17364817766693033,0.984807753012208,83.53616986188894,-87.38237227165536)"
    >
      <motion.path
        d="M184.72274780273438 317.1826477050781Q239.72274780273438 -126.81735229492188 360.2227478027344 492.6826477050781Q757.7227478027344 -126.81735229492188 535.7227478027344 668.1826477050781 "
        markerEnd="url(#SvgjsMarker7346)"
        strokeWidth="9"
        strokeDasharray="36 46"
        // animate line drawing
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          pathLength: { duration: 1.8, delay: 0.2, ease: "easeInOut" },
          strokeDashoffset: {
            duration: 1.2,
            ease: "linear",
            // repeat: Infinity,
          },
        }}
      />
    </motion.g>
  </motion.svg>
);
