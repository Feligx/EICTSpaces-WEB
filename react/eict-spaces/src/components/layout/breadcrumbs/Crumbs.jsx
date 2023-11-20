import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import './Crumbs.css'
import {Link} from "react-router-dom";

const Crumbs = ({ crumbs }) => {
    return (
        <Breadcrumb className="p-2 crumbs d-flex align-items-center" style={{"--bs-breadcrumb-divider": "'>'"}} listClassName="m-0">
            {crumbs?.map((crumb, index) => {
                return (
                <BreadcrumbItem key={index}>
                    <Link to="#">{crumb.name}</Link>
                </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
}

export default Crumbs