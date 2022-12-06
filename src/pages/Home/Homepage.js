import React from "react";
import MyHero from "./components/MyHero";
import MyImage from "./components/MyImage";
import "../../css/nav.css";
import "../../css/home.css";
import Header from "../../components/Header";
import Theme from '../../components/Theme'

const Homepage = () => {
  return (
    <>
    <Theme/>
      <Header />
      <section id="designer">
        <div className="container-fluid main-container container-home p-0">
          <div className="color-block d-none d-lg-block"></div>
          <div className="row home-details-container align-items-center">
            <div className="col-6 col-lg-4 d-lg-block image">
              <MyImage />
            </div>
            <div className="col-6 col-lg-8">
              <div className="hometext">
                <MyHero />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
