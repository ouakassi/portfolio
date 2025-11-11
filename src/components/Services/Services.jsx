import "./Services.css";

import Section from "../Section";
import IMAGES from "../../images/index";
import { TbSend2 } from "react-icons/tb";
import { RiResetRightFill } from "react-icons/ri";
import { useTransform, useScroll, motion, useInView } from "framer-motion";

import { FaLaptopCode } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Button from "../Buttons/Button";
import AnimatedText from "../animations/AnimatedText";

const services = [
  {
    title: (
      <>
        <AnimatedText once={true} text={"Frontend Architect"} />
      </>
    ),
    IllustrationComponent: <UiSystemHero />,
    className: "frontend",
    text: `I craft performant, pixel-perfect, and responsive user interfaces using React and modern tooling. 
    My focus is on creating modular, maintainable component systems, ensuring consistent UX across devices, 
    and integrating motion design to make interactions feel intuitive and alive.`,
  },
  {
    title: (
      <>
        <AnimatedText once={true} text={"Backend Engineer"} />
      </>
    ),
    IllustrationComponent: <ApiBackendHero />,
    className: "backend",
    text: `I design and implement secure, scalable APIs with Node.js, Express, and databases like PostgreSQL or MongoDB. 
    My backend work focuses on clean architecture, authentication flows, logging, and performance optimization, 
    ensuring reliable data communication between client and server.`,
  },
  {
    title: (
      <>
        <AnimatedText once={true} text={"DevOps Specialist"} />
      </>
    ),
    IllustrationComponent: <CloudDeployHero />,
    className: "cloud",
    text: `I manage deployment workflows and automation pipelines using platforms like Vercel, Render, and Docker. 
    From continuous integration to cloud optimization, I ensure smooth, zero-downtime releases and a secure, 
    maintainable infrastructure ready to scale.`,
  },
];

