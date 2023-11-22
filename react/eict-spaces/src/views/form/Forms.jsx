import React from "react";
import { Button, Col, Container, Form, Input, Label, Row, FormGroup } from "reactstrap";
import './Form.css'

const Forms = () => {
    return (
        <>
            <Row className="vh-100 d-flex w-100">
                <Col md='4'>
                    <h1>Forms</h1>
                </Col>
                <Col md='8'>
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
                    <Form>
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
                    <Row className="d-flex justify-content-end me-2">
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