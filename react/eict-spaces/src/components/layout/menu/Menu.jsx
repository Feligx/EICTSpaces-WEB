import {Col} from "reactstrap";
import ur_logo from '../../../assets/ur_logo.svg'
import './Menu.css'

const Menu = () => {
    return (
        <Col md="2" className="bg-primary position-sticky">
            <div className="text-white fw-bold">
                <img src={ur_logo} alt="ur_logo" className="brand-logo" />
                <span>Spaces</span>
            </div>
        </Col>
    )
}

export default Menu