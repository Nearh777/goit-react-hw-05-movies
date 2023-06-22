import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';


export const Link = styled(NavLink)`

font-size: 14px;
text-decoration: none;
color: black;
transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
&:hover, :focus{
    color: orange;
    text-decoration: underline;
}
`
export const LinksList = styled.ul`
display: flex;
flex-direction: column;
gap: 5px;
list-style: none;
`