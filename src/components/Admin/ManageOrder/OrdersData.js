import React from 'react';
import { Link } from 'react-router-dom';

import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

const OrdersData = ({ order, index, setlodding }) => {
    console.log(order)
    const { _id, Date, Status, Shipinginfo, } = order;

    const handleProcessing = (id) => {
        setlodding(true)
        axios.put(`http://localhost:5000/Processing/${id}`, {
            Status: "Processing",
        })
            .then((res) => {
                if (res.data.matchedCount > 0) {
                    Swal.fire("Delivery Status", "success");
                    setlodding(false)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelivery = (id) => {
        setlodding(true)
        axios.put(`http://localhost:5000/Delivery/${id}`, {
            Status: "Delivery",
        })
            .then((res) => {
                if (res.data.matchedCount > 0) {
                    Swal.fire("Delivery Status", "success");
                    setlodding(false)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };



    return (
        <tr>
            <td>{index + 1}</td>
            <td>{Date?.date}</td>
            <td>{Shipinginfo?.data?.firstName} {Shipinginfo?.data?.lastName}</td>
            <td>{Shipinginfo?.data?.Phone}</td>
            <td>Table cell</td>
            <td>
                <Link to={`/Order/${_id}`}>
                    {_id}
                </Link>


            </td>
            <td className={(Status === "Processing" && "statusprossing") || (Status === "Delivery" && "statusDelivery")} >{Status}</td>
            <td className='status-change-btn'>
                <DropdownButton
                    variant="outline-secondary"
                    id="input-group-dropdown-1"
                    className='dropbutton'
                >
                    <Dropdown.Item>
                        <button
                            onClick={() => handleProcessing(_id)}
                            className='status'>
                            Processing
                        </button>
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <button
                            onClick={() => handleDelivery(_id)}
                            className='status'>Delivery</button>
                    </Dropdown.Item>


                </DropdownButton>




            </td>
        </tr>
    );
};

export default OrdersData;