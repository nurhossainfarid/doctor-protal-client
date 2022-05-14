import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import OurServices from './OurServices/OurServices';
import bg from '../../assets/images/bg.png'
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <section style={{
                background: `url(${bg})`
            }}>
                <Banner></Banner>
                <Info></Info>
            </section>
            <OurServices></OurServices>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;