import './App.css'
import Dash from './views/dashboard/Dash'
import Bookings from './views/bookings/Bookings'
import Login from "./views/login/Login.jsx"
import Forms from "./views/form/Forms.jsx"
import Profile from "./views/profile/Profile.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Spaces from "./views/spaces/Spaces.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import {Col, Container, Row} from "reactstrap";
import Crumbs from "./components/layout/breadcrumbs/Crumbs.jsx";
import Menu from "./components/layout/menu/Menu.jsx";


const routes = [
    {
        path: '/',
        element: <Login />,
        icon: 'HouseFill',
        name: 'Login',
        layout: 'blank'
    },
    {
        path: '/forms',
        element: <Forms />,
        name: 'Formulario',
        layout: 'default',
        hidden: true
    },
    {
        path: '/profile',
        element: <Profile />,
        name: 'Perfil',
        icon: 'name',
        layout: 'default',
        hidden: true,
    },
    {
        path: '/dashboard',
        element: <Dash />, icon: 'HouseFill',
        name: 'Dashboard',
        layout: 'default'
    },
    {
        path: '/dashboard/spaces/create',
        element: <Spaces edit={false} />,
        name: 'New Space',
        layout: 'default',
        hidden: true
    },
    {
        path: '/dashboard/spaces/:id',
        element: <Spaces edit />,
        name: 'Edit Space',
        layout: 'default',
        hidden: true
    },
    {
        path: '/bookings',
        element: <Bookings />,
        name: 'Bookings',
        layout: 'default',
        icon: 'ClockFill'
    }
]
function App() {

    const router = createBrowserRouter(
        routes?.map((r) => {
            const errorElement = <h1>404</h1>

            const route = {
                ...r,
                errorElement
            }

            if (route.layout === 'blank') {
                return route
            }
            return { ...route, element: <>
                    <Menu items={routes}/>
                    <Col xs="12" lg="10" className="p-0 vh-100 overflow-scroll">
                        <Crumbs crumbs={[{name: "Dashboard"}, {name: "Dashboard2"}]} />
                        <Container fluid className="position-relative content pt-0">
                            {route.element}
                        </Container>
                        <Footer />
                    </Col>
                </>
            }
        })
    )

  return (
      <Container fluid>
          <Row>
                <RouterProvider router={router} />
          </Row>
      </Container>
  )
}


export default App
