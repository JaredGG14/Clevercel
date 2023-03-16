import {Button, Form, Col, Row, Table, Modal} from 'react-bootstrap';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom"
import { useNavigate } from 'react-router-dom';
const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

//CUENTA 
//sb-fo43mb22318371@personal.example.com | 0@KV|W4a

function ProductUpdate(props) {
    const endpoint = 'http://localhost/example-app/public/api/carrito_edit'
    const [cantidad, setCantidad] = useState('')
    const updateProducto = async (id) => {
        await axios.post(endpoint, { id: id, cantidad: cantidad })
        alert("Producto actualizado");
        navigate('/carro')
    }

    
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editar {props.producto.producto}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control
                            name="cantidad" value={cantidad} placeholder={props.producto.cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => updateProducto(props.producto.id)} className='btn btn-warning'>Editar</Button>
                <Button onClick={() => window.location.reload()}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

function ProductoDeleted(props) {
    const endpoint = 'http://localhost/example-app/public/api/carrito_delete'
    const deleteProducto = async (id) => {
        await axios.post(endpoint, { id: id })
        alert("Producto eliminado");
        navigate('/')
    }
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ¿Seguro que quieres eliminar {props.producto.producto}?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={() => deleteProducto(props.producto.id)} className='btn btn-danger'>Delete</Button>
                <Button onClick={()=>window.location.reload()}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Carrito() {
    const navigate = useNavigate();
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [productoDatos, setProductoDatos] = useState({});
    
   const token = localStorage.getItem("token");

   if (token == null){
    navigate("/example-app/public/login")
   }

    const getAllProducto = async () => {
        const response = await axios.get(`http://localhost/example-app/public/api/carrito_index`)
        setProducto(response.data)
    }

    const [Producto, setProducto] = useState([])
    useEffect(() => {
        getAllProducto()
    }, [])


    function editProducto(producto) {
        setModalShow1(true)
        setProductoDatos(producto)
    }

    function deleteProducto(producto) {
        setModalShow2(true)
        setProductoDatos(producto)
    }

    var subtotal = 0;
    var cant = 0;
    {
        Producto.map((item) => (
            subtotal = subtotal + (item.precio * item.cantidad)
        ))
    }
    {
        Producto.map((item) => (
            cant = cant + (1 * item.cantidad)
        ))
    }
    console.log("subtotal:", subtotal)
    console.log("cantidad:", cant)


    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Airpods 3a",
                    amount: {
                        value: "226.00",
                  },
                },
              ],
        });
      };

    const onApprove = async (data, actions) => {
        const response = await axios.get(`http://localhost/example-app/public/api/carrito_clear`)
        navigate('/')
        return actions.order.capture();
    };

    return (
        <>
            <div style={{ backgroundColor: "#ededed" }}>
                <div style={{ width: "95%", marginLeft: "3%", paddingRight: "2%", backgroundColor: "#ededed", paddingBottom: "5%" }}>
                    <Row>
                        <div style={{ display: "inline-flex", textAlign: "end", paddingBottom: "5px", paddingTop: "10px" }}>
                            <h1>Carrito</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col style={{ width: "auto%", backgroundColor: "white", borderRadius: "10px" }}>
                            <div>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Imagen</th>
                                            <th>Producto</th>
                                            <th>Memoria</th>
                                            <th>Color</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Producto.map((productos) => (
                                            <tr key={productos.id}>
                                                <td>{productos.id}</td>
                                                <td><img src={productos.imagen} alt="imagen {productos.id}" width="100px" /></td>
                                                <td>{productos.producto}</td>
                                                <td>{productos.memoria}</td>
                                                <td>{productos.color}</td>
                                                <td>{productos.precio}</td>
                                                <td>{productos.cantidad}</td>
                                                <td>
                                                    <Button variant="warning" onClick={() => editProducto(productos)}>Editar</Button>{' '}
                                                    <ProductUpdate
                                                        show={modalShow1}
                                                        onHide={() => setModalShow1(false)}
                                                        producto={productoDatos}
                                                    />
                                                    <Button variant="danger" onClick={() => deleteProducto(productos)}>Eliminar</Button>{' '}
                                                    <ProductoDeleted
                                                        show={modalShow2}
                                                        onHide={() => setModalShow2(false)}
                                                        producto={productoDatos}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col style={{ maxWidth: "20%", marginLeft: "2%" }}>
                            <div style={{ textAlign: "center", backgroundColor: "white", paddingBottom: "5%", paddingTop: "5%", borderRadius: "15px" }}>
                                <h1>Subtotal:</h1>
                                <h2><strong>$</strong>{subtotal}</h2>
                                <br />
                                <h4> <strong>{cant}</strong> producto(s) </h4>
                                <div className="d-grid gap-2" style={{ marginLeft: "5%", marginRight: "5%" }}>
                                    <div>
                                            <PayPalButton
                                                createOrder={(data, actions) => createOrder(data, actions)}
                                                onApprove={(data, actions) => onApprove(data, actions)}
                                                />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>                   
                </div>
            </div>
        </>
    );
}

export default Carrito;