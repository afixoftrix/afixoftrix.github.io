import React from "react";
import AnnotatedImg from "../../../Components/AnnotatedImgs";
import { ProjectPage } from "../../../Components/ProjectPage";

import doccufy from './assets/doccufy.png'

export const Doccufy = ({ picture, title, date, content }) => {
  return (
    <ProjectPage
      barBg="linear-gradient(90deg, rgba(18,214,223,1) 0%, rgba(0,0,0,1) 54%, rgba(247,15,255,1) 100%)"
      title="Doccufy"
      date="December 15, 2020"
      content={
        <div>
          <p className="p" style={{ marginBottom: 20 }}>
            Doccufy is the name of our prototype for the second assignment in the Foundations of Interactive Media Design course.
            For this project we practiced the first three of the four stages of design which are research, design, prototype, evaluate.
            This was a group effort and as such it simulated real world design scene.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            Most of the items I picked were ones around me.
          </p>
          <AnnotatedImg
            src={doccufy}
            txt="The Capture Tool. This is a part of the physical aspect of our prototype"
            alt="a flower"
          />
          <p className="p" style={{ marginBottom: 20 }}>
            This was a very educational project.
          </p>
        </div>
      }
    />
  );
};

export default Doccufy;
