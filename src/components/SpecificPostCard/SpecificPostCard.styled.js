import styled from 'styled-components';

const ContainertStyled = styled.div`
padding: 10px;
`;

const Titletyled = styled.h2`
margin: 0px 0px 15px 0px;
font-size: 16px
`;

const SubTitletyled = styled.h3`
margin: 0px 0px 10px 0px;
text-align: center;
font-size: 14px
`;

const PostTextStyled = styled.p`
margin: 0px 0px 15px 0px;
font-size: 14px
`;

const ListStyled = styled.ul`
margin: 0px 0px 25px 0px;
padding: 0;
`;

const ListItemStyled = styled.li`
font-size: 14px;

:not(:last-child) {
margin: 0px 0px 25px 0px;
}
`;

export {
    ContainertStyled,
    Titletyled,
    SubTitletyled,
    PostTextStyled,
    ListStyled,
    ListItemStyled
};