import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import anti from "../../Assets/Projects/anti.png"; // Correct import statement
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
              imgPath={anti} // Use the imported image directly
              isBlog={false}
              title="ThreatGuard"
              description = "A user-friendly antivirus and real-time file monitoring tool scan for malware,boost system performance, and stay protected with real-time monitoring."
              ghLink="https://github.com/AshrafDesai/ThreatGuard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Business-Website"
              description="This straightforward website is tailored for an industrial motors supplier, keeping things easy and user-friendly."
              ghLink="https://github.com/AshrafDesai/Motrionix_Motors"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Echo_Sphere"
              description="Develop a secure and versatile network interface enabling comprehensive command-line control over target systems, facilitating remote administration and management with enhanced security features"
              ghLink="https://github.com/AshrafDesai/Echo_Sphere"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
