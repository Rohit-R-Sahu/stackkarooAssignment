"use client";

import { Container, Nav, Navbar } from "react-bootstrap";
import useWindowResize from "../hook/useWindowResize";

const UserNavbar = () => {
  const { width, height } = useWindowResize();
  return (
    <>
      <Navbar expand="lg" className="p-4">
        {width < 768 ? (
          <Container>
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="nav-items" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-items" href="#link">
                  About Us
                </Nav.Link>
                <Nav.Link className="nav-items" href="#link">
                  Work
                </Nav.Link>
                <Nav.Link className="nav-items" href="#link">
                  Services
                </Nav.Link>
                <Nav.Link className="nav-items" href="#link">
                  Clients
                </Nav.Link>
                <Nav.Link className="nav-items" href="#link">
                  Team
                </Nav.Link>
                <Nav.Link className="nav-items" href="#link">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        ) : (
          <Container className="d-flex justify-content-between">
            <div>
              <Navbar.Brand href="#home">LOGO</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <div>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <div className="nav-bar-style">
                    <Nav.Link className="nav-items" href="#home">
                      <div className="nav-items-active">Home</div>
                    </Nav.Link>
                    <Nav.Link className="nav-items" href="#link">
                      About Us
                    </Nav.Link>
                    <Nav.Link className="nav-items" href="#link">
                      Work
                    </Nav.Link>
                    <Nav.Link className="nav-items" href="#link">
                      Services
                    </Nav.Link>
                    <Nav.Link className="nav-items" href="#link">
                      Clients
                    </Nav.Link>
                    <Nav.Link className="nav-items" href="#link">
                      Team
                    </Nav.Link>
                    <Nav.Link className="nav-items" href="#link">
                      Contact Us
                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        )}
        {/* <Container className="d-flex justify-content-between">
          <div>
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="nav-bar-style">
                  <Nav.Link className="nav-items" href="#home">
                    <div className="nav-items-active">Home</div>
                  </Nav.Link>
                  <Nav.Link className="nav-items" href="#link">
                    About Us
                  </Nav.Link>
                  <Nav.Link className="nav-items" href="#link">
                    Work
                  </Nav.Link>
                  <Nav.Link className="nav-items" href="#link">
                    Services
                  </Nav.Link>
                  <Nav.Link className="nav-items" href="#link">
                    Clients
                  </Nav.Link>
                  <Nav.Link className="nav-items" href="#link">
                    Team
                  </Nav.Link>
                  <Nav.Link className="nav-items" href="#link">
                    Contact Us
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container> */}
      </Navbar>
    </>
  );
};

export default UserNavbar;
