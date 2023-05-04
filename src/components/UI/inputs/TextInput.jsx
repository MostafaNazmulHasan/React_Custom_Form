import styled from "styled-components";

const TextInput = styled.input`
width: '100%';
border: ${(props) => props.error ? '2px solid red' : '1px solid white'};
outline: none;
padding: 0.25rem 0.5rem;
background: white;
font-size: 0.9rem;
font-family: arial;
color: black;

&:focus {
    border: 2px solid skyblue;
}
`
export default TextInput;