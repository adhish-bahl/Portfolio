import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
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
          <Col md={12} className="home-about-social">
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
export default Home2;
