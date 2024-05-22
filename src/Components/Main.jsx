import React,{useState,useEffect} from "react";
import "../App.css";
import Mdd from "../Img/mdd.png";
function Main() {
     const [activeSection, setActiveSection] = useState("#work");
       const handleButtonClick = (e) => {
         setActiveSection(e.target.dataset.target);
       };
  return (
    <div className="main">
      <div className="filters container">
        <ul className="filters_content">
          <button
            className={`filters_button ${
              activeSection === "#work" ? "active" : ""
            }`}
            data-target="#work"
            onClick={handleButtonClick}
          >
            Work Experience
          </button>
          <button
            className={`filters_button ${
              activeSection === "#projects" ? "active" : ""
            }`}
            data-target="#projects"
            onClick={handleButtonClick}
          >
            Projects
          </button>
          <button
            className={`filters_button ${
              activeSection === "#skills" ? "active" : ""
            }`}
            data-target="#skills"
            onClick={handleButtonClick}
          >
            Skills
          </button>
        </ul>
        <div className="filters_sections">
          <div
            className={`work_content grid ${
              activeSection === "#work" ? "filters_active" : ""
            }`}
            data-content
            id="works"
          >
            <article className="works_card">
              <img src={Mdd} alt="MDD" className="projects_img" />
              <div className="works_modal">
                <div>
                  <span className="works_subtitle">MDD Project</span>
                  <h3 className="works_title">MDD Project</h3>
                  <a href="#" className="works_button button button_small">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-link"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 15l6 -6" />
                      <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                      <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div
            className={`projects_content grid ${
              activeSection === "#projects" ? "filters_active" : ""
            }`}
            data-content
            id="projects"
          ></div>
          <div
            className={`skills_content grid ${
              activeSection === "#skills" ? "filters_active" : ""
            }`}
            data-content
            id="skills"
          >
            <div className="skills_area">
              <h3 className="skills_title">Frontend Developer</h3>
              <div className="skills_box">
                <div className="skills_group">
                  <div className="skills_data">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                    <div>
                      <h3 className="skills_name">ReactJs</h3>
                    </div>
                  </div>
                  <div className="skills_data">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                    <div>
                      <h3 className="skills_name">ReactJs</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills_area">
              <h3 className="skills_title">Backend Developer</h3>
              <div className="skills_box">
                <div className="skills_group">
                  <div className="skills_data">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                    <div>
                      <h3 className="skills_name">ReactJs</h3>
                    </div>
                  </div>
                  <div className="skills_data">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                    <div>
                      <h3 className="skills_name">ReactJs</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
