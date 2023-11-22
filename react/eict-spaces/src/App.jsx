import './App.css'
import Dash from './views/dashboard/Dash'
import Login from "./views/login/Login.jsx"
import Forms from './views/form/Forms'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

    const router = createBrowserRouter(
        [
            { path: '/forms', element: <Forms /> },
            { path: '/', element: <Dash /> },
            // { path: '/bookings', element: <Bookings /> },
        ])
    return (
        <>
            {/* <Login /> */}
            <RouterProvider router={router}>
            </RouterProvider>
        </>
    )
}

export default App
