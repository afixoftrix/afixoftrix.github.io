import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container  = styled.div`
  width: 100%;

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
        <div>{name}</div>
        <div>Assignment {` ${num}`}</div>
      </Container>
    </Link>
  );
}

export default ProjectCard;
