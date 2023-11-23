import {Button, Col, Modal, ModalFooter, ModalHeader, Offcanvas, OffcanvasBody, OffcanvasHeader, Row} from "reactstrap";
import {Envelope, Funnel, Power, Telephone} from "react-bootstrap-icons";
import './Profile.css'
import InformationCard from "../../components/cards/InformationCard.jsx";
import {useState} from "react";
import Form from "react-bootstrap/Form";




const Profile = ({name="John Doe"}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

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
                    <ModalHeader className="modal-title" toggle={toggleModal} close={()=>null}> <h1>¿Esta seguro de eliminar su cuenta?</h1></ModalHeader>
                    <ModalFooter>
                        <Button color="danger" onClick={toggleModal}>Eliminar</Button>{' '}
                        <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Button
                    color="primary"
                    onClick={toggleOffcanvas}
                >
                    Open
                </Button>

                <Offcanvas isOpen={showOffcanvas} toggle={toggleOffcanvas} direction="end" className='filter'>
                    <OffcanvasHeader toggle={toggleOffcanvas}>
                        <Funnel/> Filtros
                    </OffcanvasHeader>
                    <OffcanvasBody >
                        <Form.Label> Capacidad </Form.Label>
                        <Form.Range />
                        <Form.Label> Equipos de computo </Form.Label>
                        <Form.Range />

                        <Form.Label> Tipo de salon </Form.Label>
                        <Form.Select aria-label="Default select example" className='dropdown'>
                            <option>Seleccione un tipo</option>
                            <option value="1">Tipo 1</option>
                            <option value="2">Tipo 2</option>
                            <option value="3">Tipo 3</option>
                        </Form.Select>

                    </OffcanvasBody>
                </Offcanvas>


            </div>

        </Row>
    );
}

export default Profile;