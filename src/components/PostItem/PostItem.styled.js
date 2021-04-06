import styled from 'styled-components';

const PostContainerStyled = styled.li`
padding: 20px;
border-radius: 8px;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

 :not(:last-child) {
 margin: 0px 0px 20px;
}

:hover {
  transform: scale(1.01);`;

const PostTitleStyled = styled.h2`
margin: 0px 0px 5px;
font-size: 18px`;

const PostTextStyled = styled.p`
margin: 0px 0px 5px;
font-size: 14px`;

export { PostContainerStyled, PostTitleStyled, PostTextStyled };