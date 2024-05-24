import React from 'react'
import '../home.css'
const HomeFirst = () => {
    return (
        <section>
            <div className='HomeFirst'>
                <div className='BoxGray'>
                    <div className='BoxBorder'>
                        <h2 className='Rescue'>RESCUE AN ORPHAN</h2>
                        <p className='BoxText'>Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam</p>
                    </div>
                </div>
                <div className='BoxGray orangeBox'>
                    <div className='BoxBorder'>
                        <h2 className='Rescue'>FEED THE HUNGRY</h2>
                        <p className='BoxText'>Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam</p>
                    </div>
                </div>
                <div className='BoxGray RedBox'>
                    <div className='BoxBorder'>
                        <h2 className='Rescue'>FREE EDUCATION</h2>
                        <p className='BoxText'>Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut praesentium magnam</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFirst