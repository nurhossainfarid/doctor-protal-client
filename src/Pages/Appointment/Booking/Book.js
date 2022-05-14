import React from 'react';

const Book = ({ booking , setTreatment}) => {
    const { name, slots } = booking;
    return (
        <div>
            <div class="hero shadow-lg bg-white mb-16">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='flex flex-col justify-center items-center py-8'>
                        <h1 class="text-2xl font-bold text-secondary">{name}</h1>
                        <p class="py-3">{slots.length ? slots[0] : <span className='text-red-500'>Try another date</span>}</p>
                        <p class="pb-3">{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                        <label for='booking-modal' onClick={() => setTreatment(booking)} class="btn btn-secondary text-white font-bold uppercase" disabled={slots.length === 0}>Booking Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;