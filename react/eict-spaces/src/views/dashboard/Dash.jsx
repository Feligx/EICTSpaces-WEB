import React, { useState } from 'react';
import VerticalCard from '../../components/cards/VerticalCard';
import SearchBar from '../../components/search_bar/SearchBar';
import './Dash.css'
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { LaptopFill, PeopleFill, PersonFill } from "react-bootstrap-icons"

const Dash = () => {
    return (
        <Container fluid className='vh-100 d-flex align-items-start flex-column'>
            <Row className='w-100 mb-5 mt-4'>
                <Col className='search-bar'>
                    <SearchBar />
                </Col>
            </Row>
            <Row className='w-100'>
                <VerticalCard title="EICT Spaces" place="EICT Building" people="10" pc="10" image="https://picsum.photos/200/300" />
                <VerticalCard title="EICT Spaces" place="EICT Building" people="10" pc="10" image="https://picsum.photos/200/300" />
            </Row>

        </Container>
    )
}

export default Dash