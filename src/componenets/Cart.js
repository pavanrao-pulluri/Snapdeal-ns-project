import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { remove } from "../redux/store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove(id));
  };
  const products = useSelector((state) => state.cart);

  const cards = products.map((product) => (
    // <Link to={`/products/${product.id}`} key={product.id}>
    <div class="ui container" style={{ marginLeft: "40px", margin: "25px" }}>
      {/* <div className="ui centered card"> */}
      <div
        className="ui centered card"
        style={{ height: "350px", padding: "30px" }}
      >
        <div
          className="image ui aligned center container"
          style={{
            width: "100px",
            height: "150px",
            paddingBottom: "50px",
          }}
        >
          <img src={product.image} alt={product.title} />
        </div>

        <div className="header">{product.title}</div>

        <div
          className="meta price ui center aligned container"
          style={{ color: "black", marginTop: "20px" }}
        >
          Price:- $ {product.price}
        </div>

        <button
          className="ui red button container"
          style={{ marginTop: "15px" }}
          onClick={() => removeFromCart(product.id)}
        >
          Remove From Cart
        </button>
      </div>
    </div>
    // </div>
    // </Link>
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyItems: "end",
          marginLeft: "150px",
          marginTop: "80px",
        }}
      >
        <h1
          className="ui center aligned container"
          style={{ marginTop: "30px" }}
        >
          Your Selected Bag - ({products.length}){" "}
        </h1>
        {products.length > 0 && (
          <Link to={"/payment"}>
            <button className="ui green button" style={{ marginTop: "15px" }}>
              Proceed To CheckOut
            </button>
          </Link>
        )}
      </div>
      {products.length <= 0 && (
        <div
          className="ui center aligned container"
          style={{ marginTop: "20%" }}
        >
          <span>your cart is empty </span>
          <Link to={"/"}>
            <button
              className="ui green button container"
              style={{ marginTop: "20px" }}
            >
              Go To Shop
            </button>
          </Link>
        </div>
      )}

      <div className="ui grid container">{cards}</div>

      {/* <div>total price - {products.price}</div> */}
    </>
  );
};

export default Cart;
