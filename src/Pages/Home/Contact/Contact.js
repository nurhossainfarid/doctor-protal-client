import React from 'react';
import { useForm } from 'react-hook-form';
import img from '../../../assets/images/appointment.png'

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     
    return (
        <section className='py-10' style={{
            background: `url(${img})`
        }}>
            <h2 className='text-secondary text-center'>Contact Us</h2>
            <h2 className='text-2xl text-semibold text-white text-center mb-5'>Stay connected with us</h2>
            <form className='grid grid-cols-1 w-80 md:w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input type='email' className='my-3 px-3 py-1 rounded' placeholder='Enter your email' {...register("email")} />
                <input type='text' className='px-3 py-1 rounded' placeholder='Subject' {...register("subject")} />
                <textarea name="" id="" className='my-3 px-3 py-1 rounded' placeholder='Your message' cols="30" rows="10"></textarea>    
                <input className='btn btn-primary bg-gradient-to-r from-secondary to-primary w-1/2 md:w-1/3 mt-2 text-white font-bold mx-auto' type="submit" />
            </form>
        </section>
    );
};

export default Contact;