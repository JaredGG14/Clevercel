import {Table, Button, Modal, Form, ModalDialog} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductStore(props) {
    const endpoint = 'http://localhost/example-app/public/api/product_store'
    const [categoria_id, setCategoria_id] = useState('')
    const [imagen, setimagen] = useState('')
    const [producto, setProducto] = useState('')
    const [memoria, setMemoria] = useState('')
    const [color, setColor] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [stock, setStock] = useState('')
    const navigate = useNavigate();
    

    const store = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')
         
        await axios.post(endpoint,
            {
                categoria_id: categoria_id, imagen: imagen, producto: producto, memoria: memoria, color: color,
                descripcion: descripcion, precio: precio, stock: stock
            },
            {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                console.log("realizado")   
                alert("Producto agregado" )             
                navigate("/example-app/public/admin/admproductos")
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agregar producto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={store}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Producto:</Form.Label>
                        <Form.Control
                            name="nombre" value={producto}
                            onChange={(e) => setProducto(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID categoria:</Form.Label>
                        <Form.Control
                            name="nombre" value={categoria_id}
                            onChange={(e) => setCategoria_id(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagen:</Form.Label>
                        <Form.Control
                            name="nombre" value={imagen}
                            onChange={(e) => setimagen(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Memoria:</Form.Label>
                        <Form.Control
                            name="nombre" value={memoria}
                            onChange={(e) => setMemoria(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Color:</Form.Label>
                        <Form.Control
                            name="nombre" value={color}
                            onChange={(e) => setColor(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control
                            name="nombre" value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Precio:</Form.Label>
                        <Form.Control
                            name="nombre" value={precio}
                            onChange={(e) => setPrecio(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Stock:</Form.Label>
                        <Form.Control
                            name="nombre" value={stock}
                            onChange={(e) => setStock(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group>
                        <Button type='submit'>Guardar</Button></Form.Group>
                </Form>
            </Modal.Body>   
            <Modal.Footer>
                <Button onClick={()=>window.location.reload()}>Listo</Button> 
            </Modal.Footer>
        </Modal>
    );
}

function ProductUpdate(props) {
    const endpoint = 'http://localhost/example-app/public/api/product_update'
    const [id, setId] = useState('')
    const [categoria_id, setCategoria_id] = useState('')
    const [imagen, setimagen] = useState('')
    const [producto, setProducto] = useState('')
    const [memoria, setMemoria] = useState('')
    const [color, setColor] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [stock, setStock] = useState('')    
    const navigate = useNavigate();

    const update = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        
        await axios.post(endpoint,
            {
                id: props.producto.id, categoria_id: categoria_id, imagen: imagen, producto: producto,
                memoria: memoria, color: color, descripcion: descripcion, precio: precio, stock: stock
            },{
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                console.log("realizado")
                alert("Producto actualizado")
                navigate("/example-app/public/admin/admproductos")
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
        
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editar producto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={update}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID:</Form.Label>
                        <Form.Control
                            name="nombre" value={props.producto.id}
                            onChange={(e) => setId(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Producto:</Form.Label>
                        <Form.Control
                            name="nombre" value={producto} placeholder={props.producto.producto}
                            onChange={(e) => setProducto(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID categoria:</Form.Label>
                        <Form.Control
                            name="nombre" value={categoria_id}placeholder={props.producto.categoria_id}
                            onChange={(e) => setCategoria_id(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagen:</Form.Label>
                        <Form.Control
                            name="nombre" value={imagen} placeholder={props.producto.imagen}
                            onChange={(e) => setimagen(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Memoria:</Form.Label>
                        <Form.Control
                            name="nombre" value={memoria} placeholder={props.producto.memoria}
                            onChange={(e) => setMemoria(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Color:</Form.Label>
                        <Form.Control
                            name="nombre" value={color} placeholder={props.producto.color}
                            onChange={(e) => setColor(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control
                            name="nombre" value={descripcion} placeholder={props.producto.descripcion}
                            onChange={(e) => setDescripcion(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Precio:</Form.Label>
                        <Form.Control
                            name="nombre" value={precio} placeholder={props.producto.precio}
                            onChange={(e) => setPrecio(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Stock:</Form.Label>
                        <Form.Control
                            name="nombre" value={stock} placeholder={props.producto.stock}
                            onChange={(e) => setStock(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group>
                        <Button type='submit'>Guardar</Button></Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>window.location.reload()}>Listo</Button> 
            </Modal.Footer>
        </Modal>
    );
}

function ProductDestroy(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const endpoint = 'http://localhost/example-app/public/api/product_delete'
    const deleteProducto = async (id) => {
        await axios.post(endpoint, { id: props.producto.id },
            {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                console.log("realizado")
                alert("Producto Eliminado")
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
        navigate("/example-app/public/admin/admproductos")  
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Seguro que quieres eliminar este producto? {props.producto.id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalDialog>
                    <button onClick={() => deleteProducto(props.producto.id)} className='btn btn-danger'>Delete</button>
                </ModalDialog>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>window.location.reload()}>Listo</Button> 
            </Modal.Footer>
        </Modal>
    );
}

function AdminProductos() {
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [productoDatos, setProductoDatos] = useState({});

    const getAllProducto = async () => {
        const response = await axios.get(`http://localhost/example-app/public/api/product_index`)
        setProducto(response.data)
    }
    const [Producto, setProducto] = useState([])
    useEffect(() => {
        getAllProducto()
    }, [])

    function editProducto(producto) {
        setModalShow2(true)
        setProductoDatos(producto)
    }

    function deleteProducto(producto) {
        setModalShow3(true)
        setProductoDatos(producto)
    }

    return (
        <>
            <div style={{ width: "95%", marginLeft: "3%", paddingRight: "2%", }}>
                <div style={{ display: "inline-flex", textAlign: "end", paddingBottom: "10px  " }}>
                    <div style={{ paddingRight: "20px" }}>
                        Productos
                    </div>
                    <div>
                        <Button variant="primary" onClick={() => setModalShow1(true)}>Agregar</Button>{' '}
                        <ProductStore
                            show={modalShow1}
                            onHide={() => setModalShow1(false)}
                        />
                    </div>
                </div>
                <div>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>imagen</th>
                                <th>Nombre</th>
                                <th>id cat</th>
                                <th>Memoria</th>
                                <th>Color</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Producto.map((productos) => (
                                <tr key={productos.id}>
                                    <td>{productos.id}</td>
                                    <td><img src={productos.imagen} alt="imagen {productos.id}" width="100px"/></td>
                                    <td>{productos.producto}</td>
                                    <td>{productos.categoria_id}</td>
                                    <td>{productos.memoria}</td>
                                    <td>{productos.color}</td>
                                    <td>{productos.descripcion}</td>
                                    <td>{productos.precio}</td>
                                    <td>{productos.stock}</td>
                                    <td>
                                        <Button variant="warning" onClick={() => editProducto(productos)}>Editar</Button>{' '}
                                        <ProductUpdate
                                            show={modalShow2}
                                            onHide={() => setModalShow2(false)}
                                            producto={productoDatos}
                                        />
                                        <Button variant="danger" onClick={() => deleteProducto(productos)}>Eliminar</Button>{' '}
                                        <ProductDestroy
                                            show={modalShow3}
                                            onHide={() => setModalShow3(false)}
                                            producto={productoDatos}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}
export default AdminProductos;