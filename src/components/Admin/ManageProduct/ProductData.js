import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";

const ProductData = ({
  Product,
  index,
  setlodding,
  setManageProduct,
  ManageProduct,
}) => {
  const { _id, Brand_Name, Catagory, Model, Product_Name, image, price } =
    Product;
  // .....................................Manage product Delete And update Work Start ......................
  const handeldelet = (id) => {
    const prosid = window.confirm("are you sure delete");
    if (prosid) {
      setlodding(true);
      axios
        .delete(`https://secret-ravine-65882.herokuapp.com/Product/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainguser = ManageProduct?.filter(
              (manages) => manages._id !== id
            );
            setManageProduct(remainguser);
            setlodding(false);
          }
        });
    }
  };
  // .....................................Manage product Delete And update Work End ......................
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img src={image} alt="" className="manageproduct-image" />
      </td>
      <td>{Product_Name}</td>
      <td>{Catagory}</td>
      <td>{Model}</td>
      <td>{Brand_Name}</td>
      <td>{price}</td>
      <td className="status-change-btn">
        <DropdownButton
          variant="outline-secondary"
          id="input-group-dropdown-1"
          className="dropbutton"
        >
          <Dropdown.Item>
            <button onClick={() => handeldelet(_id)} className="status">
              Delete
            </button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button
              // onClick={() => handleDelivery(_id)}
              className="status"
            >
              Edit
            </button>
          </Dropdown.Item>
        </DropdownButton>
      </td>
    </tr>
  );
};

export default ProductData;
