"use client";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import useWindowResize from "../hook/useWindowResize";
const Career = () => {
  const { width, height } = useWindowResize();


   const careerArr = [
     {
       img: "https://s3-alpha-sig.figma.com/img/83c3/308c/30e6685be9f4a84aa66cd57dcad239f8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dyienr69DtejSbzu0UOpINnCX5LxU38xnxBY1w8OAmPVTPATM9zLfXG1ixsNOxSItQ8u3FpSuZZneF0R3eIQ3Gq8Clsxq5hGFiqS6zlp-gbINwvAySs4KzlI7nGDz4Jxszta3pGIWPItXL59SySGt-fg~npXHVjtfZ1s1VJ~Mo~V8lHOdBhqsGc8ougbzmhOjyBRkd~q8KN79hZfJu~UNrJmzSM1qZsWQb8pwjS2Ncqp~1aVab9UQgqGeOG3~422YRBzaXbw9hGtp133e68T-oGOn9vBeV2xc58PhEwMqL022rtOAiHvfV3KLWvHBGVzxP6r49nTW8XnCnrTGPPSGw__",
       title: "Unleashing Top Talent Globally",
       description:
         "We offer 5% top talents and supports companies hiring from various time zones.",
     },
     {
       img: "https://s3-alpha-sig.figma.com/img/bf2f/1213/8500dc17499853240c3949869381a773?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i5SmVPwkAaI3FKJ4s8TafdmDJu1N5o7ryaIeojeUBDj299~l6G~FFNXJZlfCmq9D1GTh7Pp0d~lYYW~MJ5p5s1fegCWDRTkVy97knVKG7RtQZg1S84CPGeAN6Kym47iGNVW73G20ojLyj0QqpwdOHaUvZ-MePXnJkt5MyGmjyriTG8vUa6254oJ-jENDx2bc-tEMQ7d-~akIGXF7HYBa8HbetiCKUHwZlMIhHng3hDVUTI3VC3TLBDtQrDaJ16znUyOrW2B90BFr-aYtvd~iwmCXzXeiX9GtCfGu~RzQ-d11KVBSwdIEnka9BEjQNpYMVVc98pG3jTbLZIxXQXEU9w__",
       title: "Securing Success",
       description:
         "The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.",
     },
     {
       img: "https://s3-alpha-sig.figma.com/img/ff77/65bd/6900f9190dab4412cfcefc1db04df239?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0sOuh8Rh0vOI4DMwfbglkUqouQcqwScybE8BNpRK1GX9N51-gu3-yMdaH1uJF7ZZ9l-dg94vvGW~UbaeAmc-MJsV8dCEOBEIBjC2llaG5aNs7QTK9teHjNVLvSYX8Kz9CTQ6BHYYln9uIINAt~~gDklzQCJiqixGmOMEM5Ee~r0HloxvPSG1cagut5hE6r562OFBC1XADXAX~osQaA7vg5q-ob8XsC77lrGSSrJlYpCmcvKwmKNb-vuoHIVJP0iQPSaNt8dgt~Ugj9iCyX5CPz-ocrb8Tb~9tlLLHn5PIOCOjlo3ar5sFJWbEPGSfvS29KdkZ-2pF1KoCMpyAa9BQ__",
       title: "Beyond Borders",
       description: "We provide both, flexible full-time and part-time jobs",
     },
     {
       img: "https://s3-alpha-sig.figma.com/img/b20d/d4f4/e04f81b7f7a5b0fb25de28f9a1209235?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mAUFKKZi0iQJn32bF9Gl1ju1MfhysFxm85lu79gFFm5T1fZ6zmvRZ7u-BSf2v4ZcNyhuuzEuqMRdu1wcScMpqYNs2jp-zDoJGAh1YE1UAEvCEEzAec8rjkG1QDFmVWTeu1AVKPBgnxxHjh5UWteB0JV0QHZXBjdxXmnJN-MbHtnNNFcckTmAYmid~ImCj95q3IzcrWp3R2DtpUkWS-osmKVr~cTK~1s17Z9Ez9Cbin3nBqOyF9ZJ1ISCHQ3Gj1kBxNVXZfkuqS9NdStfgpD9EQ9uIF5w0FTCTru~p6esNy8gX97LnOmTcNMEbO6Ue53bLTVps9ToiRRzeh-Owh5H6g__",
       title: "End-to-End Excellence",
       description:
         "In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.",
     },
     {
       img: "https://s3-alpha-sig.figma.com/img/3134/6970/5e313644ad49988ca51a40a26a0c27a6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QGQmn2EVpylDKwcNzfj3FVjG~iQHpbvUiLykjW3uTZDRDWJ8fzYDWpGR4fCgfp9p-PmjO7H3NvkDruiDf6t7bQ8bRO2EtGfYNonq7ZBiohi9uqZvKQ7Ns4nuXLiQ41cEU37LqsBTnBoWHrQP6MPLqst~MX3cALffBi0QISoOXBIS6xGVX05TXNkFqBX2IE5zXquQmnUSe2kpYgtwzBW0GuLb~zCjqN-MYbmxbGACJFGg22RJC5KMhkcyOlUqwl3-OuIQp~eFSz~15f60WDPizppwAKiECHOPofrjwOrMXQqgKDcKKTgoRF3rck6R9xIr--Mu1Dzk5m5N10Bk8jwbpA__",
       title: "Efficiency Redefined",
       description:
         "The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.",
     },
     {
       img: "https://s3-alpha-sig.figma.com/img/fefe/1db0/d52d472ad6de85e07c2a4a695838404c?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffb3Q1cPKI1vbTDmesNG72BaS47BkCtkfNxU7hjlMC7MK-WuFIUODAr9chEobGSBagB-gKHU3Xh6p0JGGw45iCgvX0gM-5LkDmCIZOA1qyoryOunvGhcH1sSjtsL-XRnkYCN29pUDCYH8EU0cTNh7MyOFsQip3Ltxc0ZCXVQrvGWkitAn3kycv7LF5Zq~e4Vjw6lKDVWKiuJleHAyu2hA~pq8qJRMTlDfUge1YEU~txQoKJyhFYdq0KEFY~J5A9k7dBCKxaXQ9j5qmrZ8buIOnhGXrrlH2n3L6bekJZLhHHFlHHM7Ttcl9jB2wpvzvNpoaNt6tfA8qO3cTWHd5BOzw__",
       title: "Simplified Contracts Satisfied Partnerships",
       description:
         "The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.",
     },
   ];
  return (
    <>
      <Container className="p-5 text-center fw-bolder fs-1">
        <div className="mb-5">
          <p style={{ color: "#E68F50" }}>
            Stackkaroo’s Talent Hiring & Job Placement Services
          </p>
          <p className="fs-6">
            We are a talent searching platform that redesigns how companies hire
            talents. It is a cost-effective solution for industries.<br/> We also
            provide global job opportunities with good salaries, support, and
            professional development.
          </p>
        </div>
        {width < 450 ? (
          <CareerSlider careerArr={careerArr} />
        ) : (
          <CareerFlexbox careerArr={careerArr} />
        )}
      </Container>
    </>
  );
};

function CareerSlider(props) {
  return (
    <Carousel>
      {props.careerArr.map((item, i) => {
        return (
          <Carousel.Item>
            <div className="career-card w-100 " key={i}>
              <div className=" p-3 ">
                <img
                  src={item.img}
                  style={{ height: "60px", width: "60px" }}
                  className="pb-1"
                />
                <h5 className="fw-bold pb-3 pt-4 text-primary">{item.title}</h5>
                <p className="fw-bold fs-5 pt-3">{item.description}</p>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

function CareerFlexbox(props) {
 

  return (
    <Container>
      <Row>
        {props.careerArr.map((item, i) => {
            return(
          <Col sm={4} className="mb-4" key={i}>
            <div className="career-card p-3 d-flex flex-column justify-content-sm-center align-items-sm-center ">
              <img
                src={item.img}
                style={{ height: "60px", width: "60px" }}
                className="pb-1"
              />
              <h5 className="fw-bold pb-3 pt-4 text-primary">
                {item.title}
              </h5>
              <p className="fw-bold fs-5 pt-3">
                {item.description}
              </p>
            </div>
          </Col>)
        })}
      </Row>
    </Container>
  );
}
export default Career;
