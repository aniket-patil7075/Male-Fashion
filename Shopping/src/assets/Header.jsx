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
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
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
              {!auth.user ? (
                <>
                  <Nav.Link as={Link} to="/Signup">
                    Signup
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Signin">
                    Signin
                  </Nav.Link>
                </>
              ) : (
                <>
                  <>
                    <NavDropdown
                      title={auth?.user?.name}
                      id="basic-nav-dropdown"
                    >
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
