import styled from 'styled-components';

const ListStyled = styled.ul`
display: flex;
padding: 0;
`;

const ListItemStyled = styled.li`
:not(:last-child) {
    margin: 0px 15px 0px 0px
}
`;

export { ListStyled, ListItemStyled }