export default function Services() {
  return (
    <Section
      className="services-section"
      sectionTitle="Services"
      sectionSubtitle="Services i offer as a Web Developer"
      icon={<FaLaptopCode />}
    >
      <div className="services-container container">
        <div className="services">
          {services.map((service, index) => {
            const ref = useRef();
            const isCardInView = useInView(ref);

            return (
              <div className={`service ${service.className}`} key={index}>
                <motion.h2
                  initial={false}
                  animate={
                    isCardInView
                      ? { y: 0, opacity: 1, zIndex: -1 }
                      : { y: 100, opacity: 0, zIndex: 1 }
                  }
                  transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                >
                  {service.title}
                </motion.h2>
                <Illustration>
                  <div ref={ref} className="illustration-wrapper">
                    {service.IllustrationComponent}
                  </div>
                </Illustration>
                <motion.p
                  initial={{ opacity: 0, y: -10, filter: "blur(20px)", x: 50 }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", x: 50 }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {service.text}
                </motion.p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <p>
                I build robust, scalable, and secure backend systems with
                expertise in Node.js and Express. Skilled in designing clean
                RESTful APIs, integrating databases, and implementing
                authentication, I ensure high-performance, maintainable, and
                production-ready backend solutions that seamlessly connect with
                frontend applications.
              </p> */}
      {/* <DarkUIHero /> */}
      {/* <CloudDeployHero /> */}
    </Section>
  );
}

const Illustration = ({ children, forwardRef }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "center end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 5]); // stays the same
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const z = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.div
      ref={ref}
      style={{
        // "--x": x,
        "--y": y,
        "--z": z,
        // "--rotateX": rotateX,
        "--rotateZ": rotateZ,
        // scale,
      }}
      className="illustration"
    >
      {children}
    </motion.div>
  );
};

function DarkUIHero() {
  return (
    <section className="dui-wrap" aria-label="Dark UI elements hero">
      <div className="dui-frame">
        {/* Window bar */}
        <div className="dui-titlebar" aria-hidden="true">
          <span className="dui-dot red" />
          <span className="dui-dot amber" />
          <span className="dui-dot green" />
          <div className="dui-search" />
        </div>

        {/* Content grid */}
        <div className="dui-grid">
          {/* Sidebar card */}
          <div className="dui-card dui-sidebar" aria-label="Sidebar mock">
            <div className="dui-line long" />
            <div className="dui-line" />
            <div className="dui-line" />
            <div className="dui-line short" />
          </div>

          {/* Middle rail with draggable style card */}
          <div className="dui-rail">
            <div className="dui-panel" />
            <div className="dui-floating" aria-label="Draggable card">
              <div className="dui-handle" />
            </div>
          </div>

          {/* Placeholder panel (dashed) */}
          <div className="dui-dashed" aria-label="Empty drop zone" />
        </div>
      </div>
    </section>
  );
}

const requestJsonBlocks = [
  { type: "k", className: "key1" },
  { type: "v", className: "v1" },
  { type: "k", className: "key2" },
  { type: "v", className: "v2" },
  { type: "k", className: "key3" },
  { type: "v", className: "v3" },
];
const jsonBlocks = [
  { keyClass: "key1", valueClass: "v1", colorClass: "v-green" },
  { keyClass: "key2", valueClass: "v2", colorClass: "v-blue" },
  { keyClass: "key3", valueClass: "v3", colorClass: "v-purple" },
];

const badges = [
  { text: "200 OK", className: "ok" },
  { text: "38 ms", className: "time" },
  { text: "1.2 KB", className: "size" },
];

const apiEndpoints = [
  {
    method: "GET",
    path: "/api/users",
    status: 200,
    chipClass: "get",
    statusClass: "ok",
  },
  {
    method: "POST",
    path: "/api/users",
    status: 201,
    chipClass: "post",
    statusClass: "create",
  },
  {
    method: "PUT",
    path: "/api/users/:id",
    status: 200,
    chipClass: "put",
    statusClass: "ok",
  },
  {
    method: "DEL",
    path: "/api/users/:id",
    status: 204,
    chipClass: "del",
    statusClass: "warn",
  },
  {
    method: "GET",
    path: "/api/health",
    status: 200,
    chipClass: "get",
    statusClass: "ok",
    dim: true,
  },
];
function ApiBackendHero() {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef();
  const isCardInView = useInView(cardRef);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="api-grid"
    >
      {/* Left: Endpoints list */}
      <motion.aside
        ref={cardRef}
        className="api-card api-endpoints"
        aria-label="Endpoints"
      >
        {/* <h3 className="api-section-title">Endpoints</h3> */}
        <div className="api-card-container">
          {apiEndpoints.map((endpoint, index) => (
            <motion.div
              initial={false}
              animate={
                isCardInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }
              }
              transition={{
                delay: index * 0.3,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              viewport={{ amount: 0.1 }}
              key={index}
              className={`api-endpoint ${endpoint.dim ? "dim" : ""}`}
            >
              <span className={`chip ${endpoint.chipClass}`}>
                {endpoint.method}
              </span>
              <span className="path">{endpoint.path}</span>
              <span className={`status ${endpoint.statusClass}`}>
                {endpoint.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.aside>

      {/* Center: Request/Response panels */}
      <main className="api-io" aria-label="Request and response">
        <div className="api-card api-request">
          <div className="api-section-title">Request</div>
          <div className="api-row">
            <span className="chip get">GET</span>
            <div className="api-url" />
            <div className="api-auth">Bearer ••••</div>
          </div>
          <div className="api-json">
            {requestJsonBlocks.map((block, index) => (
              <motion.div
                key={block.className}
                initial={{ width: 0 }}
                whileInView={{ width: `${60 + index * 10}%` }} // width grows with index
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }} // stagger
                className={`${block.type} ${block.className}`}
              />
            ))}
          </div>
        </div>

        <div className="api-card api-response">
          <div className="api-section-title">Response</div>
          <div className="api-meta">
            {badges.map((badge, index) => (
              <motion.span
                key={index}
                className={`badge ${badge.className}`}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.4 }}
              >
                {badge.text}
              </motion.span>
            ))}
          </div>
          <div className="api-json json-dark">
            {jsonBlocks.map((block, index) => (
              <div key={block.keyClass}>
                <motion.div
                  className={`v ${block.valueClass} ${block.colorClass}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${60 + index * 10}%` }} // width relative to index
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Floating queue card */}
        <motion.div
          initial={{ y: 50, x: 50 }}
          whileInView={
            isHovered
              ? {
                  y: -10,
                  x: -50,
                  scale: 1.2,
                }
              : { y: 0, x: 0, backdropFilter: "blur(0px)" }
          }
          transition={{ delay: 0.2, duration: 0.6 }}
          className="api-floating"
          aria-label="Queue / worker"
        >
          <div className="api-section-title small">Queue</div>
          <div className="queue">
            <div className="qitem ok" />
            <div className="qitem ok" />
            <div className="qitem warn" />
            <div className="qitem ok" />
            <div className="qitem dim" />
          </div>
          <div className="workers">
            <span className="badge worker">2 workers</span>
            <span className="badge load">CPU 41%</span>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

function CloudDeployHero() {
  return (
    <div className="cd-grid">
      {/* Left: CI/CD pipeline */}
      <aside className="card pipeline" aria-label="CI/CD pipeline">
        <div className="sec-title">Pipeline</div>

        <div className="step ok">
          <span className="pill build">Build</span>
          <div className="bar" />
          <span className="badge good">2m 14s</span>
        </div>

        <div className="step ok">
          <span className="pill test">Test</span>
          <div className="bar mid" />
          <span className="badge info">128 passed</span>
        </div>

        <div className="step ok">
          <span className="pill image">Image</span>
          <div className="bar short" />
          <span className="badge good">v1.12.3</span>
        </div>

        <div className="step">
          <span className="pill deploy">Deploy</span>
          <div className="bar tiny" />
          <span className="badge warn">awaiting</span>
        </div>

        <div className="divider" />

        <div className="meta">
          <span className="chip branch">main</span>
          <span className="chip pr">PR #248</span>
          <span className="chip commit">c7a9e2f</span>
        </div>
      </aside>

      {/* Center: Environments flow */}
      <main className="card envs" aria-label="Environments">
        <div className="sec-title">Environments</div>

        <div className="env-row">
          <div className="env dev">
            <div className="env-top">
              <span className="dot ok" />
              <span className="env-name">Dev</span>
              <span className="badge good">Healthy</span>
            </div>
            <div className="env-body">
              <div className="slot" />
              <div className="slot" />
            </div>
          </div>

          <div className="flow-arrow" aria-hidden="true">
            <span className="flow-line" />
          </div>

          <div className="env stage">
            <div className="env-top">
              <span className="dot ok" />
              <span className="env-name">Stage</span>
              <span className="badge info">Warm</span>
            </div>
            <div className="env-body">
              <div className="slot" />
              <div className="slot short" />
            </div>
          </div>

          <div className="flow-arrow" aria-hidden="true">
            <span className="flow-line" />
          </div>

          <div className="env prod">
            <div className="env-top">
              <span className="dot ok" />
              <span className="env-name">Prod</span>
              <span className="badge good">Live</span>
            </div>
            <div className="env-body">
              <div className="slot long" />
              <div className="slot" />
            </div>
          </div>
        </div>

        <div className="cloud-item svc">
          <div className="icon bubble" />
          <div className="text">
            <div className="t1" />
            <div className="t2" />
          </div>
          <span className="badge good">OK</span>
        </div>

        <div className="cloud-item fn">
          <div className="icon bolt" />
          <div className="text">
            <div className="t1 short" />
            <div className="t2" />
          </div>
          <span className="badge info">Cold→Warm</span>
        </div>

        {/* Floating release card */}
        <div className="floating release" aria-label="Release">
          <div className="sec-title tiny">Release</div>
          <div className="rel-row">
            <span className="chip tag">v1.12.3</span>
            <span className="badge time">rolled 3m ago</span>
          </div>
          <div className="rel-row">
            <span className="chip strategy">Blue/Green</span>
            <span className="badge size">3 pods</span>
          </div>
          <div className="rel-bar" />
        </div>
      </main>
    </div>
  );
}

function UiSystemHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // delay between child animations
      },
    },
  };

  // Child animation (each child animates in)
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <div className="ui-grid">
      {/* Left: Component library palette */}
      <aside className="card palette" aria-label="Component library">
        <div className="sec-title">Components</div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="comp-row"
        >
          <motion.div variants={childVariants} className="comp chip">
            Button
          </motion.div>
          <motion.div variants={childVariants} className="comp chip alt">
            Badge
          </motion.div>
          <motion.div variants={childVariants} className="comp chip">
            Tag
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="comp-block"
        >
          <motion.div variants={childVariants} className="btn btn-primary" />
          <motion.div variants={childVariants} className="btn btn-ghost" />
          <motion.div variants={childVariants} className="btn btn-outline" />
        </motion.div>

        <div className="comp-block">
          <div className="field">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="label"
            />
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="input"
            />
          </div>
          <div className="field">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="label short"
            />
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="input"
            />
          </div>
        </div>

        <motion.div className="comp-block">
          <motion.div
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Button icon={<TbSend2 />} title={"submit"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Button icon={<RiResetRightFill />} title={"reset"} />
          </motion.div>
        </motion.div>
      </aside>

      {/* Center: Live preview artboard */}
      <main className="card preview" aria-label="Preview artboard">
        <div className="sec-title">Preview</div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="toolbar"
        >
          <motion.div variants={childVariants} className="tab on" />
          <motion.div variants={childVariants} className="tab" />
          <motion.div variants={childVariants} className="spacer" />
          <motion.div variants={childVariants} className="chip tiny">
            960×600
          </motion.div>
        </motion.div>

        <div className="screen">
          <div className="sidebar">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="skl long"
            />
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="skl"
            />
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="skl"
            />
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="skl short"
            />{" "}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="skl short"
            />
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="skl short"
            />
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="skl short"
            />
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="skl short"
            />
          </div>
          <div className="content">
            <motion.div
              initial={{ opacity: 0, width: 0, scale: 0 }}
              whileInView={{ opacity: 1, width: "100%", scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-block"
            />

            <motion.div
              initial={{ opacity: 0, width: 0, scale: 0 }}
              whileInView={{ opacity: 1, width: "100%", scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-mini"
            />
          </div>
        </div>

        {/* Floating inspector */}
        <div className="floating insp" aria-label="Inspector">
          <div className="sec-title tiny">Inspector</div>
          <div className="row">
            <span className="pill">Padding</span>
            <div className="bar" />
            <span className="badge">16</span>
          </div>
          <div className="row">
            <span className="pill">Radius</span>
            <div className="bar mid" />
            <span className="badge">12</span>
          </div>
          <div className="row">
            <span className="pill">Shadow</span>
            <div className="bar short" />
            <span className="badge">md</span>
          </div>
        </div>
      </main>
    </div>
  );
}
