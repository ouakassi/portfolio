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
import LoadingScreen from "./components/animations/LoadingScreen";
import { useEffect, useState } from "react";

const App = () => (
  <>
    <Header />
    <ScrollToTop />
    <Routes />
    <Footer />
    <ContactIcon />
    <ScrollUpComponent />
  </>
);

export default App;
