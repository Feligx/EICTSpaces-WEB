import HorizontalCard from '../../components/cards/HorizontalCard'

const Bookings = () => {
    return (
        <div className="container">
            <HorizontalCard  
                nombreSalon = "nombreSalon"
                profilePic = "../../../public/fotoperf.webp"
                person = "Camilo F"
                image = "../../../public/space.jpg"
                linkModal=""
                reason = "para ver bochi" 
            />
        </div>
    )
}

export default Bookings