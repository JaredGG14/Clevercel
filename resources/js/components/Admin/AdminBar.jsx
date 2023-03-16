import React, { useEffect } from 'react';
import {Container, Nav, Navbar, Col, Row , Tab} from 'react-bootstrap';
/*Nuevas importaciones */
import { Link, Outlet, useNavigate } from 'react-router-dom';

function AdminBar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user:", user);
    console.log("rol:", user.rol);
    useEffect(() => {
        if (token == null) {
            console.log("Inicia sesion primero")
            navigate("/example-app/public/login")
        }
        if (user.rol === null) {
            console.log("Inicia sesion con otra cuenta")
            navigate("/example-app/public/login")
        }
    });
    return (
        <>
            <div style={{ display: "grid", content: "center", backgroundColor: "#f5f6fb" }}>
                <Row>
                    <Col>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="Tablero">
                            <Row>
                                <Col style={{ paddingLeft: "2%", background: "#4065d6", paddingBottom: "1%", maxHeight: "900px", minHeight: "100%", maxWidth: "15%" }}>
                                    <img src="https://8099266.fs1.hubspotusercontent-na1.net/hub/8099266/hubfs/logo%20clevercel_blanco-06-1.png?height=120&name=logo%20clevercel_blanco-06-1.png"
                                        style={{ width: "100%", paddingTop: "2%", paddingLeft: "2%" }} />
                                    <Nav className="flex-column">
                                        <hr />
                                        <Nav.Link as={Link} to='/example-app/public/admin' style={{ color: "white" }}>Tablero</Nav.Link>
                                        <hr />
                                        <Nav.Link as={Link} to='/example-app/public/admin/admcategorias' style={{ color: "white" }}>Categorias</Nav.Link>
                                        <hr />
                                        <Nav.Link as={Link} to='/example-app/public/admin/admproductos' style={{ color: "white" }}>Productos</Nav.Link>
                                        <hr />
                                        <Nav.Link as={Link} to='/example-app/public/admin/admuser' style={{ color: "white" }}>Usuarios</Nav.Link>
                                        <hr />
                                        <Nav.Link as={Link} to='/example-app/public/' style={{ color: "white" }}>Cerrar</Nav.Link>
                                        <hr />
                                    </Nav>
                                </Col>
                                <Col style={{ width: "auto" }}>
                                    <Row style={{ backgroundColor: "#ffffff" }}>
                                        <header>
                                            <Navbar>
                                                <Container>
                                                    <Navbar.Collapse className="justify-content-end">
                                                        <Navbar.Text>
                                                            Signed in as: Admin
                                                        </Navbar.Text>
                                                    </Navbar.Collapse>
                                                </Container>
                                            </Navbar>
                                        </header>
                                    </Row>
                                    <section style={{
                                        marginTop: "2%", marginBottom: "2%", marginLeft: "2%",
                                        paddingTop: "2%", paddingBottom: "8%", backgroundColor: "#ffffff", width: "95%", maxHeight: "80%"
                                    }}>
                                        <Outlet></Outlet>
                                    </section>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default AdminBar;