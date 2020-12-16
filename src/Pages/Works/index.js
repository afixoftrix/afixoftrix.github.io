import React from 'react';
import styled from "styled-components";
import { WorksCard } from "../../Components/Cards/ListCard";
import worksList from "./worksList";

const Header = styled.h2`
  width: 100%;
  text-align: center;
`;

const Works = ({ match }) => (
  <div>
    <Header className="h2">Works</Header>
    <div>
      {worksList.map(({ name, desc, link }, i) => (
        <WorksCard
          title={name}
          subtitle={desc}
          link={link}
          key={i}
        />
      ))}
    </div>
  </div>
);

export default Works;
