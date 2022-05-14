import { format, set } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form class="grid grid-cols-1 justify-items-center gap-4" onSubmit={handleSubmit}>
                        <h3 class="font-bold text-lg text-secondary">Booking for : {name}</h3>
                        <input type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" disabled />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Your name" name='name' class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Your email address" class="input input-bordered w-full max-w-xs" />
                        <input type="tel" placeholder="Your contact number" name='phone' class="input input-bordered w-full max-w-xs" />
                        <input type="submit" class="input input-bordered w-full max-w-xs bg-secondary text-xl font-bold text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;