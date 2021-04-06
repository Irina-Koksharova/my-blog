import styled from 'styled-components';

const FormStyled = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin: 0;
padding: 20px;`;

const LabelStyled = styled.label`
width: 50%;
margin: 0px 0px 15px 0px;
font-size: 18px;
font-weight: 500;
`;

const InputStyled = styled.input`
width: 50%;
margin: 0px 0px 25px 0px;
padding: 5px;
border: 1px solid black;
border-radius: 4px;
`;

const TextStyled = styled.textarea`
width: 100%;
height: 200px;
margin: 0px 0px 35px 0px;
padding: 5px;
border: 1px solid black;
border-radius: 4px;
`;

export {
    FormStyled,
    LabelStyled,
    InputStyled,
    TextStyled
};