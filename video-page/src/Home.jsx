import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import img1 from "./assets/Frame1.png";
import img2 from "./assets/Frame2.png";
import img3 from "./assets/Frame3.png";

import main2 from "./assets/main2.svg";

import img4 from "./assets/icon1.png";
import img5 from "./assets/icon2.svg";
import img6 from "./assets/icon3.png";

import arrow from "./assets/arrow-right.png";

import video from "./assets/video.png";

import video2 from "./assets/video2.png";

import Card from "react-bootstrap/Card";

import "./index.css";
import Navv from "./Navv";

function Home() {
  return (
    <>
      <Navv />
      <Container>
        <Row className="mt-5">
          <Col xs={12} md={6} className="d-flex flex-column align-self-center">
            <h1 style={{ fontWeight: "700", maxWidth: "300px" }}>
              Show Them Don't Just Tell
            </h1>{" "}
            <br />
            <p style={{ fontWeight: "20px" }}>
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>{" "}
            <br />
            <Button
              className="but"
              style={{
                background: "rgba(18,11,72,1)",
                fontWeight: "500px",
                borderColor: "rgba(18,11,72,1)",
              }}
            >
              Install HelpMeOut <Image src={arrow} />
            </Button>
          </Col>

          <Col xs={12} md={6}>
            <Row>
              <Col xs={6} className="d-flex flex-column align-items-center">
                <Col xs={12} className="mb-2">
                  <Image className="ps-5 pt-5" fluid src={img1} />{" "}
                </Col>

                <Col xs={12} className=" bb">
                  {" "}
                  <Image className="ps-5" fluid src={img2} />{" "}
                </Col>
              </Col>

              <Col xs={6} md={6} className="cc ps-0">
                <Image className="pt-5 pe-4 pb-5" fluid src={img3} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="bridge"></div>
      <Container>
        <Row className="my-3" id="features">
          <Col className="text-center">
            <h1 style={{ fontWeight: "700px", color: "rgba(20, 20, 20, 1)" }}>
              Features
            </h1>
            <p style={{ fontWeight: "400", color: "rgba(97, 97, 99, 1)" }}>
              Key Highlights of Our Extension
            </p>
          </Col>
        </Row>
        <Row className="d-flex  align-items-center ">
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column align-items-center "
          >
            <Row>
              <Col className="pe-0" xs={1}>
                {" "}
                <Image className="w-100" fluid src={img4} />
              </Col>{" "}
              <Col className="" xs={10}>
                <h3 style={{ fontWeight: "600" }}>Simple Screen Recording</h3>
                <p>
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </Col>
            </Row>

            <Row>
              <Col className="pe-0" xs={1}>
                <Image className="w-100" fluid src={img5} />
              </Col>{" "}
              <Col xs={10}>
                <h3 style={{ fontWeight: "600px" }}>Easy-to-Share URL</h3>
                <p>
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="pe-0" xs={1}>
                <Image className="w-100" fluid src={img6} />
              </Col>{" "}
              <Col xs={10}>
                <h3 style={{ fontWeight: "600px" }}>Revisit Recordings</h3>
                <p>
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Image fluid src={video} />
          </Col>
        </Row>
      </Container>
      <div className="bridge"></div>
      <Container>
        <Row id="how">
          <Col xs={12} className="text-center my-3 mt-5 pt-5">
            {" "}
            <h1>How it works</h1>{" "}
          </Col>
          <Col xs={12} md={4}>
            <Card className="border-0">
              <Card.Body className="text-center">
                <span
                  style={{
                    background: "rgba(18, 11, 72, 1)",
                    color: "white",
                    borderRadius: "100px",
                    padding: "10px 23px",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  {" "}
                  1
                </span>
                <Card.Title className="mt-3">
                  {" "}
                  <h3>Record Screen</h3>{" "}
                </Card.Title>
                <Card.Text>
                  <p>
                    Click the "Start Recording" button in our extension. choose
                    which part of your screen to capture and who you want to
                    send it to.
                  </p>
                </Card.Text>
                <Card.Img variant="bottom" src={video2} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border-0">
              <Card.Body className="text-center">
                <span
                  style={{
                    background: "rgba(18, 11, 72, 1)",
                    color: "white",
                    borderRadius: "100px",
                    padding: "10px 23px",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  2
                </span>
                <Card.Title className="mt-3">
                  {" "}
                  <h3>Share Your Recording</h3>{" "}
                </Card.Title>
                <Card.Text>
                  <p>
                    We generate a shareable link for your video. Simply send it
                    to your audience via email or copy the link to send via any
                    platform.
                  </p>
                </Card.Text>
                <Card.Img variant="bottom" src={video2} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border-0">
              <Card.Body className="text-center">
                <span
                  style={{
                    background: "rgba(18, 11, 72, 1)",
                    color: "white",
                    borderRadius: "100px",
                    padding: "10px 23px",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  3
                </span>
                <Card.Title className="mt-3">
                  {" "}
                  <h3>Learn Effortlessly</h3>{" "}
                </Card.Title>
                <Card.Text>
                  <p>
                    Recipients can access your video effortlessly through the
                    provided link, with our user-friendly interface suitable for
                    everyone.
                  </p>
                </Card.Text>
                <Card.Img variant="bottom" src={video2} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row
          className="p-5"
          style={{
            backgroundColor: "rgba(18, 11, 72, 1)",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          <Col xs={12} md={3}>
            <Row>
              <Col xs={2}>
                {" "}
                <Image className="w-100" src={main2} fluid />{" "}
              </Col>
              <Col style={{ color: "rgba(255, 255, 255, 1)" }} xs={10}>
                <h3>HelpMeOut</h3>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={3}>
            <h3>Menu</h3>
            <p>Home</p>
            <p>Converter</p>
            <p>How it Works</p>
          </Col>

          <Col xs={12} md={3}>
            <h3>About us</h3>
            <p>About</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </Col>

          <Col xs={12} md={3}>
            <h3>Screen Record</h3>
            <p>Brower Window</p>
            <p>Desktop</p>
            <p>Application</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
