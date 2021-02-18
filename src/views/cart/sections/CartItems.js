import React from "react";

import Muted from "components/Typography/Muted";

// layouts
import CartItem from "../layouts/CartItem";

const CartItems = ({ cartItems }) => {
  return (
    <div className="fcol">
      <div className="fwb fsm mar_l-8 mar_b-8">
        <Muted>Available courses in your cart</Muted>
      </div>
      {cartItems?.length > 0 &&
        cartItems.map((cartItem) => (
          <CartItem key={cartItem._id} cartItem={cartItem} />
        ))}
    </div>
  );
};

export default CartItems;
