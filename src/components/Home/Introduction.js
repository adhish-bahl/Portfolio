import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Introduction() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Adhish Bahl, pursuing Masters of Computer Applications (MCA) from Christ University, Bangalore.
              <br />
              <br />I am an aspiring Full Stack Web Developer, keen to work on tools like <b className="purple"> HTML5, CSS3, JavaScript, ReactJS, NodeJS, NextJS, TypeScript and MySQL.</b> I love upskilling in new technologies and am constantly looking for opportunities to learn.
              <br />
              <br />
              I am also a sports person who enjoys <b className="purple">football and swimming.</b>
              <br />
              <br />
              An absolute tech enthusiast, I am always up for conversations on all things technology. Let's connect!
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="home-about-education">
            <h1 style={{ fontSize: "2.6em", marginBottom: "2rem" }}>
              MY <span className="purple"> EDUCATION</span>
            </h1>
            <div style={{ borderLeft: "1px solid purple", paddingLeft: "2rem" }}>
              <p className="p-3 rounded mb-4" style={{border: "1px solid purple"}}>
                <p className="d-flex justify-content-between mb-0">
                  <h4><span className="purple">Masters of Computer Application</span></h4>
                  <h6>July 2023 - May 2025</h6>
                </p>
                <p className="d-flex justify-content-between mb-0">
                  <h5>Christ (Deemed to be Univeristy)</h5>
                  <h6>Bangaluru, Kar</h6>
                </p>
                <h5>Percentage: <span className="purple">79%</span></h5>
              </p>

              <p className="p-3 rounded mb-4" style={{border: "1px solid purple"}}>
                <p className="d-flex justify-content-between mb-0">
                  <h4><span className="purple">Bachelor  of Computer Application</span></h4>
                  <h6>July 2020 - May 2023</h6>
                </p>
                <p className="d-flex justify-content-between mb-0">
                  <h5>Christ (Deemed to be Univeristy)</h5>
                  <h6>Bangaluru, Kar</h6>
                </p>
                <h5>Percentage: <span className="purple">80%</span></h5>
              </p>

              <p className="p-3 rounded mb-4" style={{border: "1px solid purple"}}>
                <p className="d-flex justify-content-between mb-0">
                  <h4><span className="purple">Senior Secondary</span></h4>
                  <h6>2020</h6>
                </p>
                <p className="d-flex justify-content-between mb-0">
                  <h5>Mayoor School</h5>
                  <h6>Ajmer, Raj</h6>
                </p>
                <h5>Science Biology with IP and PE</h5>
                <h5>Percentage: <span className="purple">80%</span></h5>
              </p>

              <p className="p-3 rounded mb-4" style={{border: "1px solid purple"}}>
                <p className="d-flex justify-content-between mb-0">
                  <h4><span className="purple">Secondary</span></h4>
                  <h6>2018</h6>
                </p>
                <p className="d-flex justify-content-between mb-0">
                  <h5>Mayoor School</h5>
                  <h6>Ajmer, Raj</h6>
                </p>
                <h5>Percentage: <span className="purple">85%</span></h5>
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="home-about-social mt-5">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/adhish-bahl/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adhishbahl/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:adhishbahl0@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="//api.whatsapp.com/send?phone=919462849725&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Introduction;
