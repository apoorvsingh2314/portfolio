import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText =
      isDeleting === true
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
    setText(updatedText);
    console.log(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="">
          <Col xs={12} md={10} xl={10}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1 className="switch">
              {`Hi I'm Apoorv Singh `} <span className="wrap">{text}</span>
            </h1>
            <p>
              I am excited to share my skills and experiences through my portfolio. I have been fortunate to have had the opportunity to study at a prestigious institution like IITM, where I have been able to learn from experienced educators and gain exposure to a wide range of technologies and techniques. Through my coursework and personal projects, I have developed a strong foundation in key web development(MERN) and I am eager to continue learning and growing in this field.
            </p>
            <a href="#connect" style={{textDecoration:"none"}}>
            <button onClick={() => console.log("connect")}>
              {" "}
              let's connect <ArrowRightCircle size={25} />
            </button>
            </a>
          </Col>
          {/* <Col xs={12} md={5} xl={5}>
            <img src={headerImg} alt="Headder img" />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
