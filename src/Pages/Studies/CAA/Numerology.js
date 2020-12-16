import React from "react";
import AnnotatedImg from "../../../Components/AnnotatedImgs";
import { ProjectPage } from "../../../Components/ProjectPage";
import numerology from "./assets/numerology.png";

const Numerology = ({ picture, title, date }) => {
  return (
    <ProjectPage
      barBg="linear-gradient(90deg, rgba(246,191,117,1) 0%, rgba(215,113,133,1) 35%, rgba(135,102,172,1) 65%, rgba(65,80,177,1) 100%)"
      title="Numerology"
      date="November 8, 2020"
      content={
        <div>
          <p className="p" style={{ marginBottom: 20 }}>
            One of the ways cybernetics can express a form of ability to create art
            is through random numbers. In this study of Numerology, we see how computers
            can generate art through randomness. 
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            We used processing, a programming framework based on Java, to explore the concept of numerology.
            Through random number generation we are able to get artistic variations on themes.
          </p>
          <AnnotatedImg
            src={numerology}
            txt="Here is an artwork I created based on the concept of numerology"
            alt="input art"
          />
          <p className="p" style={{ marginBottom: 20 }}>
            Here I learned that the art world is actually crazy if they think computers can be creative by themselves. But that's just me.
          </p>
        </div>
      }
    />
  );
};

export default Numerology;
