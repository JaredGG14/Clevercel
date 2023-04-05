import { Col, Row, Button, Form, Tab, Tabs } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

function Login() {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dirección, setDirección] = useState('')
    const navigate = useNavigate();

    const { setUserLogged, setUser } = useContext(AuthContext);
    const [textError, setTextError] = useState('');
    const [formOk, setFormOk] = useState(true);

    const login = async (e) => {
        e.preventDefault();
        console.log("Login")

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        await axios.post("http://localhost/example-app/public/api/login",
            { email: email, password: password, 
                
            }, headers)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                //console.log("token: ", response.data.token);

                setUserLogged(true);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setUser(response.data.user);
                if(response.data.user.rol === "Administrador") {
                    console.log("Sesión iniciada", email, password);
                    console.log("Administrador: ", response.data.user.nombre, " ", response.data.user.apellido);
                    alert("Sesión iniciada " + response.data.user.nombre + " " + response.data.user.apellido)
                    navigate('/example-app/public/admin');

                }else if(response.data.user.rol === "Compras"){
                    console.log("Sesión iniciada", email, password);
                    console.log("Administrador: ", response.data.user.nombre, " ", response.data.user.apellido);
                    alert("Sesión iniciada " + response.data.user.nombre + " " + response.data.user.apellido)
                    navigate('/example-app/public/compras');

                 }else{
                    alert("Sesión iniciada " + response.data.user.nombre +  " " + response.data.user.apellido)
                    navigate('/example-app/public/');

                }
            }).catch(error => {
                console.log("error")
                setTextError("La contraseña o correo es incorrecto");
                setFormOk(false);
                console.log(textError);
            });
    }

    const register = async (e) => {
        
        console.log("Register")
        e.preventDefault();
        setFormOk(true);
        if (nombre.trim() === "" || apellido.trim() === ""
            || email.trim() === "" || password.trim() === "" || dirección.trim() === "") {
            setTextError('Error, uno de los campos estan vacios');
            setFormOk(false);
            console.log(setTextError);
            return;
        }
        if (password.trim().length < 8) {
            setTextError('La contraseña debe tener minimo 8 carácteres');
            setFormOk(false);
            console.log(setTextError);
            return;
        }
        if (formOk) {
            const headers = {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
            console.log("Formulario completo");
            await axios.post("http://localhost/example-app/public/api/registro", 
                {
                    nombre: nombre, apellido: apellido, email: email, password: password,
                    dirección: dirección,
                }, headers)
                .then(response => {
                    localStorage.setItem("token", response.data.token);
                    console.log("token: ", response.data.token)
                    setUserLogged(true);
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    setUser(response.data.user);
                    if (response.data.user.rol === "Administrador") {
                        navigate('/example-app/public/admin');
                    } else {
                        navigate('/example-app/public/');
                    }
                    console.log("Sesión iniciada", email, password);
                    console.log("Bienvenido ", nombre, " ", apellido);
                }).catch(error => {
                    setTextError("El correo ya existe");
                    setFormOk(false);
                    console.log(textError)                    
                    console.log(error.response.data);
                });
        }
    }

    return (
        <>
            <div style={{ marginLeft: '15%', marginRight: '15%' }}>
                <div style={{ paddingTop: '2%', paddingBottom: '20%'}} align='center'>
                    <Tabs
                        defaultActiveKey="Inicio"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                        style={{fontSize:"23px"}}
                    >
                        <Tab eventKey="Inicio" title="Inicio">
                            <div style={{ width: "70%", paddingTop:"7% " }}>
                                <h2 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '54px' }}>
                                    Inicio de Sesión
                                </h2>
                                <br />
                                <div style={{ textAlign: "left", width: "73%" }}>
                                    <p style={{ fontSize:"21px" }}> Por favor, introduzca su correo electrónico y contraseña: </p>

                                    <Form onSubmit={login} style={{ textAlign: "center" }}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Correo electronico"
                                                name="email" value={email}
                                                onChange={(e) => setEmail(e.target.value)} 
                                                style={{ fontSize:"25px" }} required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Contraseña"
                                                name="password" value={password}
                                                onChange={(e) => setPassword(e.target.value)} 
                                                style={{ fontSize:"25px" }} required/>
                                        </Form.Group>
                                        <div className="d-grid" type="submit" style={{ marginTop: '8%' }}>
                                            <Button variant='outline' size="lg" type='submit' style={{ fontSize:"27px", fontFamily: 'sans-serif', fontWeight: 'bold', background: '#fff773' }}>
                                                Iniciar sesión
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="register" title="Registro">
                            <div style={{ width: "70%" }}>
                                <h2 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '54px', paddingTop:"2%"}}>
                                    Registro
                                </h2>
                                <br />
                                <div style={{ textAlign: "left", fontSize: '24px'}}>
                                    <p>Por favor, llene todos los campos:</p>
                                    <Form onSubmit={register}>
                                        
                                        <Form.Group className="mb-3" >
                                            <Row>
                                                <Col>
                                                    <Form.Control type="nombre" placeholder="Nombre"
                                                        name="name" value={nombre} style={{ fontSize: '24px' }}
                                                        onChange={(e) => setNombre(e.target.value)} required/>
                                                </Col>
                                                <Col>
                                                    <Form.Control type="nombre" placeholder="Apellido"
                                                        name="name" value={apellido} style={{ fontSize: '24px' }}
                                                        onChange={(e) => setApellido(e.target.value)} required/>
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Control placeholder="Direccion"
                                                type="direction" name="name" value={dirección} style={{ fontSize: '24px' }}
                                                onChange={(e) => setDirección(e.target.value)} required/>
                                            <Form.Text className="text-muted">
                                                No compartiremos esta información con nadie.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Control type="email" placeholder="Correo Electronico"
                                                name="name" value={email} style={{ fontSize: '24px' }}
                                                onChange={(e) => setEmail(e.target.value)} required/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Control type="password" placeholder="Contraseña"
                                                name="name" value={password} style={{ fontSize: '24px' }}
                                                onChange={(e) => setPassword(e.target.value)} required/>
                                        </Form.Group>
                                        <div className="d-grid" style={{ marginTop: '4%' }}>
                                            <Button variant='outline' size="lg" type='submit' style={{ fontFamily: 'sans-serif', fontWeight: 'bold',fontSize: '30px', background: '#fff773' }}>
                                                Registrarse
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default Login;