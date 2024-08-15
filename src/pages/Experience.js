import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../components/Particle";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import CC_LOR from "../Assets/CC_LOR.pdf";
import Techleons from "../Assets/Techleons.pdf";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ zIndex: "100", position: "relative" }}>
        <h1 className="project-heading">
          My Work <strong className="purple"> Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few experience that I had.
        </p>
        <Col style={{ justifyContent: "center", paddingBottom: "10px", color: "white", minHeight: "47vh" }}>
          <Row>
            <div className="home-about-experience">
              <h3 style={{ fontSize: "2.6em", marginBottom: "2rem", textAlign: "center" }}>
                <span className="purple"> Internship </span>
              </h3>

              <p className="p-3 rounded mb-4" style={{ border: "1px solid purple" }}>
                <p className="d-flex justify-content-between mb-0">
                  <h4><span className="purple">React Developer</span></h4>
                  <h6 className="sm-hidden">July 2025 - Present</h6>
                </p>
                <p className="d-flex justify-content-between mb-0">
                  <h5>Currently in Stealth Mode</h5>
                  <h6 className="sm-hidden">Bangaluru, Kar</h6>
                </p>
                <p className='mt-3'>
                  <h6 style={{ textAlign: "justify" }}><span className="purple">CSS, TailwindCSS, JavaScript, ReactJS, NextJS, App Routing, TypeScript, API Integration</span></h6>
                  <h6 style={{ textAlign: "justify" }}>Developed a customized Project Management System for CHRIST Consulting, for centralized management of all their projects.</h6>
                  <h6 style={{ textAlign: "justify" }}>Integrates several modules to enable multi user login, personalized access and view permissions.</h6>
                </p>
                <Button
                  variant="primary"
                  href={CC_LOR}
                  target="_blank"
                  className='mt-3'
                >
                  <CgWebsite /> &nbsp;
                  View LOR
                </Button>
              </p>

              <p className="p-3 rounded mb-4" style={{ border: "1px solid purple" }}>
                <p className="d-flex justify-content-between mb-0">
                  <h4><span className="purple">Web Developer</span></h4>
                  <h6 className="sm-hidden">January 2023 - April 2023</h6>
                </p>
                <p className="d-flex justify-content-between mb-0">
                  <h5>Christ Consulting</h5>
                  <h6 className="sm-hidden">Bangaluru, Kar</h6>
                </p>
                <p className='mt-3'>
                  <h6 style={{ textAlign: "justify" }}><span className="purple">HTML, CSS, Bootstrap, Django, MySQL, JSON, JavaScript</span></h6>
                  <h6 style={{ textAlign: "justify" }}>Developed a customized Project Management System for CHRIST Consulting, for centralized management of all their projects.</h6>
                  <h6 style={{ textAlign: "justify" }}>Integrates several modules to enable multi user login, personalized access and view permissions.</h6>
                </p>
                <Button
                  variant="primary"
                  href={CC_LOR}
                  target="_blank"
                  className='mt-3'
                >
                  <CgWebsite /> &nbsp;
                  View LOR
                </Button>
              </p>
            </div>
          </Row>

          <Row>
            <div className="home-about-description">
              <h3 style={{ fontSize: "2.6em", marginBottom: "2rem", textAlign: "center" }}>
                <span className="purple"> Freelance Project </span>
              </h3>
              <p className="p-3 rounded mb-4" style={{ border: "1px solid purple" }}>
                <p className="d-flex justify-content-between mb-0">
                  <h4><span className="purple">Web Developer</span></h4>
                  <h6>April 2023</h6>
                </p>
                <p className="d-flex justify-content-between mb-0">
                  <h5>Techleons 2023</h5>
                  <h6>Bangaluru, Kar</h6>
                </p>
                <p className='mt-3'>
                  <h6 style={{ textAlign: "justify" }}><span className="purple">HTML, CSS, JavaScript</span></h6>
                  <h6 style={{ textAlign: "justify" }}>Developed a static website for the annual fest of the computer science dept, to showcase various events, teams anddetails about the fest.</h6>
                  <h6 style={{ textAlign: "justify" }}>The website benefited 720 students of the department to keep them track of events and registrations</h6>
                </p>
                <Button
                  variant="primary"
                  href={Techleons}
                  target="_blank"
                  className='mt-3'
                >
                  <CgWebsite /> &nbsp;
                  View Certificate
                </Button>
              </p>
            </div>
          </Row>



        </Col>
      </Container>
    </Container>
  )
}

export default Experience
