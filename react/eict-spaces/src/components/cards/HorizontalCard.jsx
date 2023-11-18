import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap"
import './VerticalCard.css'
import { Link } from 'react-router-dom'
import CardStat from "./CardStat"
//el link envia a la modal
const VerticalCard = ({ nombreSalon, profilePic, person, pc, image, link,reason }) => {
    return (
        <Link to={link}> 
            <Card className="card mb-3 card-first">
                <Card className="row g-0">

                    <Card className="col-2">
                        <CardImg src={profilePic} className="card-img-top rounded-3 foto-perfil"></CardImg>
                    </Card>

                    <Card className="col-6">
                        <CardBody>
                            <CardTitle className="card-title">
                                {nombreSalon}
                                <br>
                                {reason}
                                </br>
                            </CardTitle>
                            <CardText className="mt-0">{person}</CardText>
                            <CardStat people={people} pc={pc} />
                        </CardBody>
                    </Card>

                    <Card className="col-4 foto-lab">
                        <CardImg src={image} className="card-img-top rounded-3"></CardImg>
                    </Card>
                </Card>
            </Card>
        </Link>
    )
}

export default VerticalCard

//<div class="">
            

