import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/store/cartSlice";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const PaymentPage = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const history = useNavigate();

  const handlePayment = () => {
    setTimeout(() => {
      setPaymentStatus("success");
      dispatch(clearCart());
    }, 2000);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="ui center aligned container" style={{ marginTop: "50px" }}>
        Payment Details
      </h1>
      <h2 className="ui center aligned container" style={{ marginTop: "50px" }}>
        Total Amount: $ {cart.reduce((total, item) => total + item.price, 0)}
      </h2>

      <div
        className="ui center aligned container"
        style={{ marginTop: "150px" }}
      >
        <p>click below to complete your payment</p>
        {paymentStatus === "success" ? (
          <p style={{ color: "green", fontSize: "25px" }}>
            Payment successfully completed👏 &
            <span>Congrats your order confirmed😍</span>
            <br />
            <Link to={"/"}>
              <button className="ui green button" style={{ marginTop: "10px" }}>
                Shop More
              </button>
            </Link>
          </p>
        ) : paymentStatus === "error" ? (
          <p style={{ color: "red" }}>Payment failed. Please try again.</p>
        ) : (
          <button className="ui purple button" onClick={handlePayment}>
            Proceed To Pay
          </button>
        )}

        {/* <Link to="/products/:id">Back to Product Details</Link> */}
      </div>
    </div>
  );
};

export default PaymentPage;
