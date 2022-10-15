import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";

function NavbarMenu() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products/show">
              <Nav.Link>products</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Options" id="basic-nav-dropdown">
              <LinkContainer to="/login">
                <NavDropdown.Item>Login</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Register">
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
