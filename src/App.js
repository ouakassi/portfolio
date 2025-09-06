import { ReactLenis } from "lenis/react";

import "./styles/Globals.css";
import "./styles/Layout.css";
import "./styles/buttons.css";
import "./styles/Base.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollUpComponent from "./components/ScrollUpComponent";
import ScrollToTop from "./hooks/useScrollToTop";
import Routes from "./pages/Routes";
import ContactIcon from "./components/contact/ContactIcon";

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.6, // smaller duration feels more natural
        smoothWheel: true, // smooth mousewheel
        smoothTouch: false, // prevent jank on touch devices
      }}
    >
      <Header />
      <ScrollToTop />
      <Routes />
      <Footer />
      {/* <ContactIcon /> */}
      {/* <ScrollUpComponent /> */}
    </ReactLenis>
  );
};

export default App;
