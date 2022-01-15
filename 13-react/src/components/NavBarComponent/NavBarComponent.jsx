import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';


function NavBarComponent({user}) {
  return (
    <Navbar
      color="light"
      expand="md"
      fixed=""
      full
      light
    >
      <NavbarBrand href="/">
        Blog App
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink href={`\\${user.username}`}>
              {user.username}
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <Button>Logout</Button>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
