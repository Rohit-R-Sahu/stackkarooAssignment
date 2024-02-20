"use client"
import { Col, Container, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserGroup,
  faUserPen,
  faFolderOpen,
  faBoxArchive,
} from "@fortawesome/free-solid-svg-icons";
import useWindowResize from "../hook/useWindowResize";

const ChooseSec = () => {
  const {width, height} = useWindowResize();
  const arrChoose = [
    {
      icon: faUser ,
      data: "User-Centric Approach",
    },
    {
      icon:  faUserGroup ,
      data: "Customer Satisfaction",
    },
    {
      icon:  faUserPen ,
      data: "Integrating Feedback",
    },
    {
      icon:  faFolderOpen ,
      data: "High Quality Products",
    },
    {
      icon:  faBoxArchive ,
      data: "On-Time Product Delivery",
    },
  ];
  return (
    <Container className="p-5 text-center fw-bolder fs-1">
      <div>
        <p style={{ color: "#E68F50" }}>Why Choose Us?</p>
        <p className="fs-6">
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
          <br /> Our dedicated team ensures that the solutions provided are
          dependable and long-term
        </p>
      </div>
      <div className="card-contain">
        {
            arrChoose.map((item, i)=>{
                return (
                  <div
                    className={
                      width < 450 ? "p-2 sol-card-res" : "p-3 sol-card"
                    }
                    key={i}
                  >
                    <div
                      className={
                        width < 450 ? "cardLogo-res mx-1" : "cardLogo mx-1"
                      }
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        style={
                          width > 450
                            ? { height: "22px", width: "20px" }
                            : { height: "12px", width: "12px" }
                        }
                      />
                    </div>
                    <div className="mx-1 text-primary">
                      <h5 className={width > 450 ? "fw-bold" : "fs-6"}>
                        {item.data}
                      </h5>
                    </div>
                  </div>
                );
            })
        }
        
      </div>
    </Container>
  );
};

export default ChooseSec;
