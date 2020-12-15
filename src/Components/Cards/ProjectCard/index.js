import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container  = styled.div`
  width: 100%;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: auto;
    max-width: 642px;
  }
`

const ProjectCard = ({name, picture, link, num}) => {
  console.log(link);
  return (
    <Link to={link}>
      <Container>
        <div>
          <img src={picture} alt="project picture" />
        </div>
        <div className="h4">{name}</div>
        <div className="subtitle">Assignment {` ${num}`}</div>
      </Container>
    </Link>
  );
}

export default ProjectCard;
