import { Card, Button, CardImg, CardText, CardTitle, Col, Row, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap"
import './HorizontalCard.css'
import {useState} from "react";

const HorizontalCard = ({ nombreSalon, profilePic, person, image, reason, userAdmin }) => {//userAdmin es un booleano que indica si el usuario es admin o no para las modales
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);
    let togs = userAdmin==true ? toggle : toggle2
    return (
        <>
            <Button onClick = {togs}  className="w-100 hori-card no-gutters"> 
                <Card className="card ">   
                        <Row className="row g-0">
                            <Col  className="card-img-top rounded-3 foto-perfil">
                                <img src={profilePic}></img>
                            </Col>
                            <Col className="col-6">
                                <Row>
                                    <CardTitle className="card-title">
                                        {nombreSalon}
                                    </CardTitle>
                                    <CardText className="mt-0">
                                        {reason}
                                    </CardText>                        
                                    <CardText className="mt-0">{person}</CardText>
                                </Row>
                            </Col>
                            <Col className="col-4 foto-lab">
                                <CardImg src={image} className="card-img-top rounded-3"></CardImg>
                            </Col>
                        </Row>
                </Card>
            </Button>
            <div className="">
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        <h4 className="modal-title">
                        Salon Ada Lovelace
                        </h4>
                        <h4 className="modal-title">
                        Proyecto clase de programación
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
                    <Button color="secondary" onClick={toggle} className="btn botonCancelar">
                        Cancelar mi reserva
                    </Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div className="">
                <Modal isOpen={modal2} toggle={toggle2}>
                    <ModalHeader toggle={toggle2}>
                        <h4 className="modal-title">
                        Salon Ada Lovelace
                        </h4>
                        <h4 className="modal-title">
                        Proyecto clase de programación
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
                    <Button color="primary" onClick={toggle2} className="btn botonCancelar">
                        Rechazar
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle2} className="btn btn-outline-success botonAceptar">
                        Aceptar
                    </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default HorizontalCard

