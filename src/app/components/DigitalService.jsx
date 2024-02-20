import { Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider";

const DigitalService = () => {
  return (
    <Container className="p-5" >
      <div className="text-center fw-bolder fs-1 pb-5">
        <p style={{ color: "#E68F50" }}>Stackkaroo's Digital Services</p>
        <p className="fs-6">
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
          <br /> Our dedicated team ensures that the solutions provided are
          dependable and long-term
        </p>
      </div>
      <Slider />
    </Container>
  );
};

export default DigitalService;
