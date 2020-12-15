import React from 'react';
import CodeAndArt from "./CAA";
import FIMD from './FIMD';
import PhysicalComputing from './PCOMP';
import Workshop from './Workshop';

//assets
import sprayGun from "../Studies/assets/spraygunTest.png";
import doccufy from "../Studies/assets/doccufy.png";
import numerology from "../Studies/assets/numerology.png";
import asciiart from "../Studies/assets/asciiart.png";

import audio from "../Studies/assets/audio.png";
import photo from "../Studies/assets/photo.png";
import video from "../Studies/assets/video.png";
import website from "../Studies/assets/inception.png";

import entropy from "../Studies/assets/entropy.png"

export default [
  {
    course: "Foundations of Interactive Media Design",
    courseNum: "CS6021",
    semester: "Fall",
    desc:
      "To introduce the student to the theory and evaluation of multimedia systems. In this module, the students will analyse and evaluate a number of existing multimedia systems. The purpose of this is to develop the studentsÆ ability to combine creativity and critical assessment in the context of small-scale prototypes, group work and seminar discussion of theoretical and implementation issues.This module will provide the foundation for the subsequent Multimedia Project 2 and Final Project.",
    projects: [
      {
        name: "Design Analysis",
        picture: sprayGun,
        link: "/design-analysis",
      },
      {
        name: "Doccufy",
        picture: doccufy,
        link: "/doccufy",
      },
    ], //intro into design thinking ptojrct, our project
    path: "/fimd",
    component: FIMD,
  },
  {
    course: "Interactive Media Workshop",
    courseNum: "CS6041",
    semester: "Fall",
    desc:
      "To introduce the student to the theory and evaluation of multimedia systems. In this module, the students will analyse and evaluate a number of existing multimedia systems. The purpose of this is to develop the studentsÆ ability to combine creativity and critical assessment in the context of small-scale prototypes, group work and seminar discussion of theoretical and implementation issues.This module will provide the foundation for the subsequent Multimedia Project 2 and Final Project.",
    projects: [
      {
        name: "The Photo",
        picture: photo,
        link: "/the-photo",
      },
      {
        name: "The Audio",
        picture: audio,
        link: "/the-audio",
      },
      {
        name: "The Video",
        picture: video,
        link: "/the-video",
      },
      {
        name: "The Website",
        picture: website,
        link: "/the-website",
      },
    ], // vid, audio, website, phto
    path: "/workshop",
    component: Workshop,
  },
  {
    course: "Physical Computing",
    courseNum: "CS6051",
    semester: "Fall",
    desc:
      "Students develop their knowledge of physical computing in the context of interactive art, performance and interaction design through a combination of laboratory based small group project work and lecture based learning and research.",
    projects: [
      {
        name: "Entropy",
        picture: entropy,
        link: "/entropy",
      },
    ], // entropy, one of the labs (display lab most likely)
    path: "/physical-computing",
    component: PhysicalComputing,
  },
  {
    course: "Code & Art",
    courseNum: "CS6081",
    semester: "Fall",
    desc:
      "The modules explores code with the aim of using it as an expressive, analytical and critical medium. The emphasis is on the making of art that extend inquiry and exploration in media, culture and communication through the use of code. The practical elements of the module are grounded on a discursive analysis of the philosophical implications and  historical nature of code and coding practices. .",
    projects: [
      {
        name: "Numerology",
        picture: numerology,
        link: "/numerology",
      },
      {
        name: "Lab-HTML-ne.art",
        picture: asciiart,
        link: "/neart",
      },
    ], //numerology and website
    path: "/codeandart",
    component: CodeAndArt,
  },
];