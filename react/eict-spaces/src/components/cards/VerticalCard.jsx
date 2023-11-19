import { Card, CardBody, CardImg, CardText, Button } from "reactstrap"
import './VerticalCard.css'
import { Link } from 'react-router-dom'
import CardStat from "./CardStat"

const VerticalCard = ({ title, place, people, pc, image, link }) => {
    return (
        <Button className="link me-4 ms-5" onClick={link}>
            <Card className="ca rounded-3 px-0">
                <CardImg src={image} className="c_img card-img-top rounded-3"></CardImg>
                <CardBody>
                    <CardText className="fs-2">{title}</CardText>
                    <CardText className="mt-0">{place}</CardText>
                    <CardStat people={people} pc={pc} />
                </CardBody>
            </Card>
        </Button>
    )
}

export default VerticalCard