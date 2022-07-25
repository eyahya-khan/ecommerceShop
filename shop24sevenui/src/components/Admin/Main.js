import React from "react";
import { useState } from "react";
import './Main.css'
import {Button} from '../product.styled'

function Main() {
  const [users, setUsers] = useState([]);
  const [initialId, setInitialId] = useState(0);
  const [updateVisibility, setUpdateVisibility] = useState(false);
  const [img, setImg] = useState('')

  const [values, setValues] = useState({
    ProductName: "",
    Description: "",
    Price: "",
    Quantity: "",
    Category: "",
  });
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const handleChangeFile = (e) => {
    setImg(e.target.files[0].name)
  }
  const getData = async () => {
    try {
      const response = await fetch("https://localhost:7152/products");
      const deserializedJSON = await response.json();
      setUsers(deserializedJSON);
    } catch (e) {
      alert(e.message);
    }
  };
  const sendData = async (e) => {
    try {
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        Name: values.ProductName,
        Description: values.Description,
        Price : values.Price,
        Quantity: values.Quantity,
        Category: values.Category,
        Image: img
      });
      const requestOptions = {
        method: "POST",
        mode: "cors",
        headers: myHeaders,
        body: body,
        redirect: "follow",
      };
      const response = await fetch(
        "https://localhost:7152/products",
        requestOptions
      );
      const deserializedJSON = await response.json();
      setUsers(deserializedJSON);
      setValues('');
    } catch (e) {
      alert(e.message);
    }
  };

  const getUpdate = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        Name: values.ProductName,
        Description: values.Description,
        Price : values.Price,
        Quantity: values.Quantity,
        Category: values.Category,
        Image: values.Image
      });
      const requestOptions = {
        method: "PUT",
        mode: "cors",
        headers: myHeaders,
        body: body,
        redirect: "follow",
      };
      const response = await fetch(
        "https://localhost:7152/products/" + initialId,
        requestOptions
      );
      const deserializedJSON = await response.json();
      setUsers(deserializedJSON);
      getData();
      setUpdateVisibility(false);
    } catch (e) {
      alert(e.message);
    }
  };

  const selectUser = (id, name, description) => {
    setInitialId(id);
    setUpdateVisibility(true);
  };

  const getDelete = async (id) => {
    let text = "Delete permanently!";
    if (window.confirm(text) === true) {
      var requestOptions = {
        method: "DELETE",
        mode: "cors",
        redirect: "follow",
      };
      await fetch("https://localhost:7152/products/" + id, requestOptions);
      getData();
    }
  };

  return (
    <>
      <div className="main-container">
        <div>
          <form onSubmit={sendData} className="container-form">
            <input
              type="text"
              // value={productName}
              placeholder="productName"
              onChange={handleChange("ProductName")}
              name="ProductName"
            />
            <input
              type="text"
              // value={descriptionform}
              placeholder="Description"
              onChange={handleChange("Description")}
              name="Description"
            />
            <input
              type="text"
              // value={descriptionform}
              placeholder="Price"
              onChange={handleChange("Price")}
              name="Price"
            />
            <input
              type="text"
              // value={descriptionform}
              placeholder="Quantity"
              onChange={handleChange("Quantity")}
              name="Quantity"
            />
            <input
              type="text"
              // value={descriptionform}
              placeholder="Category"
              onChange={handleChange("Category")}
              name="Category"
            />
            {/* <input
              type="file"
              onChange={handleChange("Image")}
              name="Image"
              multiple
            /> */}
            <input
              type="file"
              // value={img}
              onChange={handleChangeFile}
              name="Image"
              multiple
            />
            <div className="btn">
              <Button className="btn btn-add">Add</Button>
            </div>
          </form>
        </div>
        <div>
          <section
            className={
              updateVisibility ? "update-container-visible" : "update-container"
            }
          >
            <div className="update-container-input">
            <input
              type="text"
              // value={productName}
              placeholder="productName"
              onChange={handleChange("ProductName")}
              name="ProductName"
            />
            <input
              type="text"
              // value={descriptionform}
              placeholder="Description"
              onChange={handleChange("Description")}
              name="Description"
            />
            <input
              type="text"
              // value={descriptionform}
              placeholder="Price"
              onChange={handleChange("Price")}
              name="Price"
            />
            <input
              type="text"
              // value={descriptionform}
              placeholder="Quantity"
              onChange={handleChange("Quantity")}
              name="Quantity"
            />
            <input
              type="text"
              // value={descriptionform}
              placeholder="Category"
              onChange={handleChange("Category")}
              name="Category"
            />
            <input
              type="text"
              // value={descriptionform}
              placeholder="Image"
              onChange={handleChange("Image")}
              name="Image"
            />
            </div>
            <div className="update-container-btn">
              <Button className="btn-update" onClick={getUpdate}>
                Update
              </Button>
            </div>
          </section>
          <div className="btn load-data">
            <Button className="btn-load" onClick={getData}>
              Load all products...
            </Button>
          </div>
          <table id="customers">
            <tbody>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Image</th>
                <th></th>
              </tr>
              {users.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.productName}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>{item.category}</td>
                      <td>{item.quantity}</td>
                      <td>{item.image}</td>
                      <td>
                        <div className="table-btn">
                          <Button
                            className="btn btn-edit"
                            onClick={() =>
                              selectUser(item.productId, item.productName, item.description)
                            }
                          >
                            Edit
                          </Button>
                          <Button
                            className="btn btn-delete"
                            onClick={() => getDelete(item.productId)}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Main;
