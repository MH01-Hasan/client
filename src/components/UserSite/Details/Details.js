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
    const imagess = [
        product?.image,
        product?.image1,
        product?.image2,
        product?.image3,
        product?.image4,
    ]


    useEffect(() => {
        fetch(`http://localhost:5000/Product/${id}`)
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

    const [selectedimg, setSelectedimg] = useState(imagess[0])
    console.log(selectedimg)

    console.log(imagess[0])

    if (!product) {
        return <p className='lodding'>Lodding................</p>

    }



    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-lg-6 col-sm-12'>
                    <div className='container-imagess'>
                        <img src={selectedimg} alt="" className='slected' />

                        <div className='imagecontainer'>
                            {
                                imagess?.map((img, index) => <img key={index}
                                    src={img}
                                    alt="dog"
                                    onClick={() => setSelectedimg(img)}
                                />)
                            }

                        </div>

                    </div>
                </div>

                <div className='col-lg-6 col-sm-12 product-info-details'>
                    <p>Brand : {product?.Brand_Name}</p>
                    <h1 className='details-name'>{product?.Product_Name}</h1>
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

                    <div className='Description mt-5'>
                        <p>
                            {product?.Description}
                        </p>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default Details;