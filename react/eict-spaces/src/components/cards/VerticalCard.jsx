import { Card, CardBody, CardImg, CardText } from "reactstrap"
import './VerticalCard.css'
import { Link } from 'react-router-dom'
import CardStat from "./CardStat"

const VerticalCard = ({ title, place, people, pc, image, link }) => {
    return (
        <Link to={link}>
            <Card className="ca ms-4 mt-1 rounded-3 px-0">
                <CardImg src={image} className="card-img-top rounded-3"></CardImg>
                <CardBody>
                    <CardText className="fs-2">{title}</CardText>
                    <CardText className="mt-0">{place}</CardText>
                    <CardStat people={people} pc={pc} />
                </CardBody>
            </Card>
        </Link>
    )
}

export default VerticalCard