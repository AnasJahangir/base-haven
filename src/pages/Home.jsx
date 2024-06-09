import React from "react";
import Header from "../components/Header";
import "./assets/Home.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Team";
import Roadmap from "../components/Roadmap";
import Faq from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="relative">
        <div className="home-container">
          <div className="home-overlay"></div>
          <div className="iframe-container">
            <iframe
              src="https://my.spline.design/3dbeautifulanimationofcubes-3ef3148628ba154808a5e2d527d5a59b/"
              frameBorder="0"
              width="100%"
              height="100%"
              className="background-iframe"
            ></iframe>
          </div>
          <div className="content">
            <Header />
            <Hero />
          </div>
        </div>
      </div>
      <div className="about-team relative">
        <About />
        <Team />
      </div>
      <Roadmap />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
