import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./Header.css";
import IMAGES from "../../images";
import { FaServer, FaUserNinja } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { RiHome5Line } from "react-icons/ri";
import { GiNinjaArmor } from "react-icons/gi";

const NAV_ITEMS = [
  {
    name: "",
    icon: <RiHome5Line />,
  },
  {
    name: "projects",
    icon: <FaServer />,
  },
  {
    name: "about",
    icon: <FaUserNinja />,
  },

  // {
  //   name: "contact",
  //   icon: <IoCallSharp />,
  // },
];

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // If scrolling up or close to the top, show the navbar
      setShowNavbar(currentScroll < prevScroll || currentScroll < 100);

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  const handleClick = (state) => {
    setToggleNav(state);
  };

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: -50,
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="header headerShadow"
        >
          <motion.nav
            initial={{ gap: "16rem" }}
            animate={{ gap: "8rem" }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
            className="nav"
          >
            <Link to="/">
              <motion.div
                // whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="nav__logo"
                style={{ position: "relative" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 800"
                  style={{ width: "100%", height: "100%", maxWidth: "3rem" }}
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="nnneon-grad"
                    >
                      <stop
                        stopColor="hsl(205, 69%, 60%)"
                        stopOpacity="1"
                        offset="0%"
                      />
                      <stop
                        stopColor="hsl(300, 100%, 80%)"
                        stopOpacity="1"
                        offset="100%"
                      />
                    </linearGradient>
                    <filter
                      id="nnneon-filter"
                      x="-100%"
                      y="-100%"
                      width="400%"
                      height="400%"
                      filterUnits="objectBoundingBox"
                      primitiveUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feGaussianBlur
                        stdDeviation="17 15"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        in="SourceGraphic"
                        edgeMode="none"
                        result="blur"
                      />
                    </filter>
                    <filter
                      id="nnneon-filter2"
                      x="-100%"
                      y="-100%"
                      width="400%"
                      height="400%"
                      filterUnits="objectBoundingBox"
                      primitiveUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feGaussianBlur
                        stdDeviation="17 17"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        in="SourceGraphic"
                        edgeMode="none"
                        result="blur"
                      />
                    </filter>
                  </defs>
                  <motion.g
                    strokeWidth="44"
                    stroke="url(#nnneon-grad)"
                    fill="none"
                    transform="rotate(26, 400, 400)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.circle
                      r="350"
                      cx="400"
                      cy="400"
                      filter="url(#nnneon-filter)"
                      initial={{ strokeDasharray: "0 2200" }}
                      animate={{ strokeDasharray: "2200 2200" }}
                      transition={{ duration: 2 }}
                    />
                    <motion.circle
                      r="350"
                      cx="412"
                      cy="400"
                      filter="url(#nnneon-filter2)"
                      opacity="0.25"
                      // initial={{ strokeDasharray: "0 2200", opacity: 0 }}
                      // animate={{ strokeDasharray: "2200 2200", opacity: 0.25 }}
                      // transition={{ duration: 3, delay: 1 }}
                    />
                    <motion.circle
                      r="350"
                      cx="388"
                      cy="400"
                      filter="url(#nnneon-filter2)"
                      opacity="0.25"
                      initial={{ strokeDasharray: "0 2200", opacity: 0 }}
                      animate={{ strokeDasharray: "2200 2200", opacity: 0.25 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.circle
                      r="350"
                      cx="400"
                      cy="400"
                      initial={{ strokeDasharray: "0 2200" }}
                      animate={{ strokeDasharray: "2200 2200" }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </motion.g>
                </svg>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  uakassi
                </motion.span>
              </motion.div>
            </Link>
            <div
              // show the navbar
              className={`nav__menu ${toggleNav ? "show-menu " : "hide-nav"}`}
              id="#nav-menu"
            >
              <ul className="nav__list ">
                {NAV_ITEMS.map(({ name, icon }, i) => {
                  return (
                    <li className="nav__item" key={i}>
                      <NavLink
                        onClick={() => handleClick(false)}
                        to={`/${name}`}
                        className="nav__link"
                      >
                        {({ isActive, isPending, isTransitioning }) => (
                          <>
                            {icon}
                            {/* <i className={`${icon} nav__icon`} /> */}
                            <span>{name === "" ? "home" : name}</span>

                            {isActive && <NavLinkUnderline />}
                          </>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;

const NavLinkUnderline = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 200"
      className="line"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, easings: "easeInOut" }}
        d="M708.9686279296875,39.461883544921875C605.530657450358,40.95665168762207,89.83557637532552,41.55455780029297,88.34080505371094,48.43049240112305C86.84603373209636,55.306427001953125,696.4125556945801,72.34678840637207,700,80.71749114990234C703.5874443054199,89.08819389343262,148.57996877034506,91.62929789225261,109.86547088623047,98.65470886230469C71.15097300211588,105.68011983235677,408.07175572713214,118.83408228556316,467.7130126953125,122.86995697021484"
        fill="none"
        strokeWidth="20"
        stroke="url(#SvgjsLinearGradient1002)"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="SvgjsLinearGradient1002"
          gradientTransform="rotate(96, 0.5, 0.5)"
        >
          <stop stopColor="hsl(187, 100%, 58% , 80%)" offset="0" />
          <stop stopColor="hsl(160, 100%, 58%)" offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
