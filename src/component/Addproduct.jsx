import React, { useState } from "react";
import { useActionData } from "react-router-dom";
import productService from "../service/product.service";

const Addproduct = () => {
  const [product, setProduct] = useState({
    productName: " ",
    description: " ",
    price: " ",
    status: " ",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();

    productService
      .saveProduct(product)
      .then((res) => {
        console.log(" Product Added Sucessfully");
        setMsg(" Product Added Sucessfully");
        setProduct({
          productName: " ",
          description: " ",
          price: " ",
          status: " ",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-6 offset-md-3 ">
            <div class="card">
              <div className="card-header fs-3 text-center"> Add Product</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              <div class="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div class="mb-3">
                    <label> Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      class="form-control "
                      onChange={(e) => handleChange(e)}
                      value={product.productName}
                    />
                  </div>

                  <div class="mb-3">
                    <label> Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      class="form-control "
                      onChange={(e) => handleChange(e)}
                      value={product.description}
                    />
                  </div>

                  <div class="mb-3">
                    <label> Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      class="form-control "
                      onChange={(e) => handleChange(e)}
                      value={product.price}
                    />
                  </div>

                  <div class="mb-3">
                    <label> Enter Status</label>
                    <input
                      type="text"
                      name="status"
                      class="form-control "
                      onChange={(e) => handleChange(e)}
                      value={product.status}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
