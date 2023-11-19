import React, {useState} from 'react';
import VerticalCard from '../../components/cards/VerticalCard';
import SearchBar from '../../components/search_bar/SearchBar';
import './Dash.css'
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Dash = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <Container fluid className='vh-100 d-flex align-items-start flex-column'>
            <Row className='w-100 mb-5 mt-4'>
                <Col className='search-bar'>
                    <SearchBar />
                </Col>
            </Row>
            <Row className='w-100'>
                <VerticalCard title="EICT Spaces" place="EICT Building" people="10" pc="10" image="https://picsum.photos/200/300" link="/" />
                <VerticalCard title="EICT Spaces" place="EICT Building" people="10" pc="10" image="https://picsum.photos/200/300" link={toggle} />
            </Row>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}

export default Dash