import { Card, CardBody, CardImg, CardText, Button } from "reactstrap"
import './VerticalCard.css'
import { Link, useNavigate } from 'react-router-dom'
import CardStat from "./CardStat"
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { LaptopFill, PeopleFill, PersonFill, GeoAltFill } from "react-bootstrap-icons"
import { useState } from "react";

const VerticalCard = ({ title, place, people, pc, image, a, id="1" }) => {

    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const toggle = () => {
        if (a) {
            navigate(`/dashboard/spaces/${id}`)
        } else {
            setModal(!modal)
        }
    };

    
    return (
        <>
            <Card className="ca rounded-3 px-0 py-0 link btn-link me-4 ms-5" tag={Button} onClick={toggle}>
                <CardImg src={image} className="c_img card-img-top rounded-3"></CardImg>
                <CardBody className="ms-3">
                    <CardText className="fs-3 text-dark-blue">{title}</CardText>
                    <CardText className="mt-0 text-dark-blue">{place}</CardText>
                    <CardStat className="text-dark-blue" people={people} pc={pc} />
                </CardBody>
            </Card>



            <Modal isOpen={modal} toggle={toggle} className="mt-5">
                <ModalHeader toggle={toggle}>
                    {title}
                    <span className="ms-4">
                        <PeopleFill className='me-1' />
                        {people}
                    </span>
                    <span className="ms-3">
                        <LaptopFill className='me-1' />
                        {pc}
                    </span>

                </ModalHeader>
                <ModalBody>
                    <CardImg src={image} className='c_img2 rounded-3 mb-3'></CardImg>
                    <span>
                        Sala de cómputo
                    </span>
                    <span className="ms-3">
                        <GeoAltFill className="me-2" />
                        Edificio Calatrava - Piso 5
                    </span>
                    <br></br>
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" tag={Link} to="/forms">
                        <PersonFill className='me-1' />
                        Individual
                    </Button>{' '}
                    <Button color="secondary" tag={Link} to="/forms">
                        <PeopleFill className='me-1' />
                        Grupal
                    </Button>{' '}
                </ModalFooter>
            </Modal>
        </>
    )
}

export default VerticalCard