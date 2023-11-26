import { Link } from 'react-router-dom'
import './SearchBar.css'
import {
    Input,
    Button,
    Form,
    FormGroup,
    InputGroup,
    Row,
    Col,
    OffcanvasHeader,
    OffcanvasBody,
    Offcanvas, Label, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle
} from 'reactstrap'
import { Search, Funnel, PlusLg } from 'react-bootstrap-icons'
import {useState} from "react";

const SearchBar = ({setSpaces, defaultSpaces}) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

    const [currentCap, setCurrentCap] = useState(0);
    const [currentEquip, setCurrentEquip] = useState(0);
    const [currentType, setCurrentType] = useState("Tipo de espacio");

    // console.log(currentCap)
    // console.log(currentEquip)
    // console.log(currentType)

    //estoy esperando 


    return (
        <Row className='main_r'>
            <Col md='6'>
                <InputGroup>
                    <Input placeholder="Buscar" />
                    <Button color="primary" className='bton'>
                        <Search />
                    </Button>
                </InputGroup>
            </Col>
            <Col className='btns ms-auto' md='6'>
                <Button color="primary" className="bton mx-1" onClick={toggleOffcanvas}>
                    <Funnel />
                </Button>
                <Button color="primary" className="bton mx-1" tag={Link} to="/dashboard/spaces/create">
                    <PlusLg />
                </Button>
            </Col>
            <Offcanvas isOpen={showOffcanvas} toggle={toggleOffcanvas} direction="end" className='filter'>
                <OffcanvasHeader toggle={toggleOffcanvas}>
                    <Funnel/> Filtros
                </OffcanvasHeader>
                <OffcanvasBody >
                    <Form>
                        <FormGroup>
                            <Label for="capacidad">Capacidad</Label>
                            <Input type="number" id="equipos" min="0" max="27" step="1" defaultValue="0" onChange={(e) => {
                                // setCurrentCap(e.target.value)+
                                setSpaces((spaces) => {
                                    return defaultSpaces.filter((space) => {
                                        return space.people >= parseInt(e.target.value)
                                    })
                                })
                                e.preventDefault()
                            }} />

                        </FormGroup>

                        <FormGroup>
                            <Label for="equipos">Equipos de computo</Label>
                            <Input type="number" id="equipos" min="0" max="27" step="1" defaultValue="0" onChange={(e) => {

                                setSpaces((spaces) => {
                                    
                                    return defaultSpaces.filter((space) => {
                                        return space.pc >= parseInt(e.target.value)
                                    })
                                })
                                e.preventDefault()
                            } }/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="tipo">Tipo de espacio</Label>
                            <Input type="select" name="select" id="tipo" onChange={(e) => {
                                setSpaces((spaces) => {
                                    return defaultSpaces.filter((space) => {
                                        return space.type === e.target.value
                                    })
                                })
                                e.preventDefault()
                            } }>
                                <option>Docencia</option>
                                <option>Experimentación</option>
                                <option>Investigación</option>
                            </Input>
                        </FormGroup>

                    </Form>
                </OffcanvasBody>
            </Offcanvas>
        </Row>
    )
}

export default SearchBar