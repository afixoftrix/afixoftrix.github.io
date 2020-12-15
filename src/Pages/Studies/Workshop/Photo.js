import React from "react";
import AnnotatedImg from "../../../Components/AnnotatedImgs";
import { ProjectPage } from "../../../Components/ProjectPage";

import bloom from './assets/bloom.png';
import chair from './assets/chair.png';
import eternity from './assets/eternity.png';

const Photo = ({ picture, title, date }) => {
  return (
    <ProjectPage
      barBg="linear-gradient(90deg, rgba(18,214,223,1) 0%, rgba(0,0,0,1) 54%, rgba(247,15,255,1) 100%)"
      title="The Photo"
      date="October 20, 2020"
      content={
        <div>
          <p className="p" style={{ marginBottom: 20 }}>
            The photography assignment was given to us to practice and build
            upon the lectures and studies from class. In the lectures we learned
            about various aspects of photography. We looked at things like ISO,
            shutterspeed and aperture. With this assignment, we were given a
            theme. In this instance of the project assignment, our theme was
            "Life". The photos I took were mostly nuanced responses to the
            theme. Here are some of the photographs I took:
          </p>
          <AnnotatedImg
            src={bloom}
            txt="Languorous Bloom. This is a photo of an artificial flower. The statement made here is that the beauty of life can also be found in the non-living. (Cannon EOS 1300D / Photoshop)"
            alt="a flower"
          />
          <AnnotatedImg
            src={chair}
            txt="The Chair. This is a photo of my set up back in Nigeria from where I initially started the course. The image is an illustration of the current state of living for most people as they have had to isolate and work from home. (Cannon EOS 1300D / Photoshop)"
            alt="a chair"
          />
          <AnnotatedImg
            src={eternity}
            txt="Eternity. Called so because if you look closeley you can see a faint hint of a deity at the center of the piece. Through experimentation with plant photographs that I had taken I stumbled upon this. I think the story is also synonymous to ones about human contact with gods. (Cannon EOS 1300D / Photoshop) "
            alt="a flower"
          />
          <p className="p" style={{ marginBottom: 20 }}>
            In the past (over decade ago at this point), I had quite an
            extensive use of photoshop. As I progressed I lost the use of the
            software as I tried to navigate my way through a career path that
            never panned out. This assignment reminded me of my interest in
            digital photography and arts. My biggest take from this assignment
            was the return to photoshop and its current capabilities today. It
            was also very fun because I got to be creative again.
          </p>
        </div>
      }
    />
  );
};

export default Photo;
