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
      <div className="divNavBlack py-2 ">
        <Container className="d-flex justify-content-between px-5">
        <div >
          <h6>Free shipping, 30-day return or refund guarantee.</h6>
        </div>
        <div className="d-flex">
          {!auth.user ? (
            <>
              <Nav.Link as={Link} to="/Signup" className="px-md-3 px-4" >
                SIGNUP
              </Nav.Link>
              <Nav.Link as={Link} to="/Signin" className="px-md-3 px-4" >
                SIGNIN
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
      <Navbar expand="lg" >
        <Container className="px-5 py-3">
          <Navbar.Brand as={Link} to="/">
            <img src="/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="px-4">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Shop" className="px-4">
                Shop
              </Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown" className="px-4">
              <NavDropdown.Item  as={Link} to="/About" >About Us</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/ShopDetails" >
                Shop Details
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/ShoppingCart" >Shopping Cart</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/CheckOut" >
                Check Out
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/BlogDetails" >
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
              <Nav.Link as={Link} to="/Blog" className="px-4">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact" className="px-4">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link as={Link} to="/" className="px-4">
                Pages
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="px-4">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="px-4">
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
