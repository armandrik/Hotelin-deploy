export const fetchHotels = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
        const req = await fetch('http://localhost:5000/hotels');
        const hotelsList = await req.json();
        return hotelsList;
    } catch (error) {
        console.log(error)
    }

}

export const fetchHotelDetails = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
        const req = await fetch(`http://localhost:5000/hotels/${id}`);
        const hotelDetail = await req.json();
        return hotelDetail;
    } catch (error) {
        console.log(error)
    }

}