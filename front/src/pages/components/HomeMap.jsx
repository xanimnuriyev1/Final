import React, { useContext, useEffect } from 'react'
import '../home.css'
import { ProductContext } from '../../context/ProductContext'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const HomeMap = () => {
    const navigate = useNavigate()
    const { data, setData } = useContext(ProductContext)
    const GetAllData = async () => {
        const res = await axios.get("http://localhost:5000/products")
        console.log(res?.data);
        setData(res?.data)
    }
    useEffect(() => {
        GetAllData()
    }, [])
    return (
        <div className='Carts'>
            {
                data.map((elem) => {
                    return <div className='Cart' key={elem._id}>
                        <img className='MapImg' src={elem.image} alt="" />
                        <p className='Maptitle'>{elem.title}</p>
                        <p className='MapCatagory'>{elem.catagory}</p>
                        <button onClick={() => navigate(`${elem._id}`)} className='DetailBtn'>Detail</button>
                    </div>
                })
            }
        </div>
    )
}

export default HomeMap