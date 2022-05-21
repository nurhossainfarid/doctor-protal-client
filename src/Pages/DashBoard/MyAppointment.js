import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointment] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
            setAppointment(data)
        })
    }, [user])
    return (
        <div>
            <h2>My appointment : {appointments.length}</h2>
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Day</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            appointments?.map((appointment, index) => <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{appointment.patientName}</td>
                                    <td>{appointment.treatment}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.slot}</td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default MyAppointment;