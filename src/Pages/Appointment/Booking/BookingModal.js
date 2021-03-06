import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formatDate = format(date, 'PP');

    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);

        const booking = {
            treatmentID: _id,
            treatment: name,
            date: formatDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.success){
                toast(`Appointment is set, ${formatDate} at ${slot}`)
            }
            else{
                toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            refetch();
            setTreatment(null);

        })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className="grid grid-cols-1 justify-items-center gap-4" onSubmit={handleSubmit}>
                        <h3 className="font-bold text-lg text-secondary">Booking for : {name}</h3>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" disabled />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user?.displayName} disabled name='name' className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' className="input input-bordered w-full max-w-xs" value={user?.email} disabled />
                        <input type="tel" placeholder="Your contact number" name='phone' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className="input input-bordered w-full max-w-xs bg-secondary text-xl font-bold text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;