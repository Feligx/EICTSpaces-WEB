import {Button, Col, Modal, ModalFooter, ModalHeader, Offcanvas, OffcanvasBody, OffcanvasHeader, Row} from "reactstrap";
import {Envelope, Funnel, Power, Telephone} from "react-bootstrap-icons";
import './Profile.css'
import InformationCard from "../../components/cards/InformationCard.jsx";
import {useState} from "react";
import { Link } from "react-router-dom";



const Profile = ({name="John Doe"}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    return (
        <Row className="d-flex align-items-start vh-100 w-100 align-content-between">
            <div className="mt-5">
                <div className="profile-avatar d-flex justify-content-center">
                    <img src="https://picsum.photos/200/300" alt="avatar"/>
                </div>
                <div className="profile-text d-flex justify-content-center">
                    {name}
                </div>

                <Row>
                    <Col>
                        <InformationCard icon={<Envelope/>} info="Correo electronico" value="john.doe@urosario.edu.co"/>
                    </Col>
                    <Col>
                        <InformationCard icon={<Telephone/>} info="Número Telefónico" value="1234567890"/>
                    </Col>
                </Row>
            </div>
            <div className="d-flex mb-5">
                <Button color="danger" className="rounded-pill mt-5 align-self-end" onClick={toggleModal}>
                <span className="fs-5 me-3">
                    <Power/>
                    Borrar cuenta
                </span>
                </Button>
                <Modal isOpen={modal} toggle={toggleModal}>
                    <ModalHeader className="modal-title" toggle={toggleModal} tag="h1"> ¿Esta seguro de eliminar su cuenta?</ModalHeader>
                    <ModalFooter>
                        <Button color="danger" tag={Link} to="/">Eliminar</Button>{' '}
                        <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
                    </ModalFooter>
                </Modal>


            </div>

        </Row>
    );
}

export default Profile;