import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./Header.css";
import IMAGES from "../../images";

const NAV_ITEMS = [
  {
    name: "",
    icon: "uil uil-estate",
  },
  {
    name: "projects",
    icon: "uil uil-folder-open",
  },
  // {
  //   name: "blog",
  //   icon: "uil uil-files-landscapes-alt",
  // },
  {
    name: "contact",
    icon: "uil uil-calling",
  },
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

  // const windowHeight = useWindowHeight();

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
          <nav className="nav">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="nav__logo"
              >
                <img src={IMAGES.logo} alt="logo" />
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
                        <i className={`${icon} nav__icon`} />
                        <span>{name === "" ? "home" : name}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <i
                className="uil uil-times nav__close"
                onClick={() => handleClick(false)}
              />
            </div>
            {/* <div className="nav__btns">
              <div className="nav__toggle" onClick={() => handleClick(true)}>
                <i className="uil uil-apps"></i>
              </div>
            </div> */}
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
