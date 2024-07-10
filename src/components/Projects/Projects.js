import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Threat_Guard from "../../Assets/Projects/Threat_Guard.png";
import File_Integrity_Monitoring_tool from "../../Assets/Projects/File_Integrity_Monitoring_tool.png";
import Echo_Sphere from "../../Assets/Projects/Echo_Sphere.png";
import chatify from "../../Assets/Projects/chatify.png";


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
              imgPath={Threat_Guard}
              isBlog={false}
              title="Threat_Guard"
              description="Python-based Antivirus and System Monitor is a streamlined solution to keep your system safe and running smoothly. With fast file scanning, real-time monitoring, and performance-boosting capabilities, for system security and optimization."
              ghLink="https://github.com/AshrafDesai/ThreatGuard"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={File_Integrity_Monitoring_tool}
              isBlog={false}
              title="File_Integrity_Monitoring_tool"
              description="This is a simple File Integrity Monitoring (FIM) system that utilizes YARA rules to monitor file changes. It scans for modifications in files and notifies the user if any unexpected alterations are detected.."
              ghLink="https://github.com/AshrafDesai/File_Integrity_Monitoring_tool"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat-Application"
              description="This is a simple chat application built using React.js. Users can join different chat rooms, send messages, and interact with others in real-time."
              ghLink="https://github.com/AshrafDesai/Chat-Application"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Echo_Sphere}
              isBlog={false}
              title="Echo_Sphere"
              description="Echo Sphere is a reverse shell project enabling remote command execution between client and server systems, commonly used in network security testing."
              ghLink="https://github.com/AshrafDesai/Echo_Sphere"
              
            />
          </Col>
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
