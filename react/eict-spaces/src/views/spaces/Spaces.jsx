import './Spaces.css'
import react_logo from '../../assets/react.svg'
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Input, Label, Row} from "reactstrap";

const Spaces = ({edit}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {edit ? 'Editar espacio' : 'Nuevo espacio'}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Row className="my-4">
                    <Col md="3">
                        <img src={react_logo} alt="space_img" />
                    </Col>
                    <Col md="9">
                        <Row>
                            <Col>
                                <Label for="space_name" tag="small" className="text-muted">Nombre</Label>
                                <Input name="space_name" id="space_name" type="text"/>
                                <Label for="devices">Equipos</Label>
                                <Input name="devices" id="devices" type="text"/>
                            </Col>
                            <Col>
                                <Label for="location">Ubicación</Label>
                                <Input name="location" id="location" type="text"/>
                                <Label for="area">Área</Label>
                                <Input name="area" id="area" type="text"/>
                            </Col>
                            <Col>
                                <Label for="capacity">Capacidad</Label>
                                <Input name="capacity" id="capacity" type="text"/>
                                <Label for="type">Tipo</Label>
                                <Input name="type" id="type" type="text"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label for="description">Descripción</Label>
                                <Input type="text" name="description" id="description" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button color="danger rounded-pill me-2" outline>
                        Cancelar
                    </Button>
                    <Button color="success rounded-pill">
                        Guardar
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default Spaces