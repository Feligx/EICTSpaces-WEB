import { LaptopFill, PeopleFill } from "react-bootstrap-icons"
import { Card, CardBody, CardImg, CardText } from "reactstrap"

const CardStat = ({people, pc}) => {
    return (
        <div className="d-flex justify-content-center">
            <PeopleFill className="ms-2 mb-0 mt-1"/>
            <CardText className="ms-1 mb-0">{people}</CardText>
            <LaptopFill className="ms-4 mb-0 mt-1"/>
            <CardText className="ms-1 mb-0">{pc}</CardText>
        </div>
    )       
}

export default CardStat