import './App.css'
import Dash from './views/dashboard/Dash'
import Bookings from './views/bookings/Bookings'
import Login from "./views/login/Login.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {

  return (
    <Router>
        {/* <Login /> */}
        <Bookings />
    </Router>
  )
}


export default App
