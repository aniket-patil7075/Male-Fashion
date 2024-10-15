import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { NavDropdown } from "react-bootstrap";

function Header() {
  const [auth, setAuth] = useAuth();
  function handleLogout() {
    setAuth({
      ...auth,
      user: null,
      token: " ",
    });
    localStorage.removeItem("login");
  }
  return (
    <div className="">
      <div className="bg-dark text-light py-3 ">
        <Container className=" d-flex justify-content-between px-5">
        <div >
          <h6>Free shipping, 30-day return or refund guarantee.</h6>
        </div>
        <div className="d-flex">
          {!auth.user ? (
            <>
              <Nav.Link as={Link} to="/Signup" className="px-md-3 px-4" >
                Signup
              </Nav.Link>
              <Nav.Link as={Link} to="/Signin" className="px-md-3 px-4" >
                Signin
              </Nav.Link>
              <Nav.Link as={Link} to="/Faq" className="px-md-3 px-4" >
                FAQS
              </Nav.Link>
            </>
          ) : (
            <>
              <>
                <NavDropdown title={auth?.user?.name} id="basic-nav-dropdown">
                  <Link
                    to={`/Dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                    className="dropdown-item"
                  >
                    Dashboard
                  </Link>
                  <Link
                    onClick={handleLogout}
                    to="Signin"
                    className="dropdown-item"
                  >
                    Signout
                  </Link>
                </NavDropdown>
              </>{" "}
            </>
          )}
          
        </div>
        </Container>
      </div>
      <Navbar bg="light" variant="dark" expand="lg">
        <Container >
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
