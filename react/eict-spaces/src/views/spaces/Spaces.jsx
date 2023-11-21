import './Spaces.css'
import react_logo from '../../assets/react.svg'
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Input, InputGroup, Label, Row} from "reactstrap";
import {CloudArrowUpFill} from "react-bootstrap-icons";
import {useRef} from "react";
import {Link} from "react-router-dom";

const Spaces = ({edit = false}) => {
    const fileRef = useRef()

    const handleFileClick = () => {
        fileRef.current?.click();
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {edit ? 'Editar espacio' : 'Nuevo espacio'}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Row className="my-4">
                    <Col md="3" className="my-2 my-lg-0 ">
                        <InputGroup onClick={handleFileClick} className="rounded bg-light h-100 d-flex justify-content-center align-items-center">
                            <Input disabled={edit} type="file" name="file" id="file" className="d-none" innerRef={fileRef}/>
                            <CloudArrowUpFill className="text-muted" size="128"/>
                        </InputGroup>
                    </Col>
                    <Col md="9">
                        <Row>
                            <Col>
                                <Label for="space_name" tag="small" className="text-muted">Nombre</Label>
                                <Input disabled={edit} name="space_name" id="space_name" type="text"/>
                                <Label for="devices" tag="small" className="text-muted">Equipos</Label>
                                <Input disabled={edit} name="devices" id="devices" type="text"/>
                            </Col>
                            <Col>
                                <Label for="location" tag="small" className="text-muted">Ubicación</Label>
                                <Input disabled={edit} name="location" id="location" type="text"/>
                                <Label for="area" tag="small" className="text-muted">Área</Label>
                                <Input disabled={edit} name="area" id="area" type="text"/>
                            </Col>
                            <Col>
                                <Label for="capacity" tag="small" className="text-muted">Capacidad</Label>
                                <Input disabled={edit} name="capacity" id="capacity" type="text"/>
                                <Label for="type" tag="small" className="text-muted">Tipo</Label>
                                <Input disabled={edit} name="type" id="type" type="text"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label for="description" tag="small" className="text-muted">Descripción</Label>
                                <Input disabled={edit} type="text" name="description" id="description" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button tag={Link} color="danger rounded-pill me-2" outline to={-1}>
                        Cancelar
                    </Button>
                    <Button tag={Link} color="success rounded-pill" to={-1}>
                        Guardar
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default Spaces