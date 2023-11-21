import HorizontalCard from '../../components/cards/HorizontalCard'
import { Col } from 'reactstrap'

const Bookings = () => {
    let bookings = [];
    let booking1 = [<HorizontalCard nombreSalon = "nombreSalon"
    profilePic = "../../../public/fotoperf.webp"
    person = "Camilo F"
    image = "../../../public/space.jpg"
    reason = "para ver bochi" 
    userAdmin = {false}
    active= {true} />];

    let booking2 = [<HorizontalCard
        nombreSalon = "nombreSalon"
        profilePic = "../../../public/fotoperf.webp"
        person = "Camilo F"
        image = "../../../public/space.jpg"
        reason = "para ver bochi" 
        userAdmin = {true}
        active= {true}
    />];
    let booking3 = [<HorizontalCard
        nombreSalon = "nombreSalon"
        profilePic = "../../../public/fotoperf.webp"
        person = "Camilo F"
        image = "../../../public/space.jpg"
        reason = "para ver bochi" 
        userAdmin = {true}
        active= {true} />];

    bookings = [booking1, booking2, booking3];

    return (
        <Col className='container d-flex flex-column'>
            <h1 className='text-center'>Mis reservas</h1>
            <div className='d-flex flex-column'>
                {bookings.map((booking) => {
                    //return booking.active == [true] ? booking : null;
                    if (booking.active) {
                        return booking;
                    } else {
                        return null;
                    }
                })}
            </div>
        </Col>
    )
}

export default Bookings