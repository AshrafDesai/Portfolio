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
              title="Chat-Appications"
              description="This is a simple chat application built using React.js. Users can join different chat rooms, send messages, and interact with others in real-time."
              ghLink="https://github.com/AshrafDesai/Chat-Application.git "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Business-Website"
              description="This website is designed to showcase the products and services offered by a local grocery shop. It provides a user-friendly interface for customers to explore, choose products, and place orders."
              ghLink="https://github.com/AshrafDesai/Enterprises.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="OtpVerificationSystem"
              description="This is a simple Flask web application that demonstrates OTP (One-Time Password) verification using Twilio."
              ghLink="https://github.com/AshrafDesai/OtpSystem.git"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
