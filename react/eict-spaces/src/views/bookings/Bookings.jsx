import HorizontalCard from '../../components/cards/HorizontalCard'
import { Col } from 'reactstrap'

const Bookings = () => {
    return (
        <Col className='container align-items'>
            <HorizontalCard 
                nombreSalon = "nombreSalon"
                profilePic = "../../../public/fotoperf.webp"
                person = "Camilo F"
                image = "../../../public/space.jpg"
                reason = "para ver bochi" 
                userAdmin = {false}
            />
            <HorizontalCard
                nombreSalon = "nombreSalon"
                profilePic = "../../../public/fotoperf.webp"
                person = "Camilo F"
                image = "../../../public/space.jpg"
                reason = "para ver bochi" 
                userAdmin = {true}
            />
            <HorizontalCard
                nombreSalon = "nombreSalon"
                profilePic = "../../../public/fotoperf.webp"
                person = "Camilo F"
                image = "../../../public/space.jpg"
                reason = "para ver bochi" 
                userAdmin = {true}
            />
        </Col>
    )
}

export default Bookings