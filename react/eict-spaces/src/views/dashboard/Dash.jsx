import VerticalCard from '../../components/cards/VerticalCard';
import './Dash.css'
import {Button, Col, Container, Form, Input, Label, Row} from "reactstrap";

const Dash = () => {
    return (
        <Row>
            <VerticalCard title="EICT Spaces" place="EICT Building" people="10" pc="10" image="https://picsum.photos/200/300" link="/"/>
        </Row>
    )
}

export default Dash