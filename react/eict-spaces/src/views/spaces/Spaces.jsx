import './Spaces.css'
import react_logo from '../../assets/react.svg'
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Input, InputGroup, Label, Row, Form} from "reactstrap";
import {CloudArrowUpFill} from "react-bootstrap-icons";
import {useRef, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

const Spaces = ({edit = false}) => {
    const fileRef = useRef()
    const navigate = useNavigate()
    const [filePreview, setFilePreview] = useState()

    const handleFileClick = () => {
        fileRef.current?.click();
    }

    function showSuccess() {
        MySwal.fire({
            title: "Espacio guardado",
            text: "",
            icon: "success"
        })
    }

    const { 
        handleSubmit, 
        control,
        reset,
        watch,
        formState: {errors},
        getValues
    } = useForm({
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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            setFilePreview(reader.result);
          };
    
          reader.readAsDataURL(file);
        }
    }

    const onSubmit = (data) => {
        console.log(data)
        showSuccess()
        navigate("/dashboard")
    }

    useEffect(() => {
        if (!!!edit) {
            console.log("should leave form empty")
            reset({
                "file": "",
                "space_name": "",
                "devices": "",
                "location": "",
                "area": "",
                "capacity": "",
                "type": "",
                "description": ""
            })
        }
    }, [])

    watch((data, {name}) => {
        const {
            file: {value}
        } = data

    
        if (value) {
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setFilePreview(reader.result);
            };
    
            reader.readAsDataURL(value);
        }
    })

    console.log(errors)

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {edit ? 'Editar espacio' : 'Nuevo espacio'}
                </CardTitle>
            </CardHeader>
            <CardBody tag={Form} id='space-form' onSubmit={handleSubmit(onSubmit)}>
                <Row className="my-4">
                    <Col md="3" className="my-2 my-lg-0 ">
                        <Controller
                            name="file"
                            control={control}
                            rules={{ required: true }}
                            render={({field})=> (
                                <InputGroup onClick={handleFileClick} className={`${!!errors?.file ? 'invalid border border-warning' : ''} rounded bg-light h-100 d-flex justify-content-center align-items-center`}>
                                    <Input 
                                        disabled={edit} 
                                        type="file" 
                                        name="file" 
                                        id="file" 
                                        className="d-none" 
                                        innerRef={(ref) => {
                                            field.ref(ref)
                                            fileRef.current = ref
                                        }}
                                        onChange={
                                            (e) => {
                                                handleFileChange(e)
                                                field.onChange(e)
                                            }
                                        } 
                                        invalid={!!errors?.file}
                                        {...field}
                                    />
                                    {filePreview ? <img src={filePreview}/> : <CloudArrowUpFill className="text-muted" size="128"/> }
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
                                                <Input disabled={edit} name="space_name" id="space_name" type="text" invalid={!!errors?.space_name} {...field} />
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
                                                <Input disabled={edit} name="devices" id="devices" type="text" invalid={!!errors?.devices} {...field}/>
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
                                                <Input disabled={edit} name="location" id="location" type="text" invalid={!!errors?.location} {...field}/>
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
                                                <Input disabled={edit} name="area" id="area" type="text" invalid={!!errors?.area} {...field}/>
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
                                                <Input disabled={edit} name="capacity" id="capacity" type="text" invalid={!!errors?.capacity} {...field}/>
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
                                                <Input disabled={edit} name="type" id="type" type="text" invalid={!!errors?.type} {...field}/>
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
                                                <Input disabled={edit} type="text" name="description" id="description" invalid={!!errors?.description} {...field}/>
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
                    <Button type="submit" form='space-form' color="success rounded-pill" onClick={handleSubmit(onSubmit)}>
                        Guardar
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default Spaces
