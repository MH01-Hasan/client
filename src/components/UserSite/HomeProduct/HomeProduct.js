import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeProduct.css'

const HomeProduct = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('https://secure-island-42519.herokuapp.com/Product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container mb-5'>
            <div className='row'>
                {
                    products.map(product => <div className='col-lg-3 col-md-4 col-sm-12' key={product._id}>
                        <Card className='cart-fild mt-5'>
                            <Card.Img src={product.image} className='image-card' />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <p className='price-card'> Price : {product.price} Tk</p>
                                <div className='add-footer'>

                                    <Link to={`/details/${product._id}`} className='details-link'>
                                        Veiw More
                                    </Link>

                                </div>
                            </Card.Body>

                        </Card>
                    </div>)

                }
            </div>



        </div>
    );
};

export default HomeProduct;