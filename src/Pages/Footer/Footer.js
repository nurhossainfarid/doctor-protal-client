import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <section className='py-10' style={{
            backgroundImage: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <footer className="footer py-10 pt-28 px-20">
                <div>
                    <span className="footer-title uppercase text-xl">Services</span> 
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div> 
                <div>
                    <span className="footer-title uppercase text-xl">ORAL Health</span> 
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div> 
                <div>
                    <span className="footer-title uppercase text-xl">our address</span> 
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </footer>
            <p className="text-center">Copyright 2022 All Rights Reserved</p>
        </section>
    );
};

export default Footer;