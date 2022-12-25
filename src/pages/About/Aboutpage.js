import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import Records from "./components/Records";
import SkillLeft from "./components/Skill/SkillLeft";
import SkillRight from "./components/Skill/SkillRight";
import ResumeLeft from "./components/Resume/ResumeLeft";
import ResumeRight from "./components/Resume/ResumeRight";
import { FaDownload } from "react-icons/fa";

const Aboutpage = () => {
  return (
    <div>
      <section id="myabout">
        <div className="about">
          <h1>About Me</h1>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 col-12">
              <div className="row">
                <div className="col-12">
                  <h3>Personal Infos</h3>
                </div>
                <div className="col-12 d-block d-sm-none">
                  <img
                    src="images/CROPPED-IMG-2644.JPG"
                    className="img-fluid main-img-mobile"
                    alt="about avatar"
                  />
                </div>
                <ul className="about-list">
                  <PersonalInfo />
                </ul>
                <div className="col-12 mt-1">
                  <a
                    className="button"
                    href="cv/İlkin_Zamanli_CV_Edited.pdf"
                    download="cv/İlkin_Zamanli_CV_Edited.pdf"
                    target="_blank"
                    
                  >
                    <span className="button-text"> Download CV </span>
                    <FaDownload className="home-psinfo-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-12">
              <div className="row">
                <Records />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="myskills">
        <div className="row">
          <div className="col-12">
            <h1>My Skills</h1>
          </div>
          <div className="skills">
            <div className="skills-bar">
              <div className="left">
                <SkillLeft />
              </div>
              <div className="right">
                <SkillRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="education">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                EXPERIENCE
                  <span>&amp;</span>
                  EDUCATION
                </h3>
              </div>
              <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                  <ul>
                    <ResumeLeft />
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                  <ul>
                    <ResumeRight />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
