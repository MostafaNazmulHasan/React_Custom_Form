import styled from "styled-components";

const Button = styled.button`
    border: none;
    outline: none;
    background: black;
    color: white;
    border-radius: 0.15 rem;
    padding: 0.25rem 1rem;
    font-size: 0.9rem;
    font-family: Arial;
    font-weight: 500;
    letter-spacing: 0.2rem;
    cursor: pointer;
    text-transform: uppercase;
    width: 100%;

    &:hover{
        background: green;
    }
`
export default Button;