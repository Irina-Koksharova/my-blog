import styled from 'styled-components';

const ButtonStyled = styled.button`
 min-width: 80px;
 padding: 7px;
 font-size: 10px;
 background-color: rgb(164, 240, 140);
 border: none;
 outline: none;
 border-radius: 5px;
 cursor: pointer;

 :not(:last-child) {
 margin: 0px 20px 0px 0px;
}

 :hover {
  transform: scale(1.01);
}
`;

export { ButtonStyled };

