import styled from 'styled-components';

const ListStyled = styled.ul`
height: 480px;
margin: 0px 0px 20px;
padding: 20px;
overflow: auto;

::-webkit-scrollbar {
  width: 10px;
  background-color: white;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(202, 190, 175);
  border-radius: 10px;
}
`;

export { ListStyled }
