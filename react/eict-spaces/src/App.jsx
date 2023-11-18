import './App.css'
import Dash from './views/dashboard/Dash'
import Login from "./views/login/Login.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {

  return (
    <Router>
        {/* <Login /> */}
        <Dash />
    </Router>
  )
}

export default App
