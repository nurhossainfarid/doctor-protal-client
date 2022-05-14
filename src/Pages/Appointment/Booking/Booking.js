import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Book from './Book';
import BookingModal from './BookingModal';

const Booking = ({ date }) => {
    const [booking, setBooking] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);

    return (
        <div className='mt-32'>
            <h1 className='text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    booking.map(book => <Book booking={book} key={book._id} setTreatment={setTreatment}></Book>)
                }
            </div>
            <div>
                {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>}
            </div>
        </div>
    );
};

export default Booking;