import React, { useEffect, useRef, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { HiLocationMarker, HiMail, HiPhoneMissedCall } from "react-icons/hi";
import './ManageOrder.css'

const Order = () => {
    const { id } = useParams()
    const [order, setOrder] = useState({})
    console.log(order)

    useEffect(() => {
        fetch(`http://localhost:5000/Order/${id}`)
            .then(res => res.json())
            .then(item => {
                setOrder(item)
            })
    }, [])

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className='fild-pdf' >
            <div className='print-bttom container'>
                <div className='print-div'>
                    <button className='Print-btn' onClick={handlePrint}>Print</button>
                </div>

                <div className='pdf-body' ref={componentRef}  >
                    <div className='mt-3 ' >


                        <section className='invoice-header'>
                            <div>
                                <h4 className='invoice'>Invoice</h4>
                            </div>

                            <div className='hospital-info'>

                                <div>
                                    <p> <HiLocationMarker />1234 North Avenue Luke,

                                        South Bend,IN 360001</p>
                                    <p><HiPhoneMissedCall />+8801629094984</p>
                                    <p> <HiMail />support@gmail.com</p>
                                </div>

                            </div>

                        </section>




                        <section className='customer-info'>
                            <div className='build-to'>
                                <h5>Build To</h5>
                                <p className='build-info'>Name : {order?.Shipinginfo?.data?.firstName}  {order?.Shipinginfo?.data?.lastName}</p>
                                <p className='build-info'>Phone Number : {order?.Shipinginfo?.data?.Phone}</p>
                                <p className='build-info'>Address : {order?.Shipinginfo?.data?.Address} , {order?.Shipinginfo?.data?.Emirate}</p>
                                <p className='build-info'>Country : {order?.Shipinginfo?.data?.Country}</p>
                                <p className='build-info'>Payment Status : Cash on Delivery (COD)</p>

                            </div>

                            <div>
                                <h4>Invoice Number</h4>
                                <p>{order?._id}</p>

                            </div>
                        </section>
                        <section className='product-info'>
                            <Table >
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th>Product Name</th>
                                        <th>Model No</th>
                                        <th>Brand</th>
                                        <th>Size</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {order?.item?.cart?.cardItem.map((item, index) => (

                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{index + 1}</td>
                                            <td>{index + 1}</td>
                                            <td>{index + 1}</td>
                                            <td>{item?.Size}</td>


                                        </tr>


                                    ))}

                                    <tr>
                                        <td className='g-total-pdf' colSpan={6}>Grand Total</td>
                                        <td className='g-total-pdf'>{ }.TK</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </section>

                        <section className='mb-5 mt-3'>
                            <div className=''>
                                <p>Mr/Ms { }</p>
                                <small>Thank you for being our valued customer. We are so grateful for the pleasure of serving you and hope we met your expectations.</small>
                            </div>
                            <div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Order;