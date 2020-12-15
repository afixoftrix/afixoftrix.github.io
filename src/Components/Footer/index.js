import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: center;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid #f0f0f0;
  margin-top: 200px;

  div {

  }
`;

export const Footer = () => {
  return (
    <Container className="footer">
      <div>
        made in 2020
      </div>
    </Container>
  )
}
