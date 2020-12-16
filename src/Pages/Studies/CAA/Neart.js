import React from "react";
import AnnotatedImg from "../../../Components/AnnotatedImgs";
import { ProjectPage } from "../../../Components/ProjectPage";
import inputArt from './assets/inputArt.png'

const Neart = ({ picture, title, date }) => {
  return (
    <ProjectPage
      barBg="linear-gradient(90deg, rgba(246,191,117,1) 0%, rgba(215,113,133,1) 35%, rgba(135,102,172,1) 65%, rgba(65,80,177,1) 100%)"
      title="Net Art"
      date="November 8, 2020"
      content={
        <div>
          <p className="p" style={{ marginBottom: 20 }}>
            This mini assignment was an exploration into using HTML and the web
            as platform for art. Now I dont mean taking pictures and putting it
            online for others to see, I mean using actual html, css, and the
            browser as a means to express art. A famous piece of art is:{" "}
            <a
              href="http://wwwwwwwww.jodi.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jodi.org
            </a>
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            For this work, I created a website where I recreated three pieces of
            Net art that was studied in our lectures discussion.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            You can view the live site:{" "}
            <a
              href="http://yoowanacaa.surge.sh/element-art"
              target="_blank"
              rel="noopener noreferrer"
            >
              HERE
            </a>
          </p>
          <AnnotatedImg
            src={inputArt}
            txt="This is an attempt to use the html input element as a form of art."
            alt="input art"
          />
          <p className="p" style={{ marginBottom: 20 }}>
            This assignment opened me up me to the artistic value that can
            sometimes be in mundane things. Infact this course really just
          </p>
        </div>
      }
    />
  );
};

export default Neart;
