import { useState, useEffect } from "react"
import ShopItem from './ShopItem'
import styled from "styled-components"
import {useCart } from "./CartContext"



const StyledShop=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const StyledItems=styled.div`
    display:grid;
    max-width :100%;
    grid-template-columns:repeat(auto-fill, minmax(400px, 1fr));
    gap : 20px;
    margin:10px;
`

const StyledHeading=styled.h1`
    color: var(--color-primary);
    font-size: 64px;
    font-weight : 700;
`

export default function Shop(){
    const API='https://fakestoreapi.com/products'
    const [items, setItems]= useState([])
    // const {addToCart}=useCart()


    console.log("useCart:", useCart());

    function fetchData(){
            fetch(API).
            then((res)=>res.json())
            .then(data=>{ 
                setItems(data)
                console.log(data)
            })
            .catch((error)=>console.log(`Error : `, error))
    }


    useEffect(()=>{
        fetchData()
        return fetchData
    },[])

    

    return (
        <>
            
            <StyledShop>
                <StyledHeading>Shop</StyledHeading>
                <StyledItems>
                {      
                    items.map((item)=>{
                        return (
                            <ShopItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                category={item.category}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                                rating={item.rating}    
                                // AddToCart={()=>addToCart(item)}

                            />

                        )
                    })
                }
                </StyledItems>

            </StyledShop>
        </>

    )
}