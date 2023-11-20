import ur_logotype from '../../../assets/ur_logotype.svg'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="w-100 bg-secondary text-white py-2 d-flex align-items-center justify-content-between px-3 mt-auto">
            <small>RLV2©2023</small>
            <img src={ur_logotype} alt="ur_logotype" width="200px"/>
        </footer>
    )
}

export default Footer