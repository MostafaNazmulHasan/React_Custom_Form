import TextInput from "../../UI/inputs/TextInput";
import Label from "../../UI/inputs/label"
import styled from 'styled-components'

const Container = styled.div`
width: '100%',
padding: 2rem;
border: 1px solid black;
display: flex;
flex-direction: column;
gap: 1rem;

`
const ErrorMessage = styled.div`
    font-size: 0.8 rem;
    color: red;
`
const InputGroup = ({ label, name, value, placeholder, error, onChange, onFocus, onBlur }) => {
    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            <TextInput
                name={name}
                id={name}
                placeholder={placeholder ?? ''}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                error ={error}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}

export default InputGroup