import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
  });

  return (
    <div className="about" id="About">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              An aspiring full-stack developer with a specialization in MERN stack. Enthusiastic, hard-working, and passionate about coding. With the ability to contribute toward the organizational goal, looking forward to working as a software developer, and developing skills in a challenging work environment.
              </div>

              <div className="header__buttons myBtn">
                <a
                  href="https://drive.google.com/file/d/1H4XVZa8C9XQUqxCri67P_44aizNtYYwt/view?usp=sharing"
                  target="_blank"
                 
                  className="btn btn-outline"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;