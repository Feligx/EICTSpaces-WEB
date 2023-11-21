import './Login.css'
import {Button, Col, Container, Form, Input, Label, Row} from "reactstrap";
import logo from "../../assets/ur_logo2.svg"
import {Link} from "react-router-dom";
const Login = () => {
    return (
        <Container fluid>
            <Row>
                <Col md="8" className="d-none d-lg-block login-bg">
                </Col>
                <Col xs="12" lg="4" className="d-flex flex-column align-items-center justify-content-center">
                    <h1>
                        ¡Bienvenido!
                    </h1>
                    <span>
                        Reserva de espacios
                    </span>

                    <img className="my-5 login-logo" src={logo} alt="logo" />

                    <Button tag={Link} to="/dashboard" color="danger" className="rounded-pill">
                        Iniciar sesión con cuenta UR
                    </Button>
                    <Form className="form-check d-flex justify-content-center mt-2">
                        <Input type="checkbox" className="form-check-input" value="" id="terms"/>
                        <Label className="form-check-label ms-2" for="terms">
                            He leido y acepto los <a href="#">términos y condiciones</a>
                        </Label>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login