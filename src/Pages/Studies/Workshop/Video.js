import React from "react";
import AnnotatedImg from "../../../Components/AnnotatedImgs";
import { ProjectPage } from "../../../Components/ProjectPage";

import doccufy from './assets/doccufy.png';

const Video = ({ picture, title, date }) => {
  return (
    <ProjectPage
      barBg="linear-gradient(90deg, rgba(18,214,223,1) 0%, rgba(0,0,0,1) 54%, rgba(247,15,255,1) 100%)"
      title="The Video"
      date="December 15, 2020"
      content={
        <div>
          <p className="p" style={{ marginBottom: 20 }}>
            The video assignment was similar to the others in the sense that we were being introduced to a field.
            We were taught concepts about videography. Topics ranged from camera angles and actor positions to topics about
            video editing and adobe premiere
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            For this assignment we made a video advertising the prototype we had created in another module.
            The name of our product was "Doccufy". We went through the entire process of filmaking. We did the brainstorming
            and research. Then we moved onto storyboarding. Through storyboarding we were able to create a script.
            Finally we recorded the video.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            We used quite a bunch of unusual tool for our video. This was due to the familiarity of these tools our members. 
            One member was well versed in Canva video editing. Another was well versed in Mirio. 
            These niche expertise ended up saving us time of having to learn new software.
          </p>
          <AnnotatedImg
            src={doccufy}
            txt="The doccufy is a document organizing prototype that uses physical and digital methods to help organize users documents."
            alt="a flower"
          />
          <p className="p" style={{ marginBottom: 20 }}>
            This was one of the harder things to accomplish because of all the other assignments that were due at the same time.
            What I learned from this assignment is less about the actual subject and more about the team work as a whole. I learned
            that no matter how small, make sure you are doing your part to support your team effort. It makes it easier for everyone.
          </p>
        </div>
      }
    />
  );
};

export default Video;
