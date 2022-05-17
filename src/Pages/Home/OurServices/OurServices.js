import React from 'react';
import Services from './Services';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import img from '../../../assets/images/treatment.png'

const OurServices = () => {
    return (
        <div className='mt-24 px-10'>
            <h4 className='uppercase text-secondary text-center font-bold'>Our Services</h4>
            <h1 className='text-2xl text-center'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Services cardTitle='Fluoride Treatment' img={fluoride}></Services>
                <Services cardTitle='cavity Treatment' img={cavity}></Services>
                <Services cardTitle='Whitening Treatment' img={whitening}></Services>
            </div>
            <div className="hero min-h-screen my-16 md:my-32 bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='md:w-1/2' src={img} />
                    <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;