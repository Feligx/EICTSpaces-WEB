import { Link } from 'react-router-dom'
import './SearchBar.css'
import { Input, Button, Form, FormGroup, InputGroup, Row, Col } from 'reactstrap'
import { Search, Funnel, PlusLg } from 'react-bootstrap-icons'

const SearchBar = () => {
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
                <Button color="primary" className="bton mx-1">
                    <Funnel />
                </Button>
                <Button color="primary" className="bton mx-1">
                    <PlusLg />
                </Button>
            </Col>
        </Row>
    )
}

export default SearchBar