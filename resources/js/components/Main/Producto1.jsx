import { Col, Row, Button} from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

function Producto1() {
    const navigate = useNavigate();
    const id = useParams().iphoneId;
    const getAllProducto = async () => {
        const response = await axios.get(`http://localhost/example-app/public/api/product_detalle/${id}`)
        setProducto(response.data)
    }
    const [Producto, setProducto] = useState([])
    useEffect(() => {
        getAllProducto()
    }, [])

    const add = async (e) => {
        e.preventDefault();
        const cantidad = 1;
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if (token !== null) {
            const endpoint = 'http://localhost/example-app/public/api/carrito_add'
            await axios.post(endpoint, { id: id, cantidad: cantidad, email: user})
            alert("Agregado");
            navigate('/example-app/public/carro')
        } else{
            console.log("Inicie sesion primero");
        }
    }


    return (
        <> <br />
            <div style={{ maxWidth: '95%', marginLeft: ' 10%', marginRight: ' 10%' }} >
                {Producto.map((productos) => (
                    <Row>
                        <Col style={{ paddingBottom: "5%" }}>
                            <img src={productos.imagen} style={{ width: "100%" }} />
                        </Col>
                        <Col style={{ minWidth: "30%", maxWidth: "40%", marginLeft: ' 10%' }}>
                            <h1>{productos.producto}</h1>
                            <table>
                                <tr>
                                    <td><h4>${productos.precio}</h4></td>
                                </tr>
                            </table>
                            <p>Impuesto incluido. Gastos de envío calculados en la compra </p>
                            <hr />
                            <p><strong>Memoria:</strong> {productos.memoria}</p>
                            <hr />
                            <p><strong>Color:</strong> {productos.color}</p>
                            <hr />
                            <p><strong>Descripcion:</strong> {productos.descripcion}</p>
                            <hr />
                            <p><strong>Stock:</strong> {productos.stock}</p>
                            <hr />

                            <div className="d-grid gap-2" style={{ paddingTop: "5%" }}>
                                <Button variant="warning" size="lg" onClick={add}>
                                    Añadir al carrito
                                </Button>

                            </div>
                        </Col>
                    </Row>
                ))}
                <br />
            </div>
        </>
    );
}

export default Producto1;