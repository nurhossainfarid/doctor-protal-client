import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import avatar from '../../../assets/images/people1.png';
import avatar2 from '../../../assets/images/people2.png';
import avatar3 from '../../../assets/images/people3.png';

const Testimonial = () => {
    return (
        <section className='px-12 mt-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-secondary'>Testimonial</h2>
                    <h4 className='text-2xl font-bold'>What Our Patients Says</h4>
                </div>
                <div>
                    <img className='w-28 md:w-40' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-16'>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className='flex items-center gap-3'>
                            <div class="avatar">
                                <div class="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                    <img className='' src={avatar} />
                                </div>
                            </div>
                            <aside className='flex flex-col justify-start items-start'>
                                <h1 className='text-xl font-bold'>Herry Wilson</h1>
                                <p>California</p>
                            </aside>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className='flex items-center gap-3'>
                            <div class="avatar">
                                <div class="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                    <img src={avatar2} />
                                </div>
                            </div>
                            <aside className='flex flex-col justify-start items-start'>
                                <h1 className='text-xl font-bold'>Robina khan</h1>
                                <p>Canada</p>
                            </aside>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className='flex mt-5 items-center gap-3'>
                            <div class="avatar">
                                <div class="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                    <img src={avatar3} />
                                </div>
                            </div>
                            <aside className='flex flex-col justify-start items-start'>
                                <h1 className='text-xl font-bold'>Jinaja kukala</h1>
                                <p>Japan</p>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;