import { createContext, useContext, useState } from "react";

const CartContext=createContext([])

export function useCart(){
    return useContext(CartContext)
}



export function CartProvider({children}){
    const [cart, setCart]=useState([])

    function addToCart(item){

        const existingItem = cart.find((it) => it.id === item.id)
        if (existingItem) {

            const updatedCart = cart.map((it) =>
              it.id === item.id ? { ...it, amount: it.amount + item.amount } : it
            )
            setCart(updatedCart)
          } else {

            setCart([...cart, item])
          }
    }

    function removeFromCart(id){
        setCart((prev)=>prev.filter((item)=>item.id!==id))
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

