import React from "react";
import Home from "../../sections/home/home";
import About from "../../sections/about/about";
import Pricing from "../../sections/pricing/pricing";
import Contact from "../../sections/contact/contact";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
