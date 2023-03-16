import {Card, Row, Col} from 'react-bootstrap';
function MetodoPago() {
    return (
        <>
            <div class="position-relative text">
                <Card className="text-red">
                    <Card.Img
                        src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/BANNER_P_3000x.png?v=1665009647"
                        alt="Card image"
                    />
                    <Card.ImgOverlay>
                        <Card.Title
                            style={{ position: 'absolute', top: '50%', right: '50%', fontWeight: 'bold', fontSize: '66px' }}>
                            Metodos de pago
                        </Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <br />
            <div align='center'>
                <h4>Conoce nuestros Metodos de pago</h4>
                <h5>Compra 100% seguro!</h5>
                <br />
                <div style={{ maxWidth: '90%' }}>
                    <Row xs={1} md={2} className="g-4" >
                        <Col>
                            <Card>
                                <Card.Img
                                    src="http://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-07-15_a_la_s_6.04.40_p.m._1810x.png?v=1657926317"
                                    alt="Card image"
                                />
                                <Card.ImgOverlay className="text-white">
                                    <Card.Title
                                        style={{ position: 'absolute', top: '10%', right: '50%', fontWeight: 'bold', fontSize: '45px' }}>
                                        Tarjeta de Crédito y Débito
                                    </Card.Title>
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Text align='left'>

                                        <h3>Aprovecha al maximo con Mercado Pago.</h3>
                                        Paga a un plazo máximo de 12 meses con tu tarjeta de crédito utilizando Mercado
                                        Pago y no pagues intereses o paga con tu tarjeta de crédito Visa, American Express o
                                        MasterCard en nuestro sitio web a través de Mercado Pago y no pagues intereses:
                                        <ul>
                                            <li>
                                                El beneficio de cuotas sin interés aplica solo para tarjeta
                                                habientes de Afirme, American Express, Banbajio, Banca Mifel, banco Azteca, Banco Famsa, Banjercito, Banorte, Banregio,
                                                Citibanamex, Falabella, HSBC, Inbursa, Invex, Konfio, Liverpool, Santander y Scotiabank.
                                            </li>

                                        </ul>
                                        Aplican términos y condiciones de uso de cada banco.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img
                                    src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-07-15_a_la_s_8.46.15_p.m._1770x.png?v=1657936065"
                                    alt="Card image"
                                />
                                <Card.ImgOverlay className="text-white">
                                    <Card.Title
                                        style={{ position: 'absolute', top: '20%', right: '49%', fontWeight: 'bold', fontSize: '40px' }}>
                                        Financiamiento
                                    </Card.Title>
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Text align='left'>
                                        <h3>¡Kueski Pay y Clevercel sealían!</h3>
                                        <p> Para que compres tu iPhone financiado y lo pagues en quincenas.</p>
                                        Requisitos
                                        <ul>
                                            <li>
                                                Ser de nacionalidad mexicana, mayor de edad y
                                                tener un número celular mexicano.
                                            </li>
                                        </ul>
                                        Condiciones
                                        <ul>
                                            <li>
                                                Pago a plazos desde 2 a 4 quincenas sin intereses y de 6 a 8 quincesas con intereses
                                            </li>
                                            <li>Monto minimo de $1,000 mxn</li>
                                            <li>Monto maximo hasta $15,000 mxn</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img
                                    src="http://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-07-18_a_la_s_9.29.47_a.m._1620x.png?v=1658154616"
                                    alt="Card image"
                                />
                                <Card.ImgOverlay className="text-white">
                                    <Card.Title
                                        style={{ position: 'absolute', top: '4%', right: '49%', fontWeight: 'bold', fontSize: '40px' }}>

                                        Pago en Efectivo y Transferencia Bancaria

                                    </Card.Title>
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Text align='left'>
                                        <h3>¡El límite para pagar en efectivo en establecimientos!</h3>
                                        <p> Como 7-Eleven o Soriana es de 10,000.00 MXN y en bancos de hasta 40,000.00 MXN.</p>
                                        Pago en efectivo
                                        <ul>
                                            <li>OXXO</li>
                                            <li>Ley</li>
                                            <li>7 Eleven</li>
                                            <li>Farmacias del Ahorro</li>
                                            <li>Chedraui</li>
                                            <li>Telecomm</li>
                                        </ul>
                                        Depósito Y Transferencia Bancaria
                                        <ul>
                                            <li>Santander</li>
                                            <li>BBVA Bancomer</li>
                                            <li>citibanamex</li>
                                        </ul>
                                        Debito Bancario
                                        <ul>
                                            <li>SPE</li>
                                        </ul>
                                        Otras Billeteras
                                        <ul>
                                            <li>Mercado Pago</li>
                                            <li>PayPal</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img
                                    src="https://cdn.shopify.com/s/files/1/0325/8708/8005/files/Captura_de_Pantalla_2022-07-18_a_la_s_11.32.31_a.m._1968x.png?v=1658162154"
                                    alt="Card image"
                                />
                                <Card.ImgOverlay className="text-white">
                                    <Card.Title
                                        style={{ position: 'absolute', top: '15%', left: '35%', fontWeight: 'bold', fontSize: '40px' }}>
                                        Billeteras Virtuales
                                    </Card.Title>
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Text align='left'>
                                        <h3>Paypal</h3>
                                        <p> Con PayPal podrás pagar en solo unos clics. Ingresa tu correo electrónico y contraseña, y... ¡listo!</p>
                                        Pasos:
                                        <ol type='1'>
                                            <li>Entrar al Clevercel.mx. </li>
                                            <li>Selecciona el iPhone que quieres y agrégalo al carrito de compras. </li>
                                            <li>Dirígete al carrito y dale clic en comprar. ​</li>
                                            <li>Diligencia la información de envío.</li>
                                            <li>Seleccionar método de pago PayPal y finaliza la compra siguiendo
                                                las indicaciones de PayPal. ​</li>
                                        </ol>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                </div>
            </div>
        </>
    );
}
export default MetodoPago;