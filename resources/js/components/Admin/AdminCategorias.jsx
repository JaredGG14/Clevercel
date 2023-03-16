import {Table, Button, Modal, Form, ModalDialog} from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CategoryStore(props) {
    const endpoint = 'http://localhost/example-app/public/api/category_store'
    
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const store = async (e) => {
        const token = localStorage.getItem('token')
        console.log(token);
        e.preventDefault();
        await axios.post(endpoint, { nombre: nombre, descripcion: descripcion },
            {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                console.log("realizado")   
                alert("Categoria agregada");           
                navigate("/example-app/public/admin/admcategorias")               
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
                    Agregar categoria
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={store}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categoria:</Form.Label>
                        <Form.Control
                            name="nombre" value={nombre}
                            onChange={(e) => setNombre(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            name="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
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

function CategoryUpdate(props) {
    const endpoint = 'http://localhost/example-app/public/api/category_update'
    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const navigate = useNavigate();
    const [descripcion, setDescripcion] = useState('')

    const update = async (e) => {
        const token = localStorage.getItem('token')
        e.preventDefault();
        await axios.post(endpoint, { id: props.categoria.id, nombre: nombre, descripcion: descripcion },
            {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                console.log("realizado") 
                alert("Categoria actualizada")            
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
                    Editar categoria
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={update}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID:</Form.Label>
                        <Form.Control
                            name="nombre" value={props.categoria.id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categoria:</Form.Label>
                        <Form.Control
                            name="nombre" value={nombre} placeholder={props.categoria.nombre}
                            onChange={(e) => setNombre(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Descripcion:</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            name="descripcion" value={descripcion} placeholder={props.categoria.descripcion}
                            onChange={(e) => setDescripcion(e.target.value)} required/>
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

function CategroyDestroy(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    
    const endpoint = 'http://localhost/example-app/public/api/category_delete'
    const deleteCategory = async (id) => {
        await axios.post(endpoint, { id: props.categoria.id },
            {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                console.log("realizado")
                alert("Categoria eliminada")
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
        navigate("/example-app/public/admin/admcategorias")    
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
                    Seguro que quieres eliminar la categoria: {props.categoria.nombre}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalDialog>
                    <button onClick={() => deleteCategory(props.categoria.id)} className='btn btn-danger'>Delete</button>
                </ModalDialog>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>window.location.reload()}>Listo</Button>
            </Modal.Footer>
        </Modal>
    );
}


function AdminCategorias() {
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [categoria, setCategoria] = useState({});

    const getAllCategorias = async () => {
        const response = await axios.get(`http://localhost/example-app/public/api/category_index`)
        setCategorias(response.data)
    }
    const [Categorias, setCategorias] = useState([])
    useEffect(() => {
        getAllCategorias()
    }, [])

    function editCategoria(categoria) {
        setModalShow2(true)
        setCategoria(categoria)
        
    }

    function deleteCategoria(categoria) {
        setModalShow3(true)
        setCategoria(categoria)
        
    }

    return (
        <>
            <div style={{ width: "95%", marginLeft: "3%", paddingRight: "2%", }}>
                <div style={{ display: "inline-flex", textAlign: "end", paddingBottom: "10px  " }}>
                    <div style={{ paddingRight: "20px" }}>
                        Categorias
                    </div>
                    <div>
                        <Button variant="primary" onClick={() => setModalShow1(true)}>Agregar</Button>{' '}
                        <CategoryStore
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
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Categorias.map((categorias) => (
                                <tr key={categorias.id}>
                                    <td>{categorias.id}</td>
                                    <td>{categorias.nombre}</td>
                                    <td>{categorias.descripcion}</td>
                                    <td>
                                        <Button variant="warning" onClick={() => editCategoria(categorias)}>Editar</Button>{' '}
                                        <CategoryUpdate
                                            show={modalShow2}
                                            onHide={() => setModalShow2(false)}
                                            categoria={categoria}
                                        />
                                        <Button variant="danger" onClick={() => deleteCategoria(categorias)}>Eliminar</Button>{' '}
                                        <CategroyDestroy
                                            show={modalShow3}
                                            onHide={() => setModalShow3(false)}
                                            categoria={categoria}
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
export default AdminCategorias;