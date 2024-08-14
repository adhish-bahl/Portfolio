import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adhish Bahl </span>
            from <span className="purple"> Ajmer, Rajasthan. </span>
            <br />
            I am currently pursuing my Master of Computer Application from Christ (Deemed to be Univeristy).
            <br />
            I have 1 Internship and as well as 1 Freelance experinece.
            <br />
            <br />
            <br />
            I am a Tech Savvy people who is always looking for conversation about tech.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              Play Sports
            </li>
            <li className="about-activity">
              Attend Concerts
            </li>
            <li className="about-activity">
              Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
