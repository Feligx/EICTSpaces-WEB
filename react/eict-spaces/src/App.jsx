import './App.css'
import Dash from './views/dashboard/Dash'
import Login from "./views/login/Login.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Profile from "./views/profile/Profile.jsx";
// import Spaces from "./views/spaces/Spaces.jsx";

function App() {

    const router = createBrowserRouter(
        [
            { path: '/', element: <Login /> },
            { path: '/dashboard', element: <Dash /> },
            { path: '/profile', element: <Profile /> },
            // { path: '/bookings', element: <Bookings /> },
        ]
    )

  return (
      <>
      {/*<Sidebar />*/}
          {/*<Crumbs/>*/}
        <RouterProvider router={router} />
      {/*<Footer/>*/}
      </>
  )
}

export default App
