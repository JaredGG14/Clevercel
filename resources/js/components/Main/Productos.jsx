import { Col, Row, Button, Card, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Productos() {

    const getAllProducto = async () => {
        const response = await axios.get(`http://localhost/example-app/public/api/product_index`)
        setProducto(response.data)
        setdatosGuardados(response.data);
        console.log("datos:", datosGuardados)
    }

    const [Producto, setProducto] = useState([])
    const [datosGuardados, setdatosGuardados] = useState([])

    useEffect(() => {
        getAllProducto()
    }, [])

    const filtro = () => {
        const resultado = [...datosGuardados].sort((a, b) => a.precio - b.precio);
        setProducto(resultado);
        console.log(resultado);
    }

    const filtro2 = () => {
        const resultado = [...datosGuardados].sort((a, b) => b.precio - a.precio);
        setProducto(resultado);
        console.log(resultado);
    }

    const filtro3 = (color) => {
        const resultado = [...datosGuardados].filter((producto) => producto.color === color);
        setProducto(resultado);
        console.log(resultado);
    }

    const filtro4 = (nombre) => {
        const resultado = [...datosGuardados].filter((producto) => producto.producto.includes(nombre));
        setProducto(resultado);
    }

    const filtro0 = () => {
        setProducto(datosGuardados);
    }

    return (
        <>
            <div className="position-relative">
                <Card className="text-white">
                    <Card.Img
                        src="https://cdn.shopify.com/s/files/1/0325/8708/8005/collections/banner5_1748x.jpg?v=1659107164"
                        alt="Card image"
                    />
                    <Card.ImgOverlay>
                        <Card.Title
                            style={{ position: 'absolute', top: '50%', left: '50%', fontWeight: 'bold', fontSize: '66px' }}>
                            Apple
                        </Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <br />
            <div style={{ maxWidth: '95%', display: "grid", content: "center", marginLeft: "3%" }}>
                <h1 align="center">Productos</h1>
                <InputGroup className="mb-3" style={{width:"50%", margin:"auto"}}>
                    <Form.Control
                        placeholder="Busqueda"
                        aria-describedby="basic-addon2"
                        onChange={(e)=>filtro4(e.target.value)}
                        size="xxl"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Buscar
                    </Button>
                </InputGroup>

                <div style={{ paddingBottom: "5%" }}>
                    <Row>
                        <Col style={{ maxWidth: '20%' }}>
                            <h2>Filtros</h2>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Precio</Accordion.Header>
                                    <Accordion.Body>
                                        <Button variant="link" onClick={() => filtro()}>Menor a mayor</Button>
                                        <Button variant="link" onClick={() => filtro2()}>Mayor a menor</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Colors</Accordion.Header>
                                    <Accordion.Body>
                                        <Button variant="link" onClick={() => filtro3("Blancos")}>Blanco</Button>
                                        <Button variant="link" onClick={() => filtro3("Negro")}>Negro</Button>
                                        <Button variant="link" onClick={() => filtro0()}>Todos</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>

                        <Col style={{ marginLeft: "10px", }} align="center">
                            <Row>
                                {Producto.map((productos) => (
                                    <Card style={{ width: 'auto', marginLeft: "2%", marginBottom: "2%" }}>
                                        <Card.Body>
                                            <Link to={`/example-app/public/iphone/${productos.id}`}>
                                                <img src={productos.imagen} style={{ maxWidth: '250px' }} />
                                                <Card.Title>{productos.producto}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Desde ${productos.precio}</Card.Subtitle>
                                                <Card.Text>En stock: {productos.stock}</Card.Text>
                                                <Card.Link href="#">Ver más</Card.Link></Link>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div style={{ paddingBottom: "2%" }}>
                    <h5>Conoce las opciones que CLEVERCEL te da para que tengas tu smartphone ideal.</h5>
                </div>
            </div>
        </>
    );
}

export default Productos;