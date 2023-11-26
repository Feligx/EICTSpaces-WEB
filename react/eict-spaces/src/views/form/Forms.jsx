import React from "react";
import { Button, Col, Container, Form, Input, Label, Row, FormGroup } from "reactstrap";
import { Card, CardBody, CardImg, CardText } from "reactstrap"
import './Form.css'
import { LifePreserver } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)
const Forms = () => {

    function showSuccess() {
        MySwal.fire({
            title: "Reserva exitosa",
            text: "",
            icon: "success"
        })
    }


    return (
        <>
            <Row className="d-flex align-items-center mt-5">
                <Col md='5' className="">
                    <Card className="ca2 rounded-3 px-0 d-flex">
                        <CardImg src="https://picsum.photos/200/300" className="c_img3 card-img-top rounded-3"></CardImg>
                        <CardBody>
                            <CardText className="fs-2 d-flex justify-content-center">EICT Spaces</CardText>
                            <CardText className="mt-0 d-flex justify-content-center">Claustro - Edificio Algo - Piso 5</CardText>
                            <Row>
                                <Col>
                                    <CardText className="mt-0 d-flex justify-content-center">Fecha y hora elegidos:</CardText>
                                    <ul>
                                        <li><CardText className="mt-0 d-flex ">Fecha: 20/10/2021, Hora: 15:00</CardText></li>
                                        <li><CardText className="mt-0 d-flex ">Fecha: 20/10/2021, Hora: 15:00</CardText></li>
                                    </ul>
                                </Col>
                                <Col>
                                    <CardText className="mt-0 d-flex justify-content-center">Capacidad</CardText>
                                    <ul>
                                        <li><CardText className="mt-0 d-flex ">20 personas</CardText></li>
                                        <li><CardText className="mt-0 d-flex ">20 computadores</CardText></li>
                                    </ul>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='7' className="">

                    <Form className="">
                        <FormGroup>
                            <Label for="nombreEvento">
                                Email
                            </Label>
                            <Input
                                id="nombreEvento"
                                name="nombreEvento"
                                placeholder=""
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Nombre">
                                Nombre
                            </Label>
                            <Input
                                id="Nombre"
                                name="nombre"
                                placeholder=""
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Email">
                                Email
                            </Label>
                            <Input
                                id="Email"
                                name="email"
                                placeholder=""
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="number">
                                Numero de telefono
                            </Label>
                            <Input
                                id="number"
                                name="number"
                                placeholder=""
                                type="number"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="desc">
                                Descripción
                            </Label>
                            <Input
                                id="desc"
                                name="desc"
                                type="textarea"
                            />
                        </FormGroup>
                    </Form>
                    <Row className="d-flex justify-content-end me-1">
                        <Button className="bton env ml-auto" tag={Link} to="/dashboard" onClick={showSuccess}>
                            Enviar
                        </Button>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Forms