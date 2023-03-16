import { Col, Row, Button, Tab, Tabs, Carousel, Stack, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Main() {
  const getAllProducto = async (id = 1) => {
    const response = await axios.get(`http://localhost/example-app/public/api/product_show/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    setProducto(response.data)
  }
  const [Producto, setProducto] = useState([])
  useEffect(() => {
    getAllProducto()
  }, [])

  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item interval={1500}>
            <Link to='/example-app/public/iphone13'>
              <img
                className="d-block w-100"
                src="https://i.postimg.cc/rmgjBjxr/Banner-Sitio-MX-i-Phone-Xr-Horizontal.webp"
                alt="First slide"
                style={{ maxWidth: 'auto' }}
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <Link to='/example-app/public/metodo'><img
              className="d-block w-100"
              src="https://i.postimg.cc/WpH60hnT/Banner-Horizontal-Mercado-Pago.webp"
              alt="First slide"
              style={{ maxWidth: 'auto' }}
            /></Link>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <Link to='/example-app/public/metodo'><img
              className="d-block w-100"
              src="https://i.postimg.cc/6pdrszNp/Banner-Sitio-MX-Zip1-Horizontal.webp"
              alt="Second slide"
              style={{ maxWidth: 'auto' }}
            /></Link>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <Link to='/example-app/public/metodo'><img
              className="d-block w-100"
              src="https://i.postimg.cc/8C4Lc5c8/Banner-Sitio-MX-Kueski1-Horizontal.webp"
              alt="Third slide"
              style={{ maxWidth: 'auto' }}
            /></Link>
          </Carousel.Item>
        </Carousel>
      </div>

      <div align="center">
        <header>
          <br />
          <h1>Productos</h1>
          <div align="center" style={{ maxWidth: '90%' }}>
            <Tabs defaultActiveKey="1" id="fill-tab-example" className="mb-3" fill onSelect={(selectedKey) => getAllProducto(selectedKey)}>
              <Tab eventKey="1" title="iPhones">
                <Stack direction="horizontal" style={{display:'flex',flexWrap:'wrap'}} gap={3} id="iphone13">
                  {Producto.map((productos, i) => (
                    <div key={i}>
                      <Card style={{ width: 'auto', marginLeft: "2%", marginBottom: "2%" }}>
                        <Card.Body>
                          <Link to={`/example-app/public/iphone/${productos.id}`}>
                            <img src={productos.imagen} style={{ maxHeight: '400px' }} />
                            <Card.Title>{productos.producto}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde ${productos.precio}</Card.Subtitle>
                            <Card.Text>En stock: {productos.stock}</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </Stack>
              </Tab>
              <Tab eventKey="2" title="iPads">
                <Stack direction="horizontal" style={{display:'flex',flexWrap:'wrap'}} gap={3} id="iphone13">
                  {Producto.map((productos, i) => (
                    <div key={i}>
                      <Card style={{ width: 'auto', marginLeft: "2%", marginBottom: "2%" }}>
                        <Card.Body>
                          <Link to={`/example-app/public/iphone/${productos.id}`}>
                            <img src={productos.imagen} style={{ maxHeight: '450px' }} />
                            <Card.Title>{productos.producto}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde ${productos.precio}</Card.Subtitle>
                            <Card.Text>En stock: {productos.stock}</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </Stack>
              </Tab>
              <Tab eventKey="3" title="Airpods">
                <Stack direction="horizontal" style={{display:'flex',flexWrap:'wrap'}} gap={3} id="iphone13">
                  {Producto.map((productos, i) => (
                    <div key={i}>
                      <Card style={{ width: 'auto', marginLeft: "2%", marginBottom: "2%" }}>
                        <Card.Body>
                          <Link to={`/example-app/public/iphone/${productos.id}`}>
                            <img src={productos.imagen} style={{ maxHeight: '450px' }} />
                            <Card.Title>{productos.producto}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde ${productos.precio}</Card.Subtitle>
                            <Card.Text>En stock: {productos.stock}</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </Stack>
              </Tab>
              <Tab eventKey="4" title="Apple Watch">
                <Stack direction="horizontal" style={{display:'flex',flexWrap:'wrap'}} gap={3} id="iphone13">
                  {Producto.map((productos, i) => (
                    <div key={i}>
                      <Card style={{ width: 'auto', marginLeft: "2%", marginBottom: "2%" }}>
                        <Card.Body>
                          <Link to={`/example-app/public/iphone/${productos.id}`}>
                            <img src={productos.imagen} style={{ mmaxHeight: '450px' }} />
                            <Card.Title>{productos.producto}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Desde ${productos.precio}</Card.Subtitle>
                            <Card.Text>En stock: {productos.stock}</Card.Text>
                            <Card.Link href="#">Ver más</Card.Link></Link>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </Stack>
              </Tab>
            </Tabs>
          </div>
        </header>
        <br />

        <div align="center" className='productos'>
          <br />
          <Button variant="outline-primary" size="lg" as={Link} to='/example-app/public/productos'>
            Ver todos
          </Button>
        </div>

        <br />

        <div style={{ maxWidth: '90%' }}>
          <header>
            <h3>Compra 100% seguro con nuestros</h3>
            <h1>MÉTODOS DE PAGO</h1>
          </header>
          <div>
            <Row xs={1} md={2} className="g-4" >
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.40.39_p.m._1600x.png?v=1662576051" />
                  <Card.Body>
                    <Card.Title>KUESKI PAY</Card.Title>
                    <Card.Text>
                      Kueski Pay es un método de pago digital que te permite hacer compras en línea
                      con comercios afiliados sin la necesidad de tener una tarjeta de crédito.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.42.24_p.m._1378x.png?v=1662576160" />
                  <Card.Body>
                    <Card.Title>MERCADO PAGO</Card.Title>
                    <Card.Text>
                      Mercado Pago es la mayor plataforma de cobros online de la México.
                      La herramienta te permite cobrar por diferentes canales: Link de Pago
                      (Redes Sociales y WhatsApp), QR y Point (de manera presencial) y
                      Checkout de Mercado Pago en tu tienda online.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row xs={1} md={2} className="g-4">
              <Col>
                <Card>
                  <Card.Img variant="top" src="//cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.34.57_p.m._1600x.png?v=1662575759" />
                  <Card.Body>
                    <Card.Title>PAYPAL</Card.Title>
                    <Card.Text>
                      El sistema de pagos más seguro de internet se llama PayPal y es
                      utilizado por millones de personas que hacen sus compras online.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src="//cdn.shopify.com/s/files/1/0325/8708/8005/files/PAGO_EN_EFECTIVO_1600x.png?v=1658873081" />
                  <Card.Body>
                    <Card.Title>PAGO EN EFECTIVO Y TRANSFERENCIAS</Card.Title>
                    <Card.Text>
                      La transferencia bancaria es un método de transferencia electrónica
                      de fondos de una persona o entidad a otra.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <br />

        <div style={{ maxWidth: '90%' }}>
          <Carousel variant="dark">
            <Carousel.Item>
              <Link to=""><img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/iconos-28_170x.png?v=1658869951"
                alt="Envíos NACIONALES"
                style={{ maxWidth: '100px' }}
              />
                <h5>ENVIOS NACIONALES</h5>
                <p>Conoce la mejor forma de recibir tu próximo Clevercel..</p></Link>
              <br />
            </Carousel.Item>
            <Carousel.Item>
              <Link to=""><img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/iconos-29_4e306b6c-e841-4f5b-9200-55604d0f75e5_180x.png?v=1658870053"
                alt="Second slide"
                style={{ maxWidth: '100px' }}
              />
                <h5>GARANTIA</h5>
                <p>No te preocupes por el funcionamiento de tu Clevercel.</p></Link>
              <br />
            </Carousel.Item>
            <Carousel.Item>
              <Link to=""><img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/iconos-30_230x.png?v=1658870224"
                alt="Third slide"
                style={{ maxWidth: '100px' }}
              />
                <h5>SERVICIO AL CLIENTE</h5>
                <p>Resuelve tus dudas.</p></Link>
              <br />
            </Carousel.Item>
            <Carousel.Item>
              <Link to=""><img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/iconos-31_220x.png?v=1658870290"
                alt="Third slide"
                style={{ maxWidth: '100px' }}
              />
                <h5>FORMAS DE PAGO</h5>
                <p>Conoce nuestros métodos de pago.</p></Link>
              <br />
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.52.56_p.m._2212x.png?v=1662576794"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.56.21_p.m._1600x.png?v=1662577000"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="//cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.55.36_p.m._1600x.png?v=1662577149"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-09-07_a_la_s_1.55.58_p.m._1600x.png?v=1662577062"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Main;