import { Col, Row, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';


function NavScrollExample() {
  function logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Sesion cerrada")
  }

  return (
    <>
      <header>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Link to="/example-app/public/">
              <img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/logo_Web_copy_5296e797-bef9-46ff-b9d4-6fce0c573bc6_550x.png?v=1630618828"
                style={{ maxHeight: '45px' }} />
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link as={Link} to='/example-app/public/productos'>Productos</Nav.Link>
                <Nav.Link as={Link} to='/example-app/public/metodo'>Metodos de pago</Nav.Link>
                <Nav.Link as={Link} to='/example-app/public/centro'>¿Necesitas ayuda?</Nav.Link>
              </Nav>               

              <NavDropdown id="dropright" align="end" title={<img src="https://i.postimg.cc/rmY3H9RD/log.png"
                                alt='login' style={{ maxHeight: '40px' }} />}>
                                <NavDropdown.Item as={Link} to="/example-app/public/login">Login</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/example-app/public/carro">Carrito</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/example-app/public/login" onClick={()=>logout()}>Cerrar sesion</NavDropdown.Item>
              </NavDropdown>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <div>
        <section>
          <Outlet></Outlet>
        </section>
      </div>

      <footer style={{ backgroundColor: '#fff773' }}>
        <br />
        <div>
          <Container>
            <Row>
              <Col>
                <h3>BUSQUEDA</h3>

                <p><a href="">Busqueda</a></p>
                <p><a href="">Términos del servicio</a></p>
              </Col>

              <Col>
                <h3>CONTÁCTANOS</h3>

                <p><a href="">servicioalcliente@clevercel.mx</a></p>
                <p>Encuentra nuestros productos en cualquiera de los siguientes <a href="">MARKETPLACES</a>:</p>
                <ul>
                  <li>
                    Claro Shop / Liverpool
                  </li>
                  <li>
                    Coppel / Amazon
                  </li>
                  <li>
                    Mercado Libre
                  </li>
                </ul>
              </Col>

              <Col>
                <h3>NOSOTROS</h3>

                <p><a href="">¿QUIÉNES SOMOS?</a></p>
                <p><a href="">MEDIO AMBIENTE</a></p>
                <p><a href="">SEGURIDAD</a></p>
                <p><a href="">CALIDAD</a></p>
              </Col>

              <Col>
                <h3>POLÍTICAS DEL SITIO</h3>

                <p><a href="">Tratamiento de Datos</a></p>
                <p><a href="">Términos y condiciones</a></p>
                <p><a href="">Política de Cookies</a></p>
                <p><a href="">Políticas de Envío</a></p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default NavScrollExample;