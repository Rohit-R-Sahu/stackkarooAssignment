"use client"
import { Col, Container, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import useWindowResize from "../hook/useWindowResize";

const Services = () => {
  const arrService = [
    "Website Development",
    "App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
  ];
  const {width, height} = useWindowResize();
  return (
    <>
      <Container className="p-5 text-center fw-bolder">
        <p className="fs-6">
          In the realm of digital solutions, we offer expertise in
        </p>
        <Row>
          {arrService.map((item, i) => {
            return (
              <Col sm className="p-2" key={i}>
                <div className="bg-white service-card">
                  <h5 className="m-1">{item}</h5>
                </div>
              </Col>
            );
          })}
        </Row>
        <p className="fs-6 mt-2">
          showcasing our proficiency across various facets of the digital
          platform
        </p>
      </Container>
      <Container className="p-5 text-center fw-bolder fs-1">
        <p style={{ color: "#E68F50" }}>
          Stay Ahead! <br />
          Launch Your Next Project with Stackkaroo
        </p>
      </Container>
      <Container className="rounded-5 hero-bg ">
        <Row>
          <Col md={6}>
            <div className="p-5">
              <h1 className="text-primary fw-bolder">Our Story</h1>
              <br />
              <p className="lh-base fs-6 fw-bolder">
                Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan
                Mishra bring their extensive experience to the forefront as
                industry veterans. Our team is fueled by innovation, continually
                striving to exceed customer expectations.
              </p>
              <br />
              <p className="lh-base fs-6 fw-bolder">
                Operating from our registered office in Agartala Sadar, Tripura
                (W), our company is officially registered with the Corporate
                Identification Number (CIN). Our active status and an authorized
                share capital of Rs 10.00 lac are a source of pride.
              </p>
              <br />
              <div
                className="badge text-wrap rounded-pill fs-3 p-3"
                style={{ backgroundColor: "#E68F50", overflow: "hidden" }}
              >
                <FontAwesomeIcon
                  icon={faIndianRupeeSign}
                  style={{ height: "22px", width: "20px" }}
                />
                &nbsp; Get Estimated Project Cost
              </div>
            </div>
          </Col>
          <Col md={6}>
            <img
              src="https://s3-alpha-sig.figma.com/img/f362/98b2/a3f702915452c4fb960614f774a6b16f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UNoiGBUVjCF0Da5-zPeJJzMV5KDZ-dhdaUirgMLS~oCO429OLb1-3EWkriJE4Euu7R8i82yLuLpR5DKPZeNtu8KcbNhPRF-8cW24X~Beu7pxf0BLSjzXBTWkekNs6QXTNrsC-Huw3MGE0QI6abMI5iK~0jdxGxTRmjC3Vp1os8JwX1u1myqqooeeJVWGJDccRgJoRl88kujSAGGs5r3rk~f~mg237mlpClYCzYIo~4BTCzMVfcD00vOfVQQrRI6UR5XepqrEjNS0qOuYLLAjw5pWGkg7AvRppWCH0jrt77M-TLJ4ko~AU8avWZOG6G-dFcU0ykBiY8UsRTBiKJhu2A__"
              className="img-fluid w-100"
              style={width < 450 ? {height: "40vh"} : {height:" 80vh"} }
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
