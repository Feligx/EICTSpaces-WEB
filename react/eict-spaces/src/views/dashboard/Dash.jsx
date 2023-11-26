import React, { useState } from 'react';
import VerticalCard from '../../components/cards/VerticalCard';
import SearchBar from '../../components/search_bar/SearchBar';
import './Dash.css'
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { LaptopFill, PeopleFill, PersonFill } from "react-bootstrap-icons"

const defaultSpaces = [
    {
        title: "EICT Spaces",
        place: "EICT Building",
        people: "10",
        pc: "10",
        image: "https://picsum.photos/200/300",
        a: true
    },
    {
        title: "EICT Spaces",
        place: "EICT Building",
        people: "10",
        pc: "10",
        image: "https://picsum.photos/200/300",
        a: false
    },
    {
        title: "EICT Spaces",
        place: "EICT Building",
        people: "10",
        pc: "10",
        image: "https://picsum.photos/200/300",
        a: true
    },
    {
        title: "EICT Spaces",
        place: "EICT Building",
        people: "10",
        pc: "10",
        image: "https://picsum.photos/200/300",
        a: false
    },
    {
        title: "EICT Spaces",
        place: "EICT Building",
        people: "10",
        pc: "10",
        image: "https://picsum.photos/200/300",
        a: true
    },
    {
        title: "EICT Spaces",
        place: "EICT Building",
        people: "10",
        pc: "10",
        image: "https://picsum.photos/200/300",
        a: false
    },
    {
        title: "EICT Spaces",
        place: "EICT Building",
        people: "10",
        pc: "10",
        image: "https://picsum.photos/200/300",
        a: true
    },
    {
        title: "EICT Spaces",
        place: "EICT Building",
        people: "10",
        pc: "10",
        image: "https://picsum.photos/200/300",
        a: false
    },
]
const Dash = () => {
    const [spaces, setSpaces] = useState(defaultSpaces)
    return (
        <Container fluid className='vh-100 d-flex align-items-start flex-column'>
            <Row className='w-100 mb-5 mt-4'>
                <Col className='search-bar'>
                    <SearchBar setSpaces={setSpaces} defaultSpaces={defaultSpaces} />
                </Col>
            </Row>
            <Row className='w-100'>
                {
                    spaces.map((space, index) => {
                        return (
                            <VerticalCard key={index} title={space.title} place={space.place} people={space.people} pc={space.pc} image={space.image} a={space.a} />
                        )
                    })
                }
                {/*<VerticalCard title="EICT Spaces" place="EICT Building" people="10" pc="10" image="https://picsum.photos/200/300" a={true} />*/}
                {/*<VerticalCard title="EICT Spaces" place="EICT Building" people="10" pc="10" image="https://picsum.photos/200/300" a={false}/>*/}
            </Row>

        </Container>
    )
}

export default Dash