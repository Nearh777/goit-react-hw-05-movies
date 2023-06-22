import styled from '@emotion/styled';

export const ReviewsList = styled.ul`


`
export const Review = styled.li`
background-color: ${({ index }) => index % 2 === 0 ? "white" : "rgb(209, 207, 207)"};
border-radius: 0.2rem;
padding: 4px 8px;
`