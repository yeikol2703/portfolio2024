import React from "react";
import avatar from "../assets/avatar.jpg";

function Home() {
  return (
    <div>
      <div className="home-container" id="home">
        <div className="left-section">
          <h2>
            Yeikol <span>Villalobos</span>
          </h2>
          <h3>Developer</h3>
          <p>
            Skilled in building robust, scalable applications and optimizing
            complex front-end architectures. Adept at collaborating across teams
            to drive innovative solutions and enhance user experience
          </p>

          <div className="home-btn-group">
            <div className="home-btn">
              <a href="#portfolio">View Work</a>
            </div>
            <div className="home-btn">
              <a href="#contact">Contact Me</a>
            </div>
          </div>
        </div>

        <div className="right-section">
          <img
            className="react-icon"
            src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
            alt="Icon"
          />
          <img
            className="avatar-image"
            src={avatar}
            alt="yeikol"
            style={{ width: "480px", height: "auto" }}
          />
        </div>
      </div>

      <div className="icons-train">
        <img
          className="train-icon"
          src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
          alt="Icon"
        />
        <img
          className="train-icon"
          src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
          alt="Icon"
        />
        <img
          className="train-icon"
          src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
          alt="Icon"
        />
        <img
          className="train-icon"
          src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
          alt="Icon"
        />
        <img
          className="train-icon"
          src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
          alt="Icon"
        />
        <img
          className="train-icon"
          src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000"
          alt="Icon"
        />
      </div>
    </div>
  );
}

export default Home;
