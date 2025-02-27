import PropTypes from "prop-types"
import styled from "styled-components"


const StyledButton= styled.button`



`

export default function Button({text, onClick}){

    return(
        <StyledButton onClick={onClick}>{text}</StyledButton>
    )

}

Button.propTypes={
    text: PropTypes.text,
    onClick: PropTypes.func
}