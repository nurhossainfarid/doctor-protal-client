import React from 'react';

const Book = ({ booking , setTreatment}) => {
    const { name, slots } = booking;
    return (
        <div>
            <div className="hero shadow-lg bg-white mb-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='flex flex-col justify-center items-center py-8'>
                        <h1 className="text-2xl font-bold text-secondary">{name}</h1>
                        <p className="py-3">{slots.length ? slots[0] : <span className='text-red-500'>Try another date</span>}</p>
                        <p className="pb-3">{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                        <label for='booking-modal' onClick={() => setTreatment(booking)} className="btn btn-secondary text-white font-bold uppercase" disabled={slots.length === 0}>Booking Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;