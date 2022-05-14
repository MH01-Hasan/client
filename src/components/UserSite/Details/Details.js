import React, { useEffect, useState } from 'react';
import { ButtonGroup, Card, ToggleButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../../../Redux/cardSlics';
import './Details.css'

const Details = () => {
    const { id } = useParams()
    // ....................................Api Load Data...........................
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://secure-island-42519.herokuapp.com/Product/${id}`)
            .then(res => res.json())
            .then(item => {
                setProduct(item)

            })
    }, [])
    // ....................................Api Load Data...........................

    // ....................................add to Card Product..........................
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const handeladdToCard = (product) => {
        dispatch(addToCart(product))
        navigate('/cart')
    }

    // ....................................add to Card Product...........................

    // ....................................user Inpur Product Size..........................
    const [radioValue, setRadioValue] = useState('');
    product["Size"] = radioValue;
    console.log(product)
    const radios = [

        { name: '36', value: '36' },
        { name: '37', value: '37' },
        { name: '38', value: '38' },
        { name: '39', value: '39' },
        { name: '40', value: '40' },
        { name: '41', value: '41' },
        { name: '42', value: '42' },
        { name: '43', value: '43' },
        { name: '44', value: '44' },
        { name: '45', value: '45' },

    ];
    // ....................................user Inpur Product Size..........................




    if (!product.image) {
        return <p className='lodding'>Lodding................</p>

    }



    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-lg-6 col-sm-12'>
                    <Card.Img src={product.image} />

                </div>

                <div className='col-lg-6 col-sm-12'>
                    <h1 className='details-name'>{product.name}</h1>
                    <small className='discription'>{product.discription}</small>
                    <h5 className='price-details'>{`Price: AED ${product.price}`}</h5>

                    <div>
                        <h5 className='Size'>Size</h5>

                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant={idx % 2 ? 'outline-secondary' : 'outline-primary'}
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                    className="redio-btn-css"
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                    <button onClick={() => handeladdToCard(product)} className='details-add-to'>Add to cart</button>

                </div>

            </div>



        </div>
    );
};

export default Details;