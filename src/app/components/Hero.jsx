"use client"
import { Col, Container, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import useWindowResize from "../hook/useWindowResize";

const Hero = () => {
  const {width, hight} = useWindowResize();
  return (
    <Container className="rounded-5 hero-bg">
      <Row className={width <450 ? "flex-column-reverse" : null}>
        <Col md={6}>
          <div className="p-5">
            <h1 className="text-primary fw-bolder">
              Diversifying the Designs of Digital World
            </h1>
            <br />
            <p className="lh-base fs-6 fw-bold">
              Explorogent International Services Private Limited (EISPL) is one
              of the most famous companies in the sector of Web and Mobile
              Development. In the market, EISPL has a strong presence in
              providing quality services to its clients.
            </p>
            <br />
            <p className="lh-base fs-6 fw-bold">
              EISPL is convinced that one should diversify the offering, given
              the changing needs of the clients. That is why we engage in
              multiple projects and activities. We also possess knowledge in web
              development, app development, UI/UX design, as well as digital
              marketing.
            </p>
            <br />
            <div
              className="badge text-wrap rounded-pill fs-5 p-3"
              style={{ backgroundColor: "#E68F50" }}
            >
              <FontAwesomeIcon
                icon={faPhone}
                style={{ height: "22px", width: "20px" }}
              />
              &nbsp; Book a Call
            </div>
          </div>
        </Col>
        <Col md={6}>
          <img
            src="https://d1xzdqg8s8ggsr.cloudfront.net/65ce04affe2f54ee2e8a3248/5ca597e6-1aa5-479e-a2e5-35102fd8772c_1708000761704751622?Expires=-62135596800&Signature=sRNz3I12tdSPxN~x1ToCYcf~DFP47i0H9XGIxS2NIzBBb29sgM43qoAwkAPBRWMp~qbvt9jhw8zXgG-qrXMSrnXLaGFiaeQCu0kp8xhOXQ8Uz8E89MQk~r7CVEqYvUru5hhaOQL7iz8Yg~tNfBlYoU2aaH~OEdOxpsaiDVRdDq0oo~8hC8DJsM~vZA8farvdA21DKcqUkMvok2EpIwaN2gIYqQt~C8tqwYaseplT1D5ufC9gIg1iM-If~djTqxyqp05kC4R2SuBB6iqpXi0N8fi~d1NjMkPr4g6QwzTte3FcurXlTtvLCjgtWAEMu-4JulOuK8C7zh54bYSsU9G7Og__&Key-Pair-Id=K1P54FZWCHCL6J"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
