import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/projects/ProjectCards";
import Particle from "../components/Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ zIndex: "100", position: "relative" }}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Pixsort"
              description="PixSort emerges as a transformative solution, revolutionizing photo-sharing dynamics, particularly in Tier 2 and Tier 3 Cities. Leveraging cutting-edge technologies such as React JS , ExpressJS, and SQL,AWS Rekoginition Service, the system tackles the complex challenges faced by photographers, ensuring transparency, accountability, and operational efficiency."
              ghLink="https://github.com/sanjay-kandpal/PixSort"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Finzeoy"
              description="Finzeoy is a personal finance management system. Finance, of financing, is the process of raising funds or capital for any kind of expenditure. This project uses ReactJS in the front-end which is hosted on netlify. Database is made using MySQL an hosted-on AWS. For their connection, PHP is used and hosted on 000webhost."
              ghLink="https://github.com/adhish-bahl/Finzeoy"
              demoLink="https://finzeoy.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="T-Une"
              description="Designed as a one-stop solution for all music lovers, this platform offers personalized experiences. Upon logging inand selecting their preferred genres, users receive customized news on their homepage. Used react.js to build the front-end of the project and used AWS to make and host the DataBase. The connection between the frond-end and back-end was established using NodeJS in the project."
              ghLink="https://github.com/adhish-bahl/Tune"
              demoLink="https://t-une.netlify.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Fun With Triangles"
              description="It is a fun web application where you can find many things related to Triangles. It is like heaven for triangles. It is built purely using HTML, CSS and Javascript."
              ghLink="https://github.com/adhish-bahl/Fun-With-Triangles"
              demoLink="https://fun-with-triangles.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Rock Paper Scissor"
              description="This is a classic Rock Paper Scissor game that I created using HTML CSS and JavaScript. This was built to enhance my basic concepts of JavaScript."
              ghLink="https://github.com/adhish-bahl/Rock-Paper-Scissor-using-JS"
              demoLink="https://rock-paper-scissor-adhish.netlify.app/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Blackjack"
              description="This is a classic poker game, Blackjack, that I created to understand DOM manipulation in JavaScript more deeply. Learned how to inject tags in HTML file and manipulate the attributes and classes of HTML tags."
              ghLink="https://github.com/adhish-bahl/Blackjack-using-JS"
              demoLink="https://adhish-backjack.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Minion Talking"
              description="This is a fun web application that translates English into Minion language that is the banana language. It uses an API to do this, and that is what I have learned from it."
              demoLink="https://minion-talking.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
