import "./ServicesGlow.css";
import React, { useRef } from "react";
import Section from "../Section";
import { FaServicestack } from "react-icons/fa6";
import { MouseProvider } from "../../hooks/useMouse";
import { GlowCard } from "../GlowingCard";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "../animations/AnimatedText";

const cards = [
  {
    className: "ss one",
    baseHue: undefined,
    title: "Frontend Excellence, Backend Mastery",
    text: "I design sleek, responsive interfaces and build powerful server-side systems—delivering complete, end-to-end web solutions with efficiency and scalability.",
    img: "./front-icon.png",
    alt: "frontend icon",
    animated: true,
  },
  {
    className: "ss two",
    baseHue: 700,
    title: "From UI to API, I’ve Got It Covered",
    text: "With expertise in frontend frameworks, backend architectures, and databases, I create seamless applications that connect performance with usability.",
    img: "./ui-icon.png",
    alt: "ui icon",
    animated: true,
  },
  {
    className: "ss three",
    baseHue: 840,
    title: "Scaling Ideas into Real-World Products",
    text: "Whether building interactive user interfaces or engineering secure, high-performance backends, I turn concepts into impactful digital products.",
    img: "./back-icon.png",
    alt: "backend icon",
    animated: true,
  },
  {
    className: "ss four",
    baseHue: 400,
    title: "Full-Stack Development, One Skillset",
    text: "I integrate frontend, backend, and cloud technologies to deliver complete web applications—scalable, maintainable, and built for long-term growth.",
    img: "./cloud-icon.png",
    alt: "cloud icon",
    animated: true,
  },
];

export default function ServicesGlow() {
  const iconRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: iconRef,
    offset: ["start start", "end end"],
  });

  const Y = useTransform(scrollYProgress, [0, 1], [-30, 100]);

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const cardSetting = {
    baseHue: 200,
    spread: 0,
    saturation: 300,
    lightness: 20,
    size: 300,
    radius: 20,
    border: 3,
    bgSpotOpacity: 0.1,
    outerGlow: false,
  };
  return (
    <Section
      sectionTitle="services"
      icon={<FaServicestack />}
      sectionSubtitle="what i offer to you as client"
    >
      <MouseProvider>
        <div className="home__quotes">
          {cards.map(
            (
              { className, baseHue, title, text, img, alt, animated },
              index
            ) => (
              <GlowCard
                key={index}
                className={className}
                {...cardSetting}
                {...(baseHue ? { baseHue } : {})}
              >
                <div className="content-container">
                  <h1>{title}</h1>
                  <p>
                    {animated ? (
                      <AnimatedText speed={0.02} text={text} />
                    ) : (
                      text
                    )}
                  </p>
                  <div className="img__container">
                    <motion.img style={{ y: Y, scale }} src={img} alt={alt} />
                  </div>
                </div>
              </GlowCard>
            )
          )}
        </div>
      </MouseProvider>
    </Section>
  );
}
