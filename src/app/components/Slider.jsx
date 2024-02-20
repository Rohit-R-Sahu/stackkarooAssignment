"use client";
import { Col, Container, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faCircleArrowRight,
  faFileCode,
  faCloudArrowDown,
  faDesktop,
  faLaptopFile,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import useWindowResize from "../hook/useWindowResize";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const sliderArr = [
    {
      icon: faLaptopCode,
      title: "Website Development",
      description:
        "We specialize in responsive website development, ensuring optimal performance across various devices.",
    },
    {
      icon: faFileCode,
      title: "App Development",
      description:
        "We ensure optimal website traffic by addressing factors such as user experience, accessibility and monitoring target audience.",
    },
    {
      icon: faCloudArrowDown,
      title: "Software Development",
      description:
        " We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.",
    },
    {
      icon: faDesktop,
      title: "UI/UX Design",
      description:
        "We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.",
    },
    {
      icon: faLaptopFile,
      title: "Digital Marketing",
      description:
        "We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.",
    },
    {
      icon: faChartLine,
      title: "SEO Optimization",
      description:
        "We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.",
    },
  ];
  const { width, height } = useWindowResize();
  return (
    <>
      {width < 450 ? (
        <DigiSlider sliderArr={sliderArr} />
      ) : (
        <Digiflex sliderArr={sliderArr} />
      )}
      {/* <Carousel
        showThumbs={false}
        centerMode={true}
        axis="horizontal"
        showArrows={true}
        emulateTouch={true}
        width={"100%"}
        // centerSlidePercentage={35}
      >
        {sliderArr.map((item, i) => {
          return (
            <div className="digi-card" key={i}>
              <Row className="p-4 text-center fw-bolder">
                <Col sm={4}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ height: "60px", width: "60px" }}
                  />
                </Col>
                <Col sm={8}>
                  <h5 className=" fs-4 fw-bold text-primary">{item.title}</h5>
                </Col>
                <Col sm={12} className="pt-5">
                  {item.description}
                </Col>
                <Col sm={12} className="d-flex align-item-end text-bottom p-5">
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    style={{
                      height: "40px",
                      width: "40px",
                      color: "#E68F50",
                      margin: "auto",
                    }}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
      </Carousel> */}
    </>
  );
};

function Digiflex(props) {
  return (
    <Container className="card-contain">
      {props.sliderArr.map((item, i) => {
        return (
          <div className="digi-card m-4" key={i}>
            <Row className="p-4 text-center fw-bolder">
              <Col sm={4}>
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ height: "60px", width: "60px" }}
                />
              </Col>
              <Col sm={8}>
                <h5 className=" fs-4 fw-bold text-primary">{item.title}</h5>
              </Col>
              <Col sm={12} className="pt-5">
                {item.description}
              </Col>
              <Col sm={12} className="d-flex align-item-end text-bottom p-5">
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  style={{
                    height: "40px",
                    width: "40px",
                    color: "#E68F50",
                    margin: "auto",
                  }}
                />
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
}

function DigiSlider(props) {
  return (
    <>
      <Carousel >
        {props.sliderArr.map((item, i) => {
          return (
            <Carousel.Item className="digi-card" key={i}>
              <Row className="p-4 text-center fw-bolder">
                <Col sm={4}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ height: "60px", width: "60px" }}
                  />
                </Col>
                <Col sm={8}>
                  <h5 className=" fs-4 fw-bold text-primary">{item.title}</h5>
                </Col>
                <Col sm={12} className="pt-5">
                  {item.description}
                </Col>
                <Col sm={12} className="d-flex align-item-end text-bottom p-5">
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    style={{
                      height: "40px",
                      width: "40px",
                      color: "#E68F50",
                      margin: "auto",
                    }}
                  />
                </Col>
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Slider;
