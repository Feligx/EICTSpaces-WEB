import {Button, Col, Nav, NavLink, Offcanvas, OffcanvasBody, OffcanvasHeader} from "reactstrap";
import ur_logo from '../../../assets/ur_logo.svg'
import './Menu.css'
import MenuButton from "./MenuButton.jsx";
import Avatar from "../../general/Avatar.jsx";
import {Icon} from "../../general/Icon.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";

const Menu = ({items}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <Col xs="12" lg="2" className="bg-dark-blue position-sticky d-flex flex-column justify-content-between ps-0">
            <div>
                <div className="text-white fw-bold d-flex justify-content-start justify-content-lg-center align-items-center mt-3 mb-3 mb-lg-5">
                    <Button className="d-inline d-lg-none mx-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Icon iconName="List" size={24} />
                    </Button>
                    <div className="d-flex justify-content-center align-items-center">
                        <Col md={2}>
                            <img src={ur_logo} alt="ur_logo" className="brand-logo" />
                        </Col>
                        <h3 className="ms-2 mb-0">Spaces</h3>
                    </div>
                </div>
                <Nav pills vertical className="d-none d-lg-flex">
                    {
                        items?.map((item, index) => {
                                if (item.path !== "/" && !item?.hidden) {
                                    return (
                                        <MenuButton key={index} text={item.name} iconName={item.icon} iconSize={24} to={item.path} />
                                    )
                                }
                            }
                        )
                    }
                </Nav>
            </div>
            <div className="ps-3 d-none d-lg-inline">
                <div className="d-flex text-white">
                    <Avatar initials="JD" />
                    <NavLink tag={Link} to="/profile" className="menu-item ms-1">John Doe</NavLink>
                </div>
                <div>
                    <NavLink tag={Link} to="/" className="menu-item nav-link text-white">
                        <Icon iconName="BoxArrowRight" size={24} className={"me-2"} />
                        Logout
                    </NavLink>
                </div>
            </div>
            <Offcanvas isOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)}>
                <OffcanvasHeader className="bg-dark-blue text-white">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <Button className="d-inline d-lg-none mx-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <Icon iconName="X" size={24} />
                        </Button>
                        <div className="d-flex justify-content-center align-items-center">
                            <Col md={2}>
                                <img src={ur_logo} alt="ur_logo" className="brand-logo" />
                            </Col>
                            <h3 className="ms-2 mb-0">Spaces</h3>
                        </div>
                    </div>
                </OffcanvasHeader>
                <OffcanvasBody className="bg-dark-blue ps-0">
                    <Nav pills vertical className="d-flex flex-column">
                        {
                            items?.map((item, index) => {
                                    if (item.path !== "/") {
                                        return (
                                            <MenuButton key={index} text={item.name} iconName={item.icon} iconSize={24} to={item.path} />
                                        )
                                    }
                                }
                            )
                            }
                    </Nav>
                    <div className="ps-3 d-flex flex-column justify-content-end h-100">
                        <div className="d-flex text-white">
                            <Avatar initials="JD" />
                            <NavLink tag={Link} to="/profile" className="menu-item ms-1">John Doe</NavLink>
                        </div>
                        <div>
                            <NavLink tag={Link} to="/" className="menu-item nav-link text-white">
                                <Icon iconName="BoxArrowRight" size={24} className={"me-2"} />
                                Logout
                            </NavLink>
                        </div>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
        </Col>
    )
}

export default Menu