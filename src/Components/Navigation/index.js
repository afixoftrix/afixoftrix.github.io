import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${ props => props.theme.secondary };
  height: 50px;
  border-bottom: 1px solid ${ props => props.theme.secondary};
  //media-query

  //sub classes
  div, a {
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    color: inherit;
  }
`;

export const Navigation = () => {
  return (
    <NavContainer className="p">
      <Link to="/">Unwana Essien</Link>
      <div>Master's Portfolio</div>
      <Link to="/about">About</Link>
    </NavContainer>
  )
}
