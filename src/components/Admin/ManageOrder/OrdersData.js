import React from 'react';
import { Link } from 'react-router-dom';


const OrdersData = ({ order, index }) => {
    console.log(order)

    const { _id, Date, Status, Shipinginfo, } = order;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{Date?.date}</td>
            <td>{Shipinginfo?.data?.firstName} {Shipinginfo?.data?.lastName}</td>
            <td>{Shipinginfo?.data?.Phone}</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
                <Link to={`/Order/${_id}`}>
                    {_id}
                </Link>


            </td>
            <td>{Status}</td>
            <td>Table cell</td>
        </tr>
    );
};

export default OrdersData;