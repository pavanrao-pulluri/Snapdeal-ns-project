import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import LoaderCenter from "./LoaderCenter";
// import { Loader } from "@mantine/core";

const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [islaoding, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const cards = products
    .filter(
      (product) =>
        product.title &&
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((product) => (
      <Link to={`/products/${product.id}`} key={product.id}>
        <div
          class="ui raised link card "
          style={{ marginLeft: "40px", margin: "25px" }}
        >
          <div className="ui centered card">
            <div className="ui cards">
              <div
                className="card"
                style={{ height: "350px", padding: "40px" }}
              >
                <div
                  className="image ui aligned center container"
                  style={{
                    width: "100px",
                    height: "150px",
                    paddingBottom: "50px",
                  }}
                >
                  <img src={product.image} alt={`Product: ${product.title}`} />
                </div>
                <div className="content"></div>
                <div className="header">{product.title}</div>
                <div
                  className="meta price ui center aligned container"
                  style={{ color: "lightblack", marginTop: "10px" }}
                >
                  Category : {product.category}
                </div>
                <div
                  className="meta price ui center aligned container"
                  style={{ color: "black", marginTop: "10px" }}
                >
                  Price:- $ {product.price}
                </div>
                {/* <Link to={"/cart"}>
                  <button
                    className="ui primary button container"
                    style={{ marginTop: "15px" }}
                  >
                    Add To Cart
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    ));

  return (
    <div>
      {islaoding ? (
        <div
          class="ui active inline loader"
          style={{ margin: "18% 0  20% 50%" }}
        ></div>
      ) : (
        <div>
          <h1
            className="ui center aligned container"
            style={{ marginTop: "30px" }}
          >
            Featured Products
          </h1>
          <div className="ui grid container">{cards}</div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
