import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Navbar from "react-bootstrap/Navbar";
import { PropsWithChildren } from "react";

const NavbarEl = ({ children }: PropsWithChildren) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mt-5">
      <Container fluid>
        <Navbar.Brand href="#">Neto Social</Navbar.Brand>
        <Stack direction="horizontal" gap={3}>
          {children}
        </Stack>
      </Container>
    </Navbar>
  );
};

export default NavbarEl;
