import React from 'react'
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #0ae;
`


export const ProjectPage = ({ picture, title, date, content}) => {
  return (
    <PageContainer>
      hi there
      <div>{picture}</div>
      <div>{title}</div>
      <div>{date}</div>
      <div>{content}</div>
    </PageContainer>
  );
};
