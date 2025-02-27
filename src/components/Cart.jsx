import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import styled from "styled-components";

const CartContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    max-width: 100%;
    height:auto;
    overflow-y:scroll;
    scrollbar-width: 0;
    margin: auto;
    padding: 20px;
`;

const CartItem = styled.div`
    min-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #ccc;
`;

const Image = styled.img`
    max-width: 100px;
    max-height: 100px;
    border-radius: 5px;
`;

const Button = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
`;

const Title=styled.p`
    align-self: flex-start;
`

const Price=styled.p`
    align-self: flex-end;
`

export default function Cart() {
  const [totalPrice, setTotalPrice]=useState(0)
  const { cart, removeFromCart } = useCart(); // Get cart items

    function calculateTotalPrice(){
       const total= cart.reduce((total, current)=>{
        return total+current.price*current.amount;
       },0)
       setTotalPrice(total)
    }

  useEffect(()=>{
    calculateTotalPrice()
  },[cart])
 console.log('cart is: ',cart)
  return (
    <CartContainer>
      <h1>Your Cart</h1>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id}>
            <Image src={item.image} alt={item.title} />
            <Title>{item.title}</Title>
            <p>{item.amount}</p>
            <Price>{item.price}</Price>
            <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
}
