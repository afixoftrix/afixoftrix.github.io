import React from 'react';
import * as Card from './style'

const HomeCard = ({ title, description }) => {
  return (
    <Card.Container>
      <Card.TxtContent>
        <Card.Title className="h2-light">{title}</Card.Title>
        <Card.Description className="p2" >{description}</Card.Description>
      </Card.TxtContent>
    </Card.Container>
  )
}

export default HomeCard;
