import {Card, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Compras() {
    return (
        <>
            <div style={{ width: "95%", marginLeft: "3%", paddingRight: "2%", }}>
                <div style={{ maxWidth: '95%', display: "grid", content: "center", marginLeft: "3%" }}>
                    <h1>Página de Administración</h1>
                    <div style={{ fontWeight: "bold" }}>
                        <Row style={{ fontWeight: "bold" }}>
                            <Col style={{ fontWeight: "bold" }}>
                                <Link to='/example-app/public/compras/informes'>
                                    {[
                                        'Primary'
                                    ].map((variant) => (
                                        <Card
                                            bg={variant.toLowerCase()}
                                            key={variant}
                                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                            style={{ width: 'auto', textAlign: "center", fontWeight: "bold" }}
                                            className="mb-2"
                                            align="center"
                                        >
                                            <Col>
                                                <Card.Img src='https://i.postimg.cc/DwkNV2x8/categoria.png'
                                                    style={{ width: '75%' }} />
                                            </Col>
                                            <Col>
                                                <Card.Body>
                                                <Card.Title style={{ fontWeight: "bold" }}> <strong>Informes</strong> </Card.Title>
                                                    <Card.Text>
                                                        Mensuales
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>

                                        </Card>
                                    ))}
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/example-app/public/compras/compras_admin'>

                                    {[
                                        'Primary'
                                    ].map((variant) => (
                                        <Card
                                            bg={variant.toLowerCase()}
                                            key={variant}
                                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                            style={{ width: 'auto', textAlign: "center" }}
                                            className="mb-2"
                                            align="center"
                                        >
                                            <Col>
                                                <Card.Img src='https://i.postimg.cc/T1sZ5gj9/producto.png'
                                                    style={{ width: '75%' }} />
                                            </Col>
                                            <Col>
                                                <Card.Body>
                                                    <Card.Title style={{ fontWeight: "bold" }}> <strong>Vista</strong> </Card.Title>
                                                    <Card.Text>
                                                        Compras
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>

                                        </Card>
                                    ))}
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/example-app/public/compras/ventas_admin'>
                                    {[
                                        'Primary'
                                    ].map((variant) => (
                                        <Card
                                            bg={variant.toLowerCase()}
                                            key={variant}
                                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                            style={{ width: 'auto', textAlign: "center" }}
                                            className="mb-2"
                                            align="center"
                                        >
                                            <Col>
                                                <Card.Img src='https://cdn-icons-png.flaticon.com/512/834/834526.png?w=360'
                                                    style={{ width: '75%' }} />
                                            </Col>
                                            <Col>
                                                <Card.Body>   
                                                <Card.Title style={{ fontWeight: "bold" }}> <strong>Administración</strong> </Card.Title>                                                 
                                                    <Card.Text>
                                                        Ventas
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>

                                        </Card>
                                    ))}
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    <hr />

                    <div align="center" style={{ paddingBottom: "2%" }}>
                        <h5>Adminitra el negocio con estas herramientas.</h5>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Compras;