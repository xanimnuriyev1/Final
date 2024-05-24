import React from 'react'
import '../home.css'
import Hero1No from '../../assets/images/hero1no.jpg'
import Hero2No from '../../assets/images/hero2no.jpg'

const HomeEnd = () => {
    return (
        <section>
            <div className='OurLeader'>
                <h1 className='ourleadershiptext'>OUR BLOG</h1>
                <p className='Lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Dolorem nam eius ducimus, dolor asperiores magni!</p>
            </div>
            <div className='HeroCart'>
                <div className='HeroCarts'>
                    <img className='Hero1No' src={Hero1No} alt="" />
                    <h2 className='Company'>How to Invest In Investing Company</h2>
                    <p className='Date'>JANUARY 18, 2019 BY <span>JAMES COOPER</span></p>
                    <div className='Hero1Lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sit quasi adipisci sint reprehenderit ducimus dicta?</div>
                </div>
                <div className='HeroCarts'>
                    <img className='Hero1No' src={Hero2No} alt="" />
                    <h2 className='Company'>How to Invest In Investing Company</h2>
                    <p className='Date'>JANUARY 18, 2019 BY <span>JAMES COOPER</span></p>
                    <div className='Hero1Lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sit quasi adipisci sint reprehenderit ducimus dicta?</div>
                </div>
            </div>
        </section>
    )
}

export default HomeEnd