import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import '../pages/home.css'
import axios from 'axios'

const Detail = () => {
    const { detailId } = useParams()
    const { product, setProduct } = useContext(ProductContext)
    const GetAllData = async () => {
        const res = await axios.get("http://localhost:5000/products/" + detailId)
        console.log(res?.data);
        setProduct(res?.data)
    }
    useEffect(() => {
        GetAllData()
    }, [])
    return (
        <div className='DetailCarts'>
            <div>
                <img className='MapImg' src={product.image} alt="" />
            </div>
            <div>
                <p className='Maptitle'>{product.title}</p>
                <p className='MapCatagory'>{product.catagory}</p>
                <p className='Lorem'>Lorem ipsum dolor sit amet consectetur adipisicing <elit className="br"></elit> Illo eos dolorum impedit a deleniti beatae.</p>
            </div>
        </div>
    )
}

export default Detail