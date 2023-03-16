import {Card, Button, Form, Col, Row} from 'react-bootstrap';
function Ayuda() {
    return (
        <>
            <div class="position-relative text">
                    <Card className="text-red">
                        <Card.Img
                            src="https://ayuda.clevercel.co/hubfs/banner-Jul-01-2022-06-35-24-28-PM.jpg"
                            alt="Card image"
                        />
                        <Card.ImgOverlay style={{position: 'absolute', top: '60%', left: '28%', right: '20%'}}>
                            <Form className="d-flex" >
                                <Form.Control
                                type="search"
                                placeholder="Buscar respuestas"
                                className="me-2"
                                aria-label="Search"
                                style={{ fontSize: '20px' }}/>
                                <Button variant="light">Search</Button>
                            </Form>
                        </Card.ImgOverlay>
                    </Card>
            </div>

            <div style={{ marginTop: '5%', marginBottom: '5%'}} align='center'>
                <Row style={{ marginLeft: '11%', marginRight: '11%', marginBottom: '5%'}}>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <a href=""><img src="https://ayuda.clevercel.co/hubfs/Recurso%205-Jul-08-2022-06-54-38-12-PM.png" 
                            style={{ maxWidth: '200px', marginBottom:'25px'}} />
                                <Card.Title>Preguntas frecuentes</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Todo lo que necesitas saber sobre CLEVERCEL.</Card.Subtitle>
                            </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <a href=""><img src="https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_1280.png" 
                            style={{ maxWidth: '240px', marginBottom:'25px'}} />
                                <Card.Title>Proceso de compra</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">¿Cómo comprar en Clevercel?</Card.Subtitle>
                            </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <a href=""><img src="https://ayuda.clevercel.co/hubfs/Recurso%204-Jul-01-2022-09-27-07-61-PM.png" 
                            style={{ maxWidth: '200px', marginBottom:'25px'}} />
                                <Card.Title>Envío</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Realice una compra y quiero tener información sobre el estado, tiempo y costo de entrega.</Card.Subtitle>
                            </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginLeft: '11%', marginRight: '11%' }}>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <a href=""><img src="https://ayuda.clevercel.co/hubfs/Recurso%205-Jul-08-2022-06-54-38-12-PM.png" 
                            style={{ maxWidth: '200px', marginBottom:'25px'}} />
                                <Card.Title>Preguntas frecuentes</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Todo lo que necesitas saber sobre CLEVERCEL.</Card.Subtitle>
                            </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <a href=""><img src="https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_1280.png" 
                            style={{ maxWidth: '240px', marginBottom:'25px'}} />
                                <Card.Title>Proceso de compra</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">¿Cómo comprar en Clevercel?</Card.Subtitle>
                            </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <a href=""><img src="https://ayuda.clevercel.co/hubfs/Recurso%204-Jul-01-2022-09-27-07-61-PM.png" 
                            style={{ maxWidth: '200px', marginBottom:'25px'}} />
                                <Card.Title>Envío</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Realice una compra y quiero tener información sobre el estado, tiempo y costo de entrega.</Card.Subtitle>
                            </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Ayuda;