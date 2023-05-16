import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';

const Form = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            setProducts(res.data.results)
        })
        .catch((err) => console.log(err))
    }, [])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new', {title, price, description})
        .then((res) => {
            console.log("Product successfully added to database!")
            navigate('/products')
        })
        .catch(err => console.log('Error: ', err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form className='mx-auto' style={{width: '50%'}} onSubmit={handleSubmit}>
                <div className='my-3'>
                    <label className='form-label'>Title</label>
                    <input type="text" className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='my-3'>
                    <label className='form-label'>Price</label>
                    <input type="number" className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className='my-3'>
                    <label className='form-label'>Description</label>
                    <input type="text" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button className='btn btn-outline-success' type="submit">Create</button>
            </form>
            <hr />
            <div>
                <h1>All Products:</h1>
                <ul >
                    {
                        products.map((p, i) => {
                            return(
                                <li key={i}><a href={`/products/${p._id}`}>{p.title}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Form