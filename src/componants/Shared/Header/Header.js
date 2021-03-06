import React from "react";
// import logo from "../../../images/banner/logo.jpg";
import laptop from "../../../images/banner/laptop.png";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../Header/Header.css";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div>
      <Navbar
        className="header"
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container fluid className="headerbackg">
          <Navbar.Brand as={Link} to="/">
            <img
              height={40}
              width={40}
              src={laptop}
              alt=""
              className="d-inline-block align-top"
            />{" "}
            TecMania
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* navbar menu start first section */}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/blog"
              >
                Blogs
              </NavLink>
            </Nav>

            <Nav>
              {user ? (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                    to="/manageinventory"
                  >
                    ManageInventory
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                    to="/addinventoryitem"
                  >
                    Add Inventory
                  </NavLink>
                  <NavDropdown title="User Menu" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/manageitem">
                      Manage Items
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/additem">
                      Add Item
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/myitem">
                      My Items
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>

                  <button
                    className="btn btn-warning"
                    onClick={() => signOut(auth)}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                    to="/signin"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                    to="/signup"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
