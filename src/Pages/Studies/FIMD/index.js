import React from 'react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';
import ProjectCard from '../../../Components/Cards/ProjectCard';
import { DesignAnalysis } from './DesignAnalysis';
import Doccufy from './Doccufy';


const Title = styled.h2`
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 30px 0;
`;

const Description = styled.div`
  margin-bottom: 36px;
`;

const CourseInfo = styled.div`
  padding-top: 10px;
  margin-bottom: 20px;

  .split {
    display: flex;
    justify-content: space-between;
  }
`;

const ProjectsTitle = styled.h3`
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
`;


const FIMDHome = ({course, courseNum, desc, projects, match}) => {
  return (
    <div>
      <Title className="h2">{course}</Title>
      <CourseInfo>
        <div className="split">
          <div className="subtitle">Course No.</div>
          <div className="subtitle">Semester</div>
        </div>
        <div className="split">
          <div className="p">{courseNum}</div>
          <div className="p">Fall</div>
        </div>
      </CourseInfo>
      <Description>
        <div className="subtitle">Description</div>
        <div>{desc}</div>
      </Description>
      <ProjectsTitle className="h3">Projects</ProjectsTitle>
      <div>
        {projects.map(({ name, picture, link }, i) => (
          <ProjectCard
            name={name}
            picture={picture}
            link={match.url + link}
            num={i + 1}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

const FIMD = ({ course, desc, projects, match, courseNum }) => {
  return (
    <Switch>
      <Route path={match.url + "/design-analysis"} exact component={DesignAnalysis} />
      <Route path={match.url + "/doccufy"} exact component={Doccufy} />
      <Route path={match.url + "/"} component={() => 
        <FIMDHome 
          course={course} 
          courseNum={courseNum}
          desc={desc} 
          projects={projects} 
          match={match} 
        />} 
      />
    </Switch>
  );
  
}

export default withRouter(FIMD);