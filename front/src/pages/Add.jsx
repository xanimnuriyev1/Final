import React, { useContext, useEffect } from 'react'
import { ProductSchema } from '../schema/ProductSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { ProductContext } from '../context/ProductContext';
import { Helmet } from "react-helmet";
import axios from 'axios';
import '../pages/home.css'
const Add = () => {
    const { box, setBox } = useContext(ProductContext)

    const GetAllData = async () => {
        const res = await axios.get("http://localhost:5000/products")
        console.log(res?.data);
        setBox(res?.data)
    }
    useEffect(() => {
        GetAllData()
    }, [])


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ProductSchema),
    });
    const CreateData = async (values) => {
        await axios.post("http://localhost:5000/products", values)
        GetAllData()
    }
    const DeleteData = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`)
        GetAllData()
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <form action="" onSubmit={handleSubmit(CreateData)}>
                <input type="text" {...register('image')} placeholder='Image' />
                {errors.image?.message && <p style={{ color: "#fd5f00" }}>{errors.image?.message}</p>}
                <br />
                <input type="text" {...register('title')} placeholder='Title' />
                {errors.title?.message && <p style={{ color: "#fd5f00" }}>{errors.title?.message}</p>}
                <br />
                <input type="text" {...register('catagory')} placeholder='Catagory' />
                {errors.catagory?.message && <p style={{ color: "#fd5f00" }}>{errors.catagory?.message}</p>}
                <br />
                <input type="text" {...register('price')} placeholder='Price' />
                {errors.price?.message && <p style={{ color: "#fd5f00" }}>{errors.price?.message}</p>}
                <br />
                <button className='DetailBtn'>Submit</button>
            </form>
            <div className='InfoBox'>
                <input type="text" placeholder='Search' className='Search' onChange={(e) => {
                    let search = box.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
                    setBox(search)
                }} />
                <button
                    className='SortBtn'
                    onClick={() => {
                        let newarr = [...box].sort((a, b) => a.title[0].localeCompare(b.title[0]))
                        setBox(newarr)
                    }}
                >Sort Title</button>
                <button
                    className='SortBtn'
                    onClick={() => {
                        let newarr = [...box].sort((a, b) => a.price - b.price)
                        setBox(newarr)
                    }}
                >Sort A-Z</button>
                <button
                    className='SortBtn'
                    onClick={() => {
                        let newarr = [...box].sort((a, b) => b.price - a.price)
                        setBox(newarr)
                    }}
                >Sort Z-A</button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Catagory</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Delete Button</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {box.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row._id}</TableCell>
                                <TableCell><img className='AddImg' src={row.image} alt="" /></TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.catagory}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="error"
                                        onClick={() => DeleteData(row._id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Add