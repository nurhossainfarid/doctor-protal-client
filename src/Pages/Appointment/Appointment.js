import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Banner from './AppointmentBanner/Banner';
import Booking from './Booking/Booking';

const Appointment = () => {
    const [date,setDate] = useState(new Date())
    return (
        <div>
            <Banner date={date} setDate={setDate}></Banner>
            <Booking date={date}></Booking>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;