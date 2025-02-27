import styled from "styled-components"
import { Link, Outlet } from "react-router-dom"

const Nav= styled.nav`
  background-color: var(--color-background);
  padding: 40px;
  color: #fff;
  box-shadow: 0px 2px 8px var(--color-primary);
`

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`


export default function NavBar(){
    return(
        <>
            <Nav>
                <NavLinks>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/cart'>Cart</Link>
                </NavLinks>
            </Nav>
            <Outlet/>
        </>

    )
}