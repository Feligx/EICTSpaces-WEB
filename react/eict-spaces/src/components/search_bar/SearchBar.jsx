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

const SearchBar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

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
                <Button color="primary" className="bton mx-1">
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
                            <Input type="range" id="capacidad" min="0" max="27" step="1" list="values"/>
                            <datalist className="d-flex justify-content-between w-100" id="values">
                                <option value="0" label="0" />
                                <option className="text-end" value="27" label="27" />
                            </datalist>

                        </FormGroup>

                        <FormGroup>
                            <Label for="equipos">Equipos de computo</Label>
                            <Input type="range" id="equipos" min="0" max="27" step="1" list="values-" />
                            <datalist className="d-flex justify-content-between w-100" id="values">
                                <option value="0" label="0" />
                                <option className="text-end" value="27" label="27" />
                            </datalist>
                        </FormGroup>

                        <FormGroup>
                            <Label for="tipo">Tipo de espacio</Label>
                            <Input type="select" name="select" id="tipo">
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