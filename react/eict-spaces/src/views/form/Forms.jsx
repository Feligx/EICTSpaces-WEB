import React from "react";
import { Button, Col, Container, Form, Input, Label, Row, FormGroup } from "reactstrap";
import { Card, CardBody, CardImg, CardText } from "reactstrap"
import './Form.css'

const Forms = () => {
    return (
        <>
            <Row className="vh-100 d-flex w-100 align-items-center">
                <Col md='5' className="d-flex justify-content-center">
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
                        <Button className="bton env ml-auto">
                            Enviar
                        </Button>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Forms