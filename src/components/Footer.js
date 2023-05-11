import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

function FooterExample() {
    return (
<div>
<Container>
      <Row>
        <Col xs lg="2">
        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                  <img className="me-3" src="https://res.cloudinary.com/ddahjf0hr/image/upload/v1683682648/icon2_c8j62w.png" alt="" width="60" height="60"></img></a>
        </Col>
        <Col md="auto"></Col>
        <Col xs lg="2">
        <ul className="nav  justify-content-end">
                  <li className="ms-3"><a className="text-muted" href="/home"><img src="https://res.cloudinary.com/ddahjf0hr/image/upload/v1683820134/facebook_b63jfp.png" width= "30" alt="" /></a></li>
                  <li className="ms-3"><a className="text-muted" href="/home">  <img src="https://res.cloudinary.com/ddahjf0hr/image/upload/v1683820204/instagram_in13o2.png" width= "30" alt="" /></a></li>
                  <li className="ms-3"><a className="text-muted" href="/home"> <img src="https://res.cloudinary.com/ddahjf0hr/image/upload/v1683820186/whatsapp_cv8lbs.png" width= "30" alt="" /></a></li>
                  </ul>
        </Col>
      </Row>
      </Container>
<div className="container">

   

<dir className="py-3 my-4">

      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Cuota CGPA</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Comisiones</Nav.Link>
        </Nav.Item>
      
      </Nav>
      <hr class="featurette-divider" />
      
<p class="text-center text-muted">© 2023 CGPA CCLA</p>
</dir>
</div>


</div>



    );
  }
  
  export default FooterExample;