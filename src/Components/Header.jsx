import React from "react";
import "../App.css";
import MyPic from "../Img/mypic.jpg";

function Header() {
  return (
    <div className="profile container">
      {/* <div className="theme-button">
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
          class="icon icon-tabler icons-tabler-outline icon-tabler-moon"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>
      </div> */}
      <div className="profile_container grid">
        <div className="profile_data">
          <div className="profile_border">
            <div className="profile_perfil">
              <img src={MyPic} alt="profile image" />
            </div>
          </div>
          <h2 className="profile_name">Praneeth Yennam</h2>
          <h3 className="profile_profession">Web Developer</h3>
          <ul className="profile_social">
            <a
              href="https://www.linkedin.com/in/praneethyennam/"
              target="_blank"
              className="profile_social_link"
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </a>
            <a
              href="https://github.com/Praneeth-22"
              className="profile_social_link"
              target="_blank"
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/yennampraneeth/"
              className="profile_social_link"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-leetcode"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 13h7.5" />
                <path d="M9.424 7.268l4.999 -4.999" />
                <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
              </svg>
            </a>
          </ul>
        </div>
        <div className="profile_info grid">
          <div className="profile_info_group">
            <h3 className="profile_info_number">1+</h3>
            <p className="profile_info_description">
              {" "}
              Years of <br></br> work
            </p>
          </div>
          <div className="profile_info_group">
            <h3 className="profile_info_number">+10</h3>
            <p className="profile_info_description">
              Completed <br></br> projects{" "}
            </p>
          </div>
          {/* <div className="profile_info_group">
            <h3 className="profile_info_number"></h3>
            <p className="profile_info_description"> </p>
          </div> */}
        </div>
        <div className="profile_buttons">
          <a download="" href="" className="button">
            {" "}
            Download CV
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
              class="icon icon-tabler icons-tabler-outline icon-tabler-download"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
