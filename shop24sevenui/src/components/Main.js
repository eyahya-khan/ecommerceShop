import React from "react";
import { useState } from "react";

function Main() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleForm, setTitleform] = useState("");
  const [descriptionform, setDescriptionform] = useState("");
  const [initialId, setInitialId] = useState(0);
  const [updateVisibility, setUpdateVisibility] = useState(false);

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
      if (!titleForm || !descriptionform)
        return alert("Empty field not allowed");
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        Name: titleForm,
        Description: descriptionform,
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
      setTitleform("");
      setDescriptionform("");
    } catch (e) {
      alert(e.message);
    }
  };

  const getUpdate = async () => {
    try {
      if (!title || !description) return alert("Empty field not allowed");
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        Name: title,
        Description: description,
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
      setTitle("");
      setDescription("");
      setUpdateVisibility(false);
    } catch (e) {
      alert(e.message);
    }
  };

  const selectUser = (id, name, description) => {
    setTitle(name);
    setDescription(description);
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
      <div className="container">
        <div>
          <h1>Product list</h1>
          <form onSubmit={sendData} className="container-form">
            <input
              placeholder="Product name"
              type="text"
              name="name1"
              value={titleForm}
              onChange={(e) => {
                setTitleform(e.target.value);
              }}
            />
            <input
              placeholder="Description"
              type="text"
              name="name2"
              value={descriptionform}
              onChange={(e) => {
                setDescriptionform(e.target.value);
              }}
            />
            <div className="btn">
              <button className="btn btn-add">Add</button>
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
                value={title}
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                value={description}
                type="text"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="update-container-btn">
              <button className="btn-update" onClick={getUpdate}>
                Update
              </button>
            </div>
          </section>
          <div className="btn load-data">
            <button className="btn-load" onClick={getData}>
              Load all products...
            </button>
          </div>
          <table id="customers">
            <tbody>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>image</th>
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
                      <td>{item.image}</td>
                      <td>
                        <div className="table-btn">
                          <button
                            className="btn btn-edit"
                            onClick={() =>
                              selectUser(item.productId, item.productName, item.description)
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-delete"
                            onClick={() => getDelete(item.productId)}
                          >
                            Delete
                          </button>
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
