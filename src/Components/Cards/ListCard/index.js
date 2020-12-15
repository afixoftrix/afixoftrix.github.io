import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  border-top: 2px solid ${(props) => props.theme.secondary};
  padding: 10px 0;

  .list-card-title {
    color: ${(props) => props.theme.secondary};
  }

  .list-card-subtitle {
    color: ${(props) => props.theme.gray};
  }
`;

const ListCard = ({ title, subtitle, link }) => (
  <Link to={link}>
    <Container>
      <div className="list-card-title">{title}</div>
      <div className="list-card-subtitle">{subtitle}</div>
    </Container>
  </Link>
);

export default ListCard;
