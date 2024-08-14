import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../components/Particle";
// import ProjectCard from "../components/projects/ProjectCards";
// import SamImg from "../Assets/home-bg.jpg"

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few blogs that I have written.
        </p>
        <Col style={{ justifyContent: "center", paddingBottom: "10px", color: "white", marginTop: "5rem", minHeight: "47vh" }}>

          Blogs are ready, but the page is not, thank you for coorporation!
          <br />
          Come back soon!
          {/* <Row md={4} className="project-card">
            <ProjectCard
              imgPath={SamImg}
              isBlog={false}
              title="Pixsort"
              description="PixSort emerges as a transformative solution, revolutionizing photo-sharing dynamics, particularly in Tier 2 and Tier 3 Cities. Leveraging cutting-edge technologies such as React JS , ExpressJS, and SQL,AWS Rekoginition Service, the system tackles the complex challenges faced by photographers, ensuring transparency, accountability, and operational efficiency."
              ghLink="https://github.com/sanjay-kandpal/PixSort"
            // demoLink=""
            />
          </Row>

          <Row md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Finzeoy"
              description="Finzeoy is a personal finance management system. Finance, of financing, is the process of raising funds or capital for any kind of expenditure. This project uses ReactJS in the front-end which is hosted on netlify. Database is made using MySQL an hosted-on AWS. For their connection, PHP is used and hosted on 000webhost."
              ghLink="https://github.com/adhish-bahl/Finzeoy"
              demoLink="https://finzeoy.netlify.app/"
            />
          </Row>

          <Row md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="T-Une"
              description="Designed as a one-stop solution for all music lovers, this platform offers personalized experiences. Upon logging inand selecting their preferred genres, users receive customized news on their homepage. Used react.js to build the front-end of the project and used AWS to make and host the DataBase. The connection between the frond-end and back-end was established using NodeJS in the project."
              ghLink="https://github.com/adhish-bahl/Tune"
              demoLink="https://t-une.netlify.app/login"
            />
          </Row> */}

        </Col>
      </Container>
    </Container>
  )
}

export default Blogs
