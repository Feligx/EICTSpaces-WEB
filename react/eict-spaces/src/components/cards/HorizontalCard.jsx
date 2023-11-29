import { Card, Button, CardImg, CardText, CardTitle, Col, Row, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap"
import './HorizontalCard.css'
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

const HorizontalCard = ({ nombreSalon, profilePic, person, image, reason, userAdmin, active, id, setBookings}) => {//userAdmin es un booleano que indica si el usuario es admin o no para las modales
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);
    let togs = userAdmin == true ? toggle : toggle2

    function handleActive() {
        setBookings(prevState => prevState.map(booking => {
            if (booking.id == id) {
                booking.active = false;
            }
            return booking;
        }))
    }

    function showSuccess() {
        MySwal.fire({
            title: "Cancelado exitosamente",
            text: "",
            icon: "success"
        })
    }

    function showSuccessTactico() {
        MySwal.fire({
            title: "Rechazo exitoso",
            text: "",
            icon: "success"
        })
    }

    return (
        <>
            <Card className="card d-flex mx-0" tag={Button} onClick={togs}>
                <Row className="row g-0 d-flex w-100">
                    <Col className="card-img-top rounded-3 foto-perfil">
                        <CardImg src={profilePic} className="foto-perfil rounded-3"></CardImg>
                    </Col>
                    <Col className="col-6">
                        <Row>
                            <CardTitle className="card-title">
                                <h2>{nombreSalon}</h2>                                
                            </CardTitle>
                            <CardText className="mt-0">
                                <h3>{reason}</h3>
                            </CardText>
                            <CardText className="mt-0">
                                <h3>{person}</h3>
                            </CardText>
                        </Row>
                    </Col>
                    <Col className="col-4 foto-lab">
                        <CardImg src={image} className="card-img-top rounded-3 rounded float-right foto-lab w-100"></CardImg>
                    </Col>
                </Row>
            </Card>

            <div className="">
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        <h4 className="modal-title">
                            {nombreSalon}
                        </h4>
                        <h4 className="modal-title">
                            {reason}
                        </h4>
                    </ModalHeader>
                    <ModalBody>
                        <h5>
                            Horarios:
                        </h5>
                        <ul>
                            <li>
                                1/1/24, 7:00 am - 9:00 am
                            </li>

                            <li>
                                8/1/24, 7:00 am - 9:00 am
                            </li>
                        </ul>

                        <h6>Pido uso del salon Lovelace con el fin de poder adelantar mi proyecto de la clase de programación de computadores </h6>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={event => {
                            toggle2();
                            handleActive();
                            showSuccess();

                        }} className="btn botonCancelar">
                            Cancelar mi reserva
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div className="">
                <Modal isOpen={modal2} toggle={toggle2}>
                    <ModalHeader toggle={toggle2}>
                        <h4 className="modal-title">
                            {nombreSalon}
                        </h4>
                        <h4 className="modal-title">
                            {reason}
                        </h4>
                    </ModalHeader>
                    <ModalBody>
                        <h5>
                            Horarios:
                        </h5>
                        <ul>
                            <li>
                                1/1/24, 7:00 am - 9:00 am
                            </li>

                            <li>
                                8/1/24, 7:00 am - 9:00 am
                            </li>
                        </ul>
                        <h6>Pido uso del salon Lovelace con el fin de poder adelantar mi proyecto de la clase de programación de computadores </h6>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={event => {
                            toggle2();
                            handleActive();
                            showSuccessTactico();

                        }} className="btn botonCancelar">
                            Rechazar
                        </Button>{' '}
                        <Button color="secondary" onClick={event => {
                            toggle2();
                            handleActive();

                        }} className="btn btn-outline-success botonAceptar">
                            Aceptar
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default HorizontalCard

