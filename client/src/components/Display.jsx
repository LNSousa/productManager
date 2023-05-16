import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const Display = () => {

    const [product, setProduct] = useState('')

    const {id} = useParams()

    axios.get(`http://localhost:8000/api/products/${id}`)
    .then((res) => {setProduct(res.data.results[0])})
    .catch((err) => console.log(err))

    return (
        <div className='my-5'>
            <h1>{product.title}</h1>
            <h3>Price: ${product.price}</h3>
            <h3>{product.description}</h3>
        </div>
    )
}

export default Display;