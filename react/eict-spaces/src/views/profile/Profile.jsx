import {Button, Col, Row} from "reactstrap";
import {Envelope, Power, Telephone} from "react-bootstrap-icons";
import './Profile.css'
import InformationCard from "../../components/cards/InformationCard.jsx";
const Profile = ({name="John Doe"}) => {
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
                <Button color="danger" className="rounded-pill mt-5 align-self-end">
                <span className="fs-5 me-3">
                    <Power/>
                    Borrar cuenta
                </span>
                </Button>
            </div>
        </Row>
    );
}

export default Profile;