import React, { useState, useEffect } from "react";
import "../App.css";
import Mdd from "../Img/mdd.png";
import LE from '../Img/LE.png'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Anchor } from "antd";

function Main() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '80vw',
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 10,
    borderRadius:5,
    p: 4,
    overflowY:'scroll',
    height:"80vh",
  };
  const [activeSection, setActiveSection] = useState("#work");
  const handleButtonClick = (e) => {
    setActiveSection(e.target.dataset.target);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpenMdd = () => setOpen(true);
  const handleCloseMdd = () => setOpen(false);
   const [openLE, setOpenLE] = React.useState(false);
   const handleOpenLE = () => setOpen(true);
   const handleCloseLE = () => setOpen(false);
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
                  <a
                    onClick={handleOpenMdd}
                    className="works_button button button_small"
                  >
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
            {/* Lexicon Editor Application*/}
            <article className="works_card">
              <img src={LE} alt="LE" className="projects_img" />
              <div className="works_modal">
                <div>
                  <span className="works_subtitle">Lexicon Editor</span>
                  <h3 className="works_title">Lexicon Editor</h3>
                  <a
                    onClick={handleOpenLE}
                    className="works_button button button_small"
                  >
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
          >
            <article className="works_card">
              <img
                src={LE}
                alt="interact-react-impact"
                className="projects_img"
              />
              <div className="works_modal">
                <div>
                  <span className="works_subtitle">Interact-React-Impact</span>
                  <h3 className="works_title">Interact-React-Impact</h3>
                  <a
                    onClick={handleOpenLE}
                    className="works_button button button_small"
                  >
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
            <article className="works_card">
              <img src={LE} alt="LE" className="projects_img" />
              <div className="works_modal">
                <div>
                  <span className="works_subtitle">Lexicon Editor</span>
                  <h3 className="works_title">Lexicon Editor</h3>
                  <a
                    onClick={handleOpenLE}
                    className="works_button button button_small"
                  >
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
            <article className="works_card">
              <img src={LE} alt="LE" className="projects_img" />
              <div className="works_modal">
                <div>
                  <span className="works_subtitle">Lexicon Editor</span>
                  <h3 className="works_title">Lexicon Editor</h3>
                  <a
                    onClick={handleOpenLE}
                    className="works_button button button_small"
                  >
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
            <article className="works_card">
              <img src={LE} alt="LE" className="projects_img" />
              <div className="works_modal">
                <div>
                  <span className="works_subtitle">Lexicon Editor</span>
                  <h3 className="works_title">Lexicon Editor</h3>
                  <a
                    onClick={handleOpenLE}
                    className="works_button button button_small"
                  >
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
        <Modal
          open={open}
          onClose={handleCloseMdd}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div style={{}}>
              <Anchor
                direction="horizontal"
                items={[
                  {
                    key: "about",
                    href: "#about",
                    title: "About",
                  },
                  {
                    key: "role",
                    href: "#role",
                    title: "My contribution",
                  },
                  {
                    key: "part-3",
                    href: "#part-3",
                    title: "Part 3",
                  },
                ]}
              />
            </div>
            <div>
              <div
                id="about"
                style={{
                  width: "100%",
                  height: "80vh",
                  textAlign: "center",
                  background: "rgba(0,255,0,0.02)",
                }}
              >
                The Message Design Dashboard (MDD) helps you write a complete
                Wireless Emergency Alert (WEA) using a database of message
                content that is based on scientific research and has been
                thoroughly tested.
                <br></br>
                Funded by the US Federal Emergency Management Agency (FEMA)
                Integrated Public Alert and Warning Program (IPAWS) and
                developed by a research team at the University at Albany, the
                MDD helps IPAWS alerting authorities (AA) write effective
                Wireless Emergency Alerts (WEAs). The MDD provides alerting
                authorities with the ability to quickly write 90- and
                360-character WEAs using message content that has been tested
                with the public.
              </div>
              <div
                id="role"
                style={{
                  width: "100%",
                  height: "80vh",
                  textAlign: "center",
                  background: "rgba(0,0,255,0.02)",
                }}
              >
                aasadasdsd Funded by the US Federal Emergency Management Agency
                (FEMA) Integrated Public Alert and Warning Program (IPAWS) and
                developed by a research team at the University at Albany, the
                MDD helps IPAWS alerting authorities (AA) write effective
                Wireless Emergency Alerts (WEAs). The MDD provides alerting
                authorities with the ability to quickly write 90- and
                360-character WEAs using message content that has been tested
                with the public. Funded by the US Federal Emergency Management
              </div>
              <div
                id="part-3"
                style={{
                  // width: "100vw",
                  // height: "100vh",
                  textAlign: "center",
                  background: "#FFFBE9",
                }}
              />
            </div>
          </Box>
        </Modal>
        <Modal
          open={openLE}
          onClose={handleCloseLE}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div style={{}}>
              <Anchor
                direction="horizontal"
                items={[
                  {
                    key: "about",
                    href: "#about",
                    title: "About",
                  },
                  {
                    key: "role",
                    href: "#role",
                    title: "My contribution",
                  },
                  {
                    key: "part-3",
                    href: "#part-3",
                    title: "Part 3",
                  },
                ]}
              />
            </div>
            <div>
              <div
                id="about"
                style={{
                  width: "100%",
                  height: "80vh",
                  textAlign: "center",
                  background: "rgba(0,255,0,0.02)",
                }}
              >
                The Message Design Dashboard (MDD) helps you write a complete
                Wireless Emergency Alert (WEA) using a database of message
                content that is based on scientific research and has been
                thoroughly tested.
                <br></br>
                Funded by the US Federal Emergency Management Agency (FEMA)
                Integrated Public Alert and Warning Program (IPAWS) and
                developed by a research team at the University at Albany, the
                MDD helps IPAWS alerting authorities (AA) write effective
                Wireless Emergency Alerts (WEAs). The MDD provides alerting
                authorities with the ability to quickly write 90- and
                360-character WEAs using message content that has been tested
                with the public.
              </div>
              <div
                id="role"
                style={{
                  width: "100%",
                  height: "80vh",
                  textAlign: "center",
                  background: "rgba(0,0,255,0.02)",
                }}
              >
                aasadasdsd Funded by the US Federal Emergency Management Agency
                (FEMA) Integrated Public Alert and Warning Program (IPAWS) and
                developed by a research team at the University at Albany, the
                MDD helps IPAWS alerting authorities (AA) write effective
                Wireless Emergency Alerts (WEAs). The MDD provides alerting
                authorities with the ability to quickly write 90- and
                360-character WEAs using message content that has been tested
                with the public. Funded by the US Federal Emergency Management
              </div>
              <div
                id="part-3"
                style={{
                  // width: "100vw",
                  // height: "100vh",
                  textAlign: "center",
                  background: "#FFFBE9",
                }}
              />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Main;
