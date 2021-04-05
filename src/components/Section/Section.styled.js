import styled from 'styled-components';

const MainSectionStyled = styled.section`
display: flex;
height: 250px;
margin: 0px 0px 20px;
padding: 20px;
border-radius: 8px;
 box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const SecondarySectionStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export { MainSectionStyled, SecondarySectionStyled };