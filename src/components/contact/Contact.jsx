import "./Contact.css";

import Section from "../../components/Section";
import ContactBox from "./ContactBox";
import SocialLink from "../SocialLink";
import { motion } from "framer-motion";

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
      icon="uil uil-calling"
      sectionTitle="contact me"
      sectionSubtitle="get in touch with me!"
    >
      <motion.div className="contact__container container">
        <div className="contact__infos">
          <motion.p
            initial={{ x: -50, opacity: 0, transition: { duration: 1 } }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            className="contact__heading"
            viewport={{ once: true }}
          >
            Let's Build Something Amazing Together? <br />
            Ready to elevate your online presence? Whether you need a brand new
            website, a redesign, or ongoing support, I'm here to bring your
            digital vision to life. Let's collaborate and create a web presence
            that leaves a lasting impression. <br /> Write me at {""}
            <b>
              <a href="mailto:lmoutchoo@gmail.com ">lmoutchoo@gmail.com</a>
            </b>{" "}
            or shoot me a DM on
            <SocialLink
              icon="uil uil-linkedin-alt"
              link="https://www.linkedin.com/in/oussama-ouakassi-28372216a/"
            />
            or
            <SocialLink
              icon="uil uil-twitter-alt"
              link="https://www.linkedin.com/in/oussama-ouakassi-28372216a/"
            />
          </motion.p>
          {/* {CONTACT_DATA.map(({ icon, title, data }, i) => {
            return <ContactBox key={i} icon={icon} title={title} data={data} />;
          })} */}
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;
