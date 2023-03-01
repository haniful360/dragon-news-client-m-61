import React from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftsideNav from "../LeftsideNav/LeftsideNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.displayName);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <Navbar
        className="mb-4"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">Dragon News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {user?.uid ? (
                <>
                  <Nav.Link>{user?.displayName}</Nav.Link>
                  <Button
                    onClick={handleLogOut}
                    className="text-muted"
                    variant="light"
                  >
                    Logout
                  </Button>
                  <Image
                    className="rounded-circle mx-2 mt-2"
                    style={{ height: "40px" }}
                    src={user?.photoURL}
                  ></Image>
                </>
              ) : (
                <>
                  <Link
                    className="text-decoration-none me-2 text-dark"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="text-decoration-none me-2 text-dark"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
              <Nav.Link>
                {user?.photoURL ? (
                  <Image
                    className="rounded-circle mx-2 mt-2"
                    style={{ height: "40px" }}
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftsideNav></LeftsideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
