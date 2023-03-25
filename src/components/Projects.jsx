import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export default function Projects() {
  const projects = [
    {
      title: "ChatG",
      description:
        "NodeJs Web Application in which two or more can talk to each other just by joining the same server.",
      imgUrl: projImg1,
      link: "https://github.com",
    },
    {
      title: "PlayWithText",
      description:
        "Text based Utility in which one can modify text according to his/her need.",
      imgUrl: projImg2,
      link: "https://apoorvsingh2314.github.io/PlayWithText/",
    },
    {
      title: "GuideMe",
      description: "This can help you to find perfect place around you.",
      imgUrl: projImg3,
      link: "https://guidemee.netlify.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://google.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://github.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://github.com",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              I have worked on a variety of projects that showcase my skills and
              interests. Some of my notable projects include PlayWithText, where
              Anyone can go and change the state of any text for example Lower case or upper case and many more; GuideMe , in which I with the help of Google Map Services and Rapid API I managed to fetch the places around us just by scrolling or changing location in google maps on google map with a beautiful card. These projects demonstrate my ability to Design and Develop Responsive Websites. I am always looking for new challenges
              and opportunities to learn and grow, and I am excited to continue
              building my portfolio with meaningful and impactful projects.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab-"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Second</Tab.Pane>
                <Tab.Pane eventKey="third">Third</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
}
