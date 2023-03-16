import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Main/Navbar"
import Main from "./Main/Main";
import Productos from "./Main/Productos";
import Contenedor from "./Main/ProductoContenedor";
import Producto1 from "./Main/Producto1";
import MetodoPago from "./Main/MetodoPago";
import Ayuda from "./Main/Ayuda";
import Login from "./Main/Login";
import Carrito from "./Main/Carrito";
import AdminBar from "./Admin/AdminBar";
import Admin from "./Admin/Admin";
import AdminCategorias from "./Admin/AdminCategorias";
import AdminProductos from "./Admin/AdminProductos";
import AdminUser from "./Admin/AdminUser";

import AuthProvider from "./AuthContext";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/example-app/public" element={<Navbar />}>
                            <Route index element={<Main />} />
                            <Route path="main" element={<Main />} />
                            <Route path="productos" element={<Productos />} />
                            <Route path="iphone" element={<Contenedor />} >
                            <Route path=":iphoneId" element={<Producto1 />} />
                            </Route>
                            <Route path="metodo" element={<MetodoPago />} />
                            <Route path="centro" element={<Ayuda />} />
                            <Route path="login" element={<Login />} />
                            <Route path="carro" element={<Carrito />} />
                        </Route>
                        <Route path="/example-app/public/admin" element={<AdminBar />}>
                            <Route index element={<Admin />} />
                            <Route path="admcategorias" element={<AdminCategorias />} />
                            <Route path="admproductos" element={<AdminProductos />} />
                            <Route path="admuser" element={<AdminUser />} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div >
    );
}
