import HorizontalCard from '../../components/cards/HorizontalCard'
import { Col } from 'reactstrap'
import {useState} from "react";


const books = [
    {
        nombreSalon: "Bardeen",
        profilePic: "../../../public/fotoperf.webp",
        person: "Camilo Fernandez",
        image: "../../../public/space.jpg",
        reason: "Monitoria de programación",
        userAdmin: true,
        active: true,
        id : 1
    },
    {
        nombreSalon: "Davinci",
        profilePic: "../../../public/fotoperf.webp",
        person: "Juan Jose Caballero",
        image: "../../../public/space.jpg",
        reason: "Monitoria de pensamiento matemático",
        userAdmin: false,
        active: true,
        id : 2
    },
    {
        nombreSalon: "Big Data",
        profilePic: "../../../public/fotoperf.webp",
        person: "Felipe Martinez",
        image: "../../../public/space.jpg",
        reason: "Exposición proyecto Carrito con VR para la empresa RLV2",
        userAdmin: true,
        active: true,
        id : 3
    },
    {
        nombreSalon: "Big Data",
        profilePic: "../../../public/fotoperf.webp",
        person: "Daniel Leyva",
        image: "../../../public/space.jpg",
        reason: "Monitoria de Algebra abstracta",
        userAdmin: false,
        active: true,
        id : 4
    }
]

const Bookings = () => {

    const [bookings,setBookings] = useState(books)

    return (
        <Col className='container d-flex flex-column'>
            <h1 className='text-center'>Mis reservas</h1>
            <div className='d-flex flex-column'>
                {bookings.map((book,index) => {
                    if (book.active == false) {
                        return null;
                    }
                    //return booking.active == [true] ? booking : null;
                    return <HorizontalCard nombreSalon = {book.nombreSalon}
                    profilePic = {book.profilePic}
                    person = {book.person}
                    image = {book.image}
                    reason = {book.reason}
                    userAdmin = {book.userAdmin}
                    active= {book.active}
                    id = {book.id}
                    key = {index}
                    setBookings = {setBookings}
                     />
                })}
            </div>
        </Col>
    )
}

export default Bookings