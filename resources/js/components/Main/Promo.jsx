import { Card, Col, Row, Accordion, Form} from 'react-bootstrap';

function Promo() {
    return (
        <>
            <div class="position-relative">
                <Card className="text-gray">
                    <Card.Img
                        src="http://cdn.shopify.com/s/files/1/0325/8708/8005/collections/imagen-coleccion-promo_2600x.jpg?v=1665009515"
                        alt="Card image"
                    />
                    <Card.ImgOverlay>
                        <Card.Title
                            style={{ position: 'absolute', top: '50%', left: '50%', fontWeight: 'bold', fontSize: '66px' }}>
                            Promos del Mes
                        </Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div align='center'>
                <h4 style={{ fontFamily: 'sans-serif' }}>Los mejores seminuevos están en Clevercel</h4>
                <p>Encuentra el celu ideal, llévalo al mejor precio, legal y con garantía</p>
            </div>

            <div style={{ maxWidth: '95%', display: "grid", content: "center", marginLeft: "3%" }}>
                <Row>
                    <Col style={{ maxWidth: '20%' }}>
                        <h2>Filtros</h2>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Disponibilidad</Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="En existencia"
                                        />
                                        <Form.Check
                                            type="switch"
                                            id="disabled-custom-switch"
                                            label="Agotado"
                                        />
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Precio</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Range />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Categoria</Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`Outlet`}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    label={`Semi nuevo`}
                                                    id={`disabled-default-${type}`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Capacidad</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Range />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Color</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Range />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>

                    <Col style={{ marginLeft: "10px", }} align="center">
                        <Card style={{ width: 'auto' }}>
                            <Card.Body>
                                <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                    <Card.Title>iPhone 13 Pro Max</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                    <Card.Text>En stock.</Card.Text>
                                    <Card.Link href="#">Ver más</Card.Link></a>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card style={{ width: 'auto' }}>
                            <Card.Body>
                                <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                    <Card.Title>iPhone 13 Pro Max</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                    <Card.Text>En stock.</Card.Text>
                                    <Card.Link href="#">Ver más</Card.Link></a>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col align="center">
                        <Card style={{ width: 'auto' }}>
                            <Card.Body>
                                <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                    <Card.Title>iPhone 13 Pro Max</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                    <Card.Text>En stock.</Card.Text>
                                    <Card.Link href="#">Ver más</Card.Link></a>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card style={{ width: 'auto' }}>
                            <Card.Body>
                                <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                    <Card.Title>iPhone 13 Pro Max</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                    <Card.Text>En stock.</Card.Text>
                                    <Card.Link href="#">Ver más</Card.Link></a>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>

                    <Col align="center">
                        <Card style={{ width: 'auto' }}>
                            <Card.Body>
                                <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                    <Card.Title>iPhone 13 Pro Max</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                    <Card.Text>En stock.</Card.Text>
                                    <Card.Link href="#">Ver más</Card.Link></a>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card style={{ width: 'auto' }}>
                            <Card.Body>
                                <a href=""><img src="https://cdn.shopify.com/s/files/1/0325/8708/8005/products/apple-iphone-13-pro-max-01_478x.jpg?v=1665803700" style={{ maxHeight: '350px' }} />
                                    <Card.Title>iPhone 13 Pro Max</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Desde $23,990</Card.Subtitle>
                                    <Card.Text>En stock.</Card.Text>
                                    <Card.Link href="#">Ver más</Card.Link></a>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                </Row>
            </div>
        </>
    );
}
export default Promo;