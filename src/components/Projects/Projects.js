import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MusicPlayer"
              description="Personalised music application were you you add your favorite songs and listen offline"
              ghLink="https://github.com/AshrafDesai/MusicPlayer"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Amazon Clone"
              description="Basic and begineer level project of Amazon clone by simply using HTML,CSS and Javascript"
              ghLink="https://github.com/AshrafDesai/Amazon.comClone"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Credit Card Validator"
              description="Simple and algorithm based credit card validator which simple checks the authenticity of the credit card built using Luhn's Algorith"
              ghLink="https://github.com/AshrafDesai/CreditCardValidator"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
