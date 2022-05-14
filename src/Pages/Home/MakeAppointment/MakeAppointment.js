import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <div className='md:flex justify-center items-center p-10 md:py-0' style={{
            background: `url(${appointment})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img src={doctor} className="mt-[-100px]" alt="" />
            </div>
            <div className='flex-1'>
                <h4 className='text-secondary'>Appointment</h4>
                <h2 className='text-white text-2xl'>Make an appointment Today</h2>
                <p className='text-gray-100 my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className='btn font-bold uppercase text-white btn-primary bg-gradient-to-r from-secondary to-primary'>Get Started</button>
            </div>
        </div>
    );
};

export default MakeAppointment;