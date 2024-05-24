import React from 'react'
import '../layout/footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
    return (
        <section className='FootEnd'>
            <div className='FootDown'>
                <div className='Footer'>
                    <div className='FootBox'>
                        <h4 className='Foothead'>ABOUT US</h4>
                        <p className='FootText'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Ab recusandae error <br /> facilis debitis sapiente minus. <br /> Quasi aspernatur porro ipsam corporis?</p>
                    </div>
                    <div className='FootBox'>
                        <h4 className='Foothead'>FEATURES</h4>
                        <div className='FootInfo'>
                            <a href="">About Us</a>
                            <a href="">Testminolias</a>
                            <a href="">Terms of Service</a>
                            <a href="">Privacy</a>
                            <a href="">Contact Us</a>
                        </div>
                    </div>
                    <div className='FootBox'>
                        <h4 className='Foothead'>SOME PARAGRAPH</h4>
                        <p className='FootText'>Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit. Doloremque incidunt quibusdam <br /> itaque accusamus aliquid blanditiis.</p>
                        <h4 className='Foothead SubscribeText'>SUBSCRIBE TO NEWSLETTER</h4>
                        <input type="Email" placeholder='Enter Email' />
                        <button className='SubScribeBtn'>Subscribe</button>
                        <h4 className='Foothead SubscribeText'>FOLLOW US</h4>
                        <div className='FootIcons'>
                            <p><FaFacebookF /></p>
                            <p><FaTwitter /></p>
                            <p><FaInstagram /></p>
                            <p><GrLinkedinOption /></p>
                        </div>
                    </div>
                </div>
                <div className='Line'></div>
                <div className='Colorlib'>
                    <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
                </div>
            </div>
        </section>
    )
}

export default Footer