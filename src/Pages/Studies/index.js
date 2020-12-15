import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ListCard from '../../Components/Cards/ListCard';
import courseList from './courseList';

const Container = styled.div`

`
const Header = styled.h2`
  width: 100%;
  text-align: center;
`;

const StudiesHome = ({ match }) => (
  <div>
    <Header className="h2">Studies</Header>
    <div>
      { courseList.map(({ course, courseNum, path}, i) => 
      <ListCard title={course} subtitle={courseNum} link={match.url + path} key={i} />)}
    </div>
  </div>
)

export const Studies = ({ match }) => {
  return (
    <Switch>
      {courseList.map(
        ({path, desc, component: Component, projects, course, courseNum}, i) => 
          <Route 
            key={i}
            path={match.url + path}
            component={() => <Component course={course} projects={projects} desc={desc} courseNum={courseNum} />}
          />
        )}
      <Route path="/" component={() => <StudiesHome match={match}/>} />
    </Switch>
  );
};
