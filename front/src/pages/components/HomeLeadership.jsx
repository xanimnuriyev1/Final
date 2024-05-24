import React from 'react'
import '../home.css'
import Person1 from '../../assets/images/person1.jpg'
import Person2 from '../../assets/images/person2.jpg'
import Person3 from '../../assets/images/person3.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const HomeLeadership = () => {
    return (
        <section>
            <div className='OurLeader'>
                <h1 className='ourleadershiptext'>OUR LEADERSHIP</h1>
                <p className='Lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Dolorem nam eius ducimus, dolor asperiores magni!</p>
            </div>
            <div className='PerSonCarts'>
                <div className='personcart'>
                    <img className='PersonImg' src={Person1} alt="" />
                    <h5 className='Expert'>MINING EXPERT</h5>
                    <p className='Lorem'>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. <br /> Nam enim minima ex! Voluptatum fugiat qui <br /> reprehenderit corrupti accusantium.</p>
                    <div className='IconBoxs'>
                        <div className='IconBox'>
                            <p><FaFacebookF className='IconOur' /></p>
                        </div>
                        <div className='IconBox'>
                            <p><FaTwitter className='IconOur' /></p>
                        </div>
                        <div className='IconBox'>
                            <p><FaInstagram className='IconOur' /></p>
                        </div>
                    </div>
                </div>
                <div className='personcart'>
                    <img className='PersonImg' src={Person2} alt="" />
                    <h5 className='Expert'>PROJECT MANAGER</h5>
                    <p className='Lorem'>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. <br /> Nam enim minima ex! Voluptatum fugiat qui <br /> reprehenderit corrupti accusantium.</p>
                    <div className='IconBoxs'>
                        <div className='IconBox'>
                            <p><FaFacebookF className='IconOur' /></p>
                        </div>
                        <div className='IconBox'>
                            <p><FaTwitter className='IconOur' /></p>
                        </div>
                        <div className='IconBox'>
                            <p><FaInstagram className='IconOur' /></p>
                        </div>
                    </div>
                </div>
                <div className='personcart'>
                    <img className='PersonImg' src={Person3} alt="" />
                    <h5 className='Expert'>ENGINEER</h5>
                    <p className='Lorem'>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. <br /> Nam enim minima ex! Voluptatum fugiat qui <br /> reprehenderit corrupti accusantium.</p>
                    <div className='IconBoxs'>
                        <div className='IconBox'>
                            <p><FaFacebookF className='IconOur' /></p>
                        </div>
                        <div className='IconBox'>
                            <p><FaTwitter className='IconOur' /></p>
                        </div>
                        <div className='IconBox'>
                            <p><FaInstagram className='IconOur' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeLeadership