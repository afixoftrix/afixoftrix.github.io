import React from "react";
import { ProjectPage } from "../../../Components/ProjectPage";

const Neart = ({ picture, title, date }) => {
  return (
    <ProjectPage picture={picture} title={title} date={date}>
      <div>this should work</div>
    </ProjectPage>
  );
};

export default Neart;
