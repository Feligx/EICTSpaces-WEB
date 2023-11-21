import './Spaces.css'
import react_logo from '../../assets/react.svg'
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Input, InputGroup, Label, Row, Form} from "reactstrap";
import {CloudArrowUpFill} from "react-bootstrap-icons";
import {useRef} from "react";
import {Link} from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Spaces = ({edit = false}) => {
    const fileRef = useRef()
    const navigate = useNavigate()

    const handleFileClick = () => {
        fileRef.current?.click();
    }

    const { handleSubmit, control, formState: {errors} } = useForm({
        defaultValues: {
            "file": "",
            "space_name": "Espacio 1",
            "devices": "20",
            "location": "Claustro",
            "area": "2",
            "capacity": "4",
            "type": "Cómputo",
            "description": "Esta es una descripción 123 321"
        }
    })

    const onSubmit = (data) => {
        console.log(data)
        navigate("/dashboard")
    }

    useEffect(() => {
        if (!!!edit) {
            console.log("should leave form empty")
        }
    }, [])

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {edit ? 'Editar espacio' : 'Nuevo espacio'}
                </CardTitle>
            </CardHeader>
            <CardBody tag={Form} onSubmit={handleSubmit(onSubmit)}>
                <Row className="my-4">
                    <Col md="3" className="my-2 my-lg-0 ">
                        <Controller
                            name="file"
                            control={control}
                            rules={{ required: true }}
                            render={({field})=> (
                                <InputGroup onClick={handleFileClick} className="rounded bg-light h-100 d-flex justify-content-center align-items-center">
                                    <Input disabled={edit} type="file" name="file" id="file" className="d-none" innerRef={fileRef} {...field}/>
                                    <CloudArrowUpFill className="text-muted" size="128"/>
                                </InputGroup>       
                            )}
                        />
                    </Col>
                    <Col md="9">
                        <Row>
                            <Col>
                                <Controller
                                    name="space_name"
                                    control={control}
                                    rules={{ required: true }}
                                    render={
                                        ({field}) => (
                                            <>
                                                <Label for="space_name" tag="small" className="text-muted">Nombre</Label>
                                                <Input disabled={edit} name="space_name" id="space_name" type="text"/>
                                            </>            
                                        )
                                    }
                                />
                                <Controller
                                    name="devices"
                                    control={control}
                                    rules={{ required: true }}
                                    render={
                                        ({field}) => (
                                            <>
                                                <Label for="devices" tag="small" className="text-muted">Equipos</Label>
                                                <Input disabled={edit} name="devices" id="devices" type="text" {...field}/>
                                            </>
                                        )
                                    }
                                />
                            </Col>
                            <Col>
                                <Controller
                                    name="location"
                                    control={control}
                                    rules={{ required: true }}
                                    render={
                                        ({field}) => (
                                            <>
                                                <Label for="location" tag="small" className="text-muted">Ubicación</Label>
                                                <Input disabled={edit} name="location" id="location" type="text"/>
                                            </>
                                        )
                                    }
                                />
                                <Controller
                                    name="area"
                                    control={control}
                                    rules={{ required: true }}
                                    render={
                                        ({field}) => (
                                            <>
                                                <Label for="area" tag="small" className="text-muted">Área</Label>
                                                <Input disabled={edit} name="area" id="area" type="text"/>
                                            </>
                                        )
                                    }
                                />
                            </Col>
                            <Col>
                                <Controller
                                    name="capacity"
                                    control={control}
                                    rules={{ required: true }}
                                    render={
                                        ({field}) => (
                                            <>
                                                <Label for="capacity" tag="small" className="text-muted">Capacidad</Label>
                                                <Input disabled={edit} name="capacity" id="capacity" type="text"/>
                                            </>
                                        )
                                    }
                                />
                                <Controller
                                    name="type"
                                    control={control}
                                    rules={{ required: true }}
                                    render={
                                        ({field}) => (
                                            <>
                                                <Label for="type" tag="small" className="text-muted">Tipo</Label>
                                                <Input disabled={edit} name="type" id="type" type="text"/>
                                            </>
                                        )
                                    }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Controller
                                    name="description"
                                    control={control}
                                    rules={{ required: true }}
                                    render={
                                        ({field}) => (
                                            <>
                                                <Label for="description" tag="small" className="text-muted">Descripción</Label>
                                                <Input disabled={edit} type="text" name="description" id="description" />
                                            </>
                                        )
                                    }
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button type="button" tag={Link} color="danger rounded-pill me-2" outline to={-1}>
                        Cancelar
                    </Button>
                    <Button type="submit" color="success rounded-pill">
                        Guardar
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default Spaces