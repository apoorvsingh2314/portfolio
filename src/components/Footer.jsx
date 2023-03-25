import { Container, Row, Col } from "react-bootstrap";
// import MailChimpForm from "./MailChimpForm"
// import logo from "../assets/img/logo.svg";
import github from "../assets/img/github.svg";
import twitter from "../assets/img/twitter.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

  const Twitter= 'https://twitter.com/apoorvsingh2314'
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailChimpForm/> */}
          <div className="more-info">
            <h4>Thank You for visting me.</h4>
          </div>
          <Col size={12} className="text-center my-3">
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
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
