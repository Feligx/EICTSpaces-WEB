import { NavLink } from 'react-router-dom'
import {NavItem} from "reactstrap";
import {Icon} from "../../general/Icon.jsx";

const MenuButton = ({ text, to, iconName, iconSize }) => {
    return (
        <NavItem>
            <NavLink to={to} className={
                ({ isActive }) => {
                    return isActive ? 'menu-item nav-link active bg-white text-dark-blue' : 'menu-item nav-link bg-dark-blue text-white'
                }
            }>
                <Icon iconName={iconName} size={iconSize} className={"me-2"} />
                {text}
            </NavLink>
        </NavItem>
    )
}

export default MenuButton