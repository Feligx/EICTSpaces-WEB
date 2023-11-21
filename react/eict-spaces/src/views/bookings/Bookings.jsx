import HorizontalCard from '../../components/cards/HorizontalCard'
import { Col } from 'reactstrap'
import {useState} from "react";

const books = [
    {
        nombreSalon: "nombreSalon",
        profilePic: "../../../public/fotoperf.webp",
        person: "Camilo F",
        image: "../../../public/space.jpg",
        reason: "para ver bochi",
        userAdmin: true,
        active: true,
        id : 1
    },
    {
        nombreSalon: "nombreSalon",
        profilePic: "../../../public/fotoperf.webp",
        person: "Camilo F",
        image: "../../../public/space.jpg",
        reason: "para ver bochi",
        userAdmin: false,
        active: true,
        id : 2
    },
    {
        nombreSalon: "nombreSalon",
        profilePic: "../../../public/fotoperf.webp",
        person: "Camilo F",
        image: "../../../public/space.jpg",
        reason: "para ver bochi",
        userAdmin: true,
        active: true,
        id : 1
    },
    {
        nombreSalon: "nombreSalon",
        profilePic: "../../../public/fotoperf.webp",
        person: "Camilo F",
        image: "../../../public/space.jpg",
        reason: "para ver bochi",
        userAdmin: false,
        active: true,
        id : 2
    }
]

const Bookings = () => {

    const [bookings,setBookings] = useState(books)

    return (
        <Col className='container d-flex flex-column'>
            <h1 className='text-center'>Mis reservas</h1>
            <div className='d-flex flex-column'>
                {books.map((book,index) => {
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