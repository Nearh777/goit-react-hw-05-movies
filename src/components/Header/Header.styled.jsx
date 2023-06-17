import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const HeaderStyle = styled.header`
animation: glow 800ms ease-out infinite alternate;
    background-color: rgba(55, 59, 68, 0.4);
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 4px rgba(0, 255, 0, 0.2), 0 0 7px rgba(0, 255, 0, 0.2),
      0 0 7px rgba(0, 255, 0, 0.2), 0 0 7px rgba(0, 255, 0, 0.2),
      0 0 12px rgba(0, 255, 0, 0.2), 0 0 12px rgba(0, 255, 0, 0.2),
      0 0 7px rgba(0, 255, 0, 0.2), 0 0 12px rgba(0, 255, 0, 0.2);
`

  export const NavList = styled.ul`
  display: flex;
    gap: 30px;
  `
  export const NavLinkItem = styled(NavLink) ${props => props.isActive ? css
    
    : css
   
    } ;
  export const NavLinkActiv = `
  font-weight: 700;
  font-size: 25px;
  color: #fff;
  text-transform: uppercase;
  `
  
  

  export const Active = 
  .active {
    font-weight: 700;
    font-size: 25px;
    color: rgb(255, 89, 0);
    text-transform: uppercase;
  }