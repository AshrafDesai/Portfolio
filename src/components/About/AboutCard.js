import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashrafraza Desai </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            Currently I am intern at ZeroThreat Security Solutions Privated limited as Security Analyst.
            <br />
            I have completed my B.Tech in Computer Science & Engineering from
            D.Y.Patil College Of Engineering & Technology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Do research on recent cyberattacks
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ashraf Desai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
