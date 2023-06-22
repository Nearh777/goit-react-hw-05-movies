import styled from '@emotion/styled';


export const Input = styled.input`
font-size: 14px;
text-decoration: none;
color: black;
border-radius: 0.2rem;
border: 1px solid black;
transition: border-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
margin-left: 20px;
&:hover, :focus{
    border-color: orange;
    outline: none;
}`