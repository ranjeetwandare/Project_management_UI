import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../service/product.service";

const Editproduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: " ",
    description: " ",
    price: " ",
    status: " ",
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const productUpdate = (e) => {
    e.preventDefault();

    productService
      .editproduct(product)
      .then((res) => {
        navigate("/");
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
                <form onSubmit={(e) => productUpdate(e)}>
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
                  <button className="btn btn-primary col-md-12">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editproduct;
