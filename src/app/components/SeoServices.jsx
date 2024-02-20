import { Col, Container, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const SeoServices = () => {
  const seoArr = [
    {
      name: "Customized SEO Services",
      details:
        "We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business.",
    },
    {
      name: "Mobile SEO Services",
      details:
        "We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices.",
    },
    {
      name: "On-Page SEO Services",
      details:
        "We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.",
    },
    {
      name: "Free Website Audit and Strategies",
      details:
        "We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services.",
    },
    {
      name: "Off-Page SEO Service",
      details:
        "We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel.",
    },
  ];

  return (
    <Container className="rounded-5 hero-bg p-5">
      <h1 className="fw-bolder text-center" style={{ color: "#E68F50" }}>
        SEO Services
      </h1>
      <Row className="p-4">
        {seoArr.map((item, i) => {
          return (
            <Col sm={6} className="d-flex" key={i}>
              <div className="p-3">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ height: "24px", width: "24px" }}
                />
              </div>
              <div className="p-3 fw-bold">
                <h4 className="text-primary fw-bold pb-3">{item.name}</h4>
                <p>{item.details}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SeoServices;
