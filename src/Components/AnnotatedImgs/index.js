import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: auto;
    max-width: 642px;
  }
  .annotation {
    font-weight: 300;
    font-style: italic;
    color: #959595;
    font-size: 14px;
  }
`;


const AnnotatedImg = ({ src, txt, alt}) => {
  return (
    <Container>
      <img src={src} alt={alt} />
      <div className="annotation" >{txt}</div>
    </Container>
  )
}

export default AnnotatedImg;
