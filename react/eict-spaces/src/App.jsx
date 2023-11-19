import './App.css'
import Dash from './views/dashboard/Dash'
import Login from "./views/login/Login.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Spaces from "./views/spaces/Spaces.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import {Col, Container, Row} from "reactstrap";
import Crumbs from "./components/layout/breadcrumbs/Crumbs.jsx";

function App() {

    const router = createBrowserRouter(
        [
            { path: '/', element: <Login /> },
            { path: '/dashboard', element: <Dash /> },
            { path: '/spaces', element: <Spaces />}
            // { path: '/bookings', element: <Bookings /> },
        ]
    )

  return (
      <Container fluid>
          <Row>
              <Col md="2" className="bg-primary position-sticky">
                  <h1 className="text-white">EICT Spaces</h1>
              </Col>
            <Col className="p-0 vh-100 overflow-scroll">
                <Crumbs crumbs={[{name: "Dashboard"}, {name: "Dashboard2"}]} />
                <Container fluid>
                    <RouterProvider router={router} />
                </Container>
                <Footer />
            </Col>
          </Row>
      </Container>
  )
}

export default App
