import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./Header.css";
import IMAGES from "../../images";
import { FaBars, FaServer, FaUserNinja } from "react-icons/fa6";
import { IoCallSharp, IoClose } from "react-icons/io5";
import { RiCloseLargeFill, RiHome5Line } from "react-icons/ri";
import { GiNinjaArmor } from "react-icons/gi";
import { useWindowSize } from "../../hooks/useWindowSize";
import { socialData } from "../../data/socialData";
import SocialIcon from "../contact/SocialIcon";
import {
  BsFileEarmarkArrowDownFill,
  BsLayoutSidebarInset,
} from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { TbLayoutSidebarRightFilled } from "react-icons/tb";

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
];

const MOBLE_NAV_ITEMS = [
  {
    name: "download CV",
    icon: <BsFileEarmarkArrowDownFill />,
  },
];

const Header = () => {
  const [toggleHeader, setToggleHeader] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const { isMobile } = useWindowSize();

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

  // const handleClick = (state) => {
  //   setToggleNav(state);
  // };

  function useLockBodyScrollY(isOpen) {
    useEffect(() => {
      if (isOpen) {
        document.body.classList.add("no-scroll-y");
      } else {
        document.body.classList.remove("no-scroll-y");
      }
    }, [isOpen]);
  }

  useLockBodyScrollY(toggleHeader);

  const handleNavLinkClick = () => {
    if (isMobile) {
      setToggleHeader(false);
    }
  };

  if (isMobile) {
    return (
      <>
        <motion.button
          initial={{ scale: 0.2, opacity: 0, rotate: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: toggleHeader ? 180 : 0,
            borderRadius: toggleHeader ? "50%" : "10px",
            transition: { duration: 0.4 },
          }}
          whileTap={{
            scale: 1.1,
            cursor: "pointer",
          }}
          onClick={() => setToggleHeader((prev) => !prev)}
          className={toggleHeader ? "show-header" : "hide-header"}
        >
          <motion.span
            key={toggleHeader}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {toggleHeader ? <RiCloseLargeFill /> : <FaBars />}
          </motion.span>
        </motion.button>
        <MobileHeader
          toggleHeader={toggleHeader}
          onNavLinkClick={handleNavLinkClick}
          isLogoHovered={isLogoHovered}
          onLogoHover={setIsLogoHovered}
        />
      </>
    );
  }

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
            transition={{ delay: 0.4, duration: 0.6 }}
            className="nav"
          >
            <HeaderLogo
              isLogoHovered={isLogoHovered}
              onLogoHover={setIsLogoHovered}
            />

            <ul className="nav__list ">
              {NAV_ITEMS.map(({ name, icon }, i) => {
                return (
                  <li className="nav__item" key={i}>
                    <NavLink
                      // onClick={() => handleClick(false)}
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

const HeaderLogo = ({ isLogoHovered, onLogoHover }) => (
  <Link to="/">
    <motion.div
      onMouseEnter={() => onLogoHover(true)}
      onMouseLeave={() => onLogoHover(false)}
      // whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="nav__logo"
      style={{ position: "relative" }}
    >
      <motion.svg
        animate={isLogoHovered ? { x: "120%" } : { x: "0%" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        style={{ width: "100%", height: "100%", maxWidth: "3rem" }}
      >
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nnneon-grad">
            <stop stopColor="hsl(205, 69%, 60%)" stopOpacity="1" offset="0%" />
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
      </motion.svg>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={isLogoHovered ? { opacity: 0 } : { opacity: 1, x: 0 }}
      >
        uakassi
      </motion.span>
    </motion.div>
  </Link>
);

const MobileHeader = ({
  toggleHeader,
  isLogoHovered,
  onLogoHover,
  onNavLinkClick,
}) => {
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // delay between each li
        delayChildren: 0.2, // delay before starting the first li
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <AnimatePresence>
      {toggleHeader && (
        <motion.header className="mobile-header">
          <motion.div
            initial={{ opacity: 0 }}
            animate={toggleHeader ? { opacity: 1 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overlay"
            onClick={onNavLinkClick} // close when clicking outside
            style={{
              position: "fixed",
              width: "200%",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          />
          <motion.aside
            initial={{ opacity: 0, x: "100%", borderRadius: "0px" }}
            animate={{ opacity: 1, x: 0, borderRadius: "30px 0px 0px 30px" }}
            exit={{ opacity: 0, x: "100%", borderRadius: "0px" }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.4,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <header onClick={onNavLinkClick}>
              <HeaderLogo
                isLogoHovered={isLogoHovered}
                onLogoHover={onLogoHover}
              />
            </header>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {NAV_ITEMS.concat(MOBLE_NAV_ITEMS).map(({ name, icon }, i) => (
                <motion.li
                  variants={itemVariants}
                  className="nav__item"
                  key={i}
                >
                  <NavLink
                    onClick={onNavLinkClick}
                    to={`/${name}`}
                    className="nav__link"
                    style={({ isActive }) =>
                      isActive ? { color: "var(--main-color)" } : {}
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {icon}
                        <span>{name === "" ? "home" : name}</span>
                        {isActive && <NavLinkUnderline />}
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
            <footer>
              <p>Get in touch</p>
              {/* <h2>ouakassicontact@gmail.com</h2> */}
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 0.6, delay: 0.2 }}
                className="social-icons"
              >
                {socialData.map(({ link, icon, title, color }) => {
                  return (
                    <motion.li variants={itemVariants}>
                      <SocialIcon
                        key={title}
                        link={link}
                        icon={icon}
                        title={title}
                        color={color}
                      />
                    </motion.li>
                  );
                })}
              </motion.ul>
            </footer>
          </motion.aside>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
