import React from 'react';
import AnnotatedImg from '../../../Components/AnnotatedImgs';
import { ProjectPage } from '../../../Components/ProjectPage';

import spray from './assets/spray.png'

export const DesignAnalysis = ({ picture, title, date}) => {
  return (
    <ProjectPage
      barBg="linear-gradient(90deg, rgba(18,214,223,1) 0%, rgba(0,0,0,1) 54%, rgba(247,15,255,1) 100%)"
      title="Design Analysis"
      date="December 15, 2020"
      content={
        <div>
          <p className="p" style={{ marginBottom: 20 }}>
            For this project, we were told to analyze design elements in everday
            objects. We had just studied the first and second paradigms in UCD.
            This assignment was a way to reinforce the lessons of the cognitive
            approach to HCI taugh in the second paradigm.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            Most of the items I picked were ones around me.
          </p>
          <AnnotatedImg
            src={spray}
            txt="The spray gun. This would be a good example of affordance. This is due to the fact that the handle looks as if it were a gun and its also at a wierd angle in relation to the bottle so you just want to make it right by squeezing. Also there are groves in the trigger that sort of invite you to squeeze the trigger."
            alt="a flower"
          />
          <p className="p" style={{ marginBottom: 20 }}>
            This was the first project I had this semester. For me it was very
            insightful. It promted a push to design thinking for me. I saw
            issues everywhere and with everyting.
          </p>
        </div>
      }
    />
  );
}
