import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Home/Shared/Loading';
import Book from './Book';
import BookingModal from './BookingModal';

const Booking = ({ date }) => {
    // const [booking, setBooking] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatData = format(date, 'PP')

    const { isLoading, refetch, data: booking } = useQuery(['available', formatData], () =>
    fetch(`http://localhost:5000/available?date=${formatData}`)
    .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatData}`)
    //         .then(res => res.json())
    //         .then(data => setBooking(data))
    // }, []);

    return (
        <div className='mt-32'>
            <h1 className='text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    booking.map(book => <Book booking={book} key={book._id} setTreatment={setTreatment}></Book>)
                }
            </div>
            <div>
                {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
            </div>
        </div>
    );
};

export default Booking;