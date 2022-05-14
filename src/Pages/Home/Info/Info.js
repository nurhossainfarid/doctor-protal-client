import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import location from '../../../assets/icons/marker.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10'>
            <InfoCard cardTitle='Opening Hours' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard cardTitle='Our Location' bgClass="bg-slate-600" img={location}></InfoCard>
            <InfoCard cardTitle='Contact Us' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;