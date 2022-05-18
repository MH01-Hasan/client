import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import OrdersData from './OrdersData';

const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    const [lodding, setlodding] = useState(false)

    useEffect(() => {
        fetch("http://localhost:5000/Orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])



    return (
        <div className=' container'>
            <div>
                <div>
                    <Table responsive="sm md xl">
                        <thead>
                            <tr>
                                <th>Sl.No</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Order Number</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <OrdersData
                                    key={order._id}
                                    order={order}
                                    index={index}
                                ></OrdersData>)
                            }
                        </tbody>
                    </Table>





                </div>

            </div>

        </div>
    );
};

export default ManageOrder;