import {Card, CardBody} from "reactstrap";
import './InformationCard.css'

const InformationCard = ({ icon, info, value }) => {
    return (
        <Card className="ca-i">
            <CardBody>
                <div className="d-flex align-items-center">
                    {icon}
                    <span className="info-card-info">
                        {info}
                    </span>
                </div>
                <div className="d-flex">
                    <span className="info-card-value">
                        {value}
                    </span>
                </div>
            </CardBody>
        </Card>
    )
}

export default InformationCard