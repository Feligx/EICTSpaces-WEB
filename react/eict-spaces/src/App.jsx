import './App.css'
import Dash from './views/dashboard/Dash'
import Login from "./views/login/Login.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Spaces from "./views/spaces/Spaces.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import {Col, Container, Row} from "reactstrap";
import Crumbs from "./components/layout/breadcrumbs/Crumbs.jsx";
import Menu from "./components/layout/menu/Menu.jsx";


const routes = [
    { path: '/', element: <Login /> },
    { path: '/dashboard', element: <Dash /> },
    { path: '/spaces', element: <Spaces />}
    // { path: '/bookings', element: <Bookings /> },
]
function App() {

    const router = createBrowserRouter(
        routes?.map((route) => {
            return { ...route, element: <>
                    <Crumbs crumbs={[{name: "Dashboard"}, {name: "Dashboard2"}]} />
                    <Container fluid className="position-relative content">
                        {route.element}
                    </Container>
                </> }
        })
    )

  return (
      <Container fluid>
          <Row>
            <Menu />
            <Col className="p-0 vh-100 overflow-scroll">
                <RouterProvider router={router} />
                <Footer />
            </Col>
          </Row>
      </Container>
  )
}

export default App
