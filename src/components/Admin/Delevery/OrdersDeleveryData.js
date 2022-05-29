import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrdersDeleveryData = ({ order, index }) => {
    const { _id, Date, Status, Shipinginfo, } = order;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{Date?.date}</td>
            <td>{Shipinginfo?.data?.firstName} {Shipinginfo?.data?.lastName}</td>
            <td>{Shipinginfo?.data?.Phone}</td>
            <td>
                <Link to={`/Order/${_id}`}>
                    {_id}
                </Link>


            </td>
            <td className={(Status === "Delivery" && "statusDelivery")} >{Status}</td>
        </tr>
    );
};

export default OrdersDeleveryData;