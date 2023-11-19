import {Link} from "react-router-dom";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";

const Crumbs = ({ crumbs }) => {
    return (
        <Breadcrumb className="p-2" style={{"--bs-breadcrumb-divider": "'>'"}}>
            {crumbs?.map((crumb, index) => {
                return (
                <BreadcrumbItem key={index}>
                    <span>{crumb.name}</span>
                </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
}

export default Crumbs