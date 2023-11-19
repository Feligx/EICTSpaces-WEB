import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row,Container } from "reactstrap"
import './HorizontalCard.css'
import { Link } from 'react-router-dom'
import CardStat from "./CardStat"
//el link envia a la modal
const HorizontalCard = ({ nombreSalon, profilePic, person, image, linkModal, reason }) => {
    return (
        <Card className="card mb-3">    
            <Link to={linkModal}> 
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
            </Link>
        </Card>
    )
}

export default HorizontalCard

