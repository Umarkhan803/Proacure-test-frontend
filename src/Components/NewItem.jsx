import React, { useState } from "react";

const NewItem = () => {
  const [supplier, setSupplier] = useState("");
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [timeline, setTimeline] = useState("");
  const [location, setLocation] = useState("");
  const [required, setRequired] = useState("");
  // to check the validation
  const [error, setError] = useState("");

  const addProduct = async (event) => {
    event.preventDefault();
    if (
      !supplier ||
      !product ||
      !category ||
      !quantity ||
      !timeline ||
      !location ||
      !required
    ) {
      setError(true);
      return false;
    }
    let result = await fetch("http://localhost:3500/api/require", {
      method: "post",
      body: JSON.stringify({
        supplier,
        product,
        category,
        quantity,
        timeline,
        location,
        required,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };
  return (
    <>
      <div className="addProduct">
        <form onSubmit={addProduct}>
          <h1>Require Product </h1>
          <input
            type="text"
            placeholder="enter supplier"
            value={supplier}
            onChange={(e) => {
              setSupplier(e.target.value);
            }}
          />
          {error ? (
            <span className="invalid">Enter valid supplier name</span>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Enter Product information"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          {error ? (
            <span className="invalid">Enter valid product name</span>
          ) : (
            ""
          )}
          <select
            id="options"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}>
            <option value={category} disabled>
              Select an category
            </option>
            <option value="Phone">Phone</option>
            <option value="laptop">laptop</option>
            <option value="tablet">tablet</option>
            <option value="tv">tv</option>
          </select>
          {error ? <span className="invalid">Enter valid name</span> : ""}
          <input
            type="text"
            placeholder="enter Quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          {error ? <span className="invalid">Enter valid name</span> : ""}
          <input
            type="date"
            value={timeline}
            onChange={(e) => {
              setTimeline(e.target.value);
            }}
          />
          {error && !supplier && (
            <span className="invalid">Enter valid time</span>
          )}
          <select
            id="options"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}>
            <option value={location} disabled>
              Select an location
            </option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mysore">Mysore</option>
            <option value="Bijapur">Bijapur</option>
            <option value="Bidar">Bidar</option>
          </select>
          {error ? <span className="invalid">Enter valid name</span> : ""}
          <input
            type="text"
            placeholder="require for"
            value={required}
            onChange={(e) => {
              setRequired(e.target.value);
            }}
          />
          {error ? <span className="invalid">Enter valid name</span> : ""}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
export default NewItem;
