import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container >
        <Navbar.Brand href="#home">
        <div class="d-flex align-items-center p-2 m-3 text-black rounded shadow">
        <img class="me-3" src="https://res.cloudinary.com/ddahjf0hr/image/upload/v1683682648/icon2_c8j62w.png" alt="" width="60" height="60"></img>
        <div >
        <h5>Centro General de Padres y Apoderados</h5>
        <h6>Colegio Concepción Los Angeles</h6>
        </div>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link  href="#features"><b>Cuota CGPA</b></Nav.Link>
          
          </Nav>
          <Nav>
          <NavDropdown title="Quienes Somos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Directorio CGPA 2022-2025</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Estatutos</NavDropdown.Item>
        </NavDropdown>

            <NavDropdown title="Comunidad Escolar" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Directiva de cursos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Comisiones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Asambles</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Contacto" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Link</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;