import { LaptopFill, PeopleFill } from "react-bootstrap-icons"
import { Card, CardBody, CardImg, CardText } from "reactstrap"

const CardStat = ({people, pc}) => {
    return (
        <div className="d-flex">
            <PeopleFill className="ms-2"/>
            <CardText className="ms-1">{people}</CardText>
            <LaptopFill className="ms-4"/>
            <CardText className="ms-1">{pc}</CardText>
        </div>
    )       
}

export default CardStat