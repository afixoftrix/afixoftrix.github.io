import React from 'react'
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 51px);
  padding-bottom: 40px;
`

const GradientBar = styled.div`
  height: 60px;
  background: ${ props => props.bg };
  margin-bottom: 24px;
`


export const ProjectPage = ({ barBg, title, date, content}) => {
  return (
    <PageContainer>
      <GradientBar bg={barBg} />
      <div className="h4">{title}</div>
      <div className="subtitle">{date}</div>
      <div>{content}</div>
    </PageContainer>
  );
};

