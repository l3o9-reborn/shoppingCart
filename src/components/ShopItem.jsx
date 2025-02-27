import PropTypes from "prop-types"
import styled from "styled-components"
import { useState } from "react"
import { useCart } from "./CartContext"


const Card= styled.div`
        position: relative;
        background-color:var(--color-text);
        display:flex;
        flex-direction: column;
        background: #fff;
        align-items: center;
        justify-content:center;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        max-width: 400px;
        min-hight: 450px;
        box-shadow: 2px 4px 6px var(--color-primary);
    `
const Category=styled.span`
        align-self: flex-start;
        font-size: 20px;
        color:#1c1c1c;
        position: absolute;
        top: 20px;
        left:20px;

    `

const Image=styled.img`
        max-width: 300px;
        max-height: 200px;
        border-radius: 10px;
        margin: 0px 0px 20px 0px;
    `
const Title = styled.h2`
        font-size: 1.2rem;
        color: var(--color-secondary);
    `

const Price = styled.p`
        margin: 20px 0;
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--color-text);
    `
const ProductCount= styled.div`
        display: flex;
        margin: 10px;
    

`
const ProductAmount=styled.span`
    font-size: 36px;
    marign: 10px;
    color :#1c1c1c;
    margin: 2px 4px;

`

const ButtonSet=styled.div`

    position:relative;
    bottom:20px;
`

const Button= styled.button`

`




export default function ShopItem({ id ,category, image , price , title}){

    const [amount, setAmount]=useState(0)
    const {addToCart}=useCart()
    const handleAddToCard=()=>{
        if(amount>0)
            addToCart({id, category, image, price, title, amount })

    }
    return (
        <Card>
            <Category>{category}</Category>
            <Image src={image}></Image>
            <Title>{title}</Title>
            <Price>{price}</Price>
            <ButtonSet>
                <ProductCount>
                    <Button onClick={()=>{setAmount((prev)=>prev-1)}}>-</Button>
                        <ProductAmount>{amount}</ProductAmount>
                        <Button onClick={()=>{setAmount((prev)=>prev+1)}}>+</Button>
                </ProductCount>
                <Button onClick={handleAddToCard}>ADD TO CART</Button>
                {/* <Button text={'Add To Cart'} onClick={handleClick} /> */}
            </ButtonSet>

        </Card>

    )

}

ShopItem.propTypes ={
    id: PropTypes.number.isRequired,
    category: PropTypes.string,
    image: PropTypes.string,
    price:PropTypes.number,
    title:PropTypes.string,
}

ShopItem.defaultProps ={
    id:0,
    category: "Uncategorized",
    title:'No Title'
}