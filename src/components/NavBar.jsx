import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import logo from "../assets/img/coding.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.svg";
import twitter from "../assets/img/twitter.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.addEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Apoorv" className="logo__" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/apoorv-singh-38250721b/"
                  target="_blank"
                >
                  <img src={navIcon1} alt="" />{" "}
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100010475651946"
                  target="_blank"
                >
                  <img src={navIcon2} alt="" />{" "}
                </a>
                <a
                  href="https://www.instagram.com/apoorv__singh_/?fbclid=IwAR0PCvDpJvHvUXZWOM7kP_Sj-z5JhfrZOhaZs_LyTUNQ0h8doAA6HXMcsX8"
                  target="_blank"
                >
                  <img src={navIcon3} alt="" />{" "}
                </a>
                <a href="https://github.com/apoorvsingh2314" target="_blank">
                  <img src={github} alt="" />{" "}
                </a>
                <a href="https://twitter.com/apoorvsingh2314" target="_blank">
                  <img src={twitter} alt="" />{" "}
                </a>
              </div>
              <a href="#connect" className="nav-connect">
                <button className="vvd" onClick={() => console.log("connect")}>
                  <span> Let's Connect </span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
