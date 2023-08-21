import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../redux/store/cartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const addToCart = (productDetails) => {
    dispatch(add(productDetails));
  };
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [islaoding, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((data) => data.json())
      .then((result) => setProductDetails(result));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div>
      {islaoding ? (
        <div
          class="ui active inline loader"
          style={{ margin: "18% 0  20% 50%" }}
        ></div>
      ) : (
        <div>
          <h1 className="ui center aligned container ">Product Details</h1>
          <hr />
          <div style={styles.container}>
            {/* <h1 style={styles.title}>Product Details</h1> */}
            <div style={styles.productContainer}>
              <img
                src={productDetails.image}
                alt={productDetails.title}
                style={styles.image}
              />
              <div style={styles.productInfo}>
                <h2 style={styles.productTitle}>{productDetails.title}</h2>
                <p style={styles.productDescription}>
                  {productDetails.description}
                </p>
                <p style={styles.productPrice}>
                  Price: ${productDetails.price}
                </p>
                <div className="fluid-container">
                  {/* <Link to={"/cart"}> */}
                  <button
                    className="ui olive button"
                    onClick={() => addToCart(productDetails)}
                  >
                    Add To Cart
                  </button>
                  {/* </Link> */}
                  <Link to={"/payment"}>
                    <button className="ui green button">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  productContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "400px",
    height: "400px",
    marginRight: "90px",
    marginLeft: "100px",
    padding: "30px",
    border: "1px solid lightgrey",
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    // border: "1px solid lightgrey",
    padding: "30px",
  },
  productTitle: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  productDescription: {
    margin: "10px",
    textAlign: "start",
  },
  productPrice: {
    fontWeight: "bold",
    color: "red",
  },
  // Add more styles as needed
};

export default ProductDetails;
