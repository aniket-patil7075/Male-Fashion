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
    <div className="navFix">
      <div className="divNavBlack py-2 ">
        <Container className="d-flex justify-content-between px-5">
          <div>
            <h6>Free shipping, 30-day return or refund guarantee.</h6>
          </div>
          <div className="d-flex">
            {!auth.user ? (
              <>
                <Nav.Link as={Link} to="/Signup" className="px-md-3 px-4">
                  SIGNUP
                </Nav.Link>
                <Nav.Link as={Link} to="/Signin" className="px-md-3 px-4">
                  SIGNIN
                </Nav.Link>
                <Nav.Link as={Link} to="/Faq" className="px-md-3 px-4">
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
      <Navbar expand="lg" className="py-4" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Container className="px-5">
          <Navbar.Brand as={Link} to="/" className="me-auto">
            <img src="/logo.png" alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="w-100">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/" className="nav-home px-4">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/Shop" className="nav-line px-4">
                  Shop
                </Nav.Link>
                <NavDropdown
                  title="Pages"
                  id="basic-nav-dropdown"
                  className="nav-line px-4"
                >
                  <NavDropdown.Item as={Link} to="/About">
                    About Us
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/ShopDetails">
                    Shop Details
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/ShoppingCart">
                    Shopping Cart
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/CheckOut">
                    Check Out
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/BlogDetails">
                    Blog Details
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/Blog" className="nav-line px-4">
                  Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/Contact" className="nav-line px-4">
                  Contact
                </Nav.Link>
              </Nav>


              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="px-3">
                  <img src="/search.png" alt="search" />
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="px-3">
                  <img src="/heart.png" alt="heart" />
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="px-3">
                  <img src="/cart.png" alt="cart" />
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
