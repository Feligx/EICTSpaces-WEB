import './App.css'
import Dash from './views/dashboard/Dash'
import Login from "./views/login/Login.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Spaces from "./views/spaces/Spaces.jsx";

function App() {

    const router = createBrowserRouter(
        [
            { path: '/', element: <Login /> },
            { path: '/dashboard', element: <Dash /> },
            // { path: '/bookings', element: <Bookings /> },
        ]
    )

  return (
      <>
      {/*<Sidebar />*/}
      <div>
          {/*<Crumbs/>*/}
        <RouterProvider router={router} />
      </div>
      {/*<Footer/>*/}
      </>
  )
}

export default App
