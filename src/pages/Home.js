import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Assets/pfp.png";
import Tilt from "react-parallax-tilt";
import Particle from "../components/Particle";
import Home2 from "../components/home/Home2";
import Type from "../components/home/Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There!{" "} 👨🏽‍💻
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Adhish Bahl</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="myAvtar justify-content-center d-flex">
              <div style={{width:"fit-content"}}>
                <Tilt>
                  <img src={myImg} className="img-fluid mb-5" width={250} alt="avatar" />
                </Tilt>
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section >
  );
}

export default Home;
