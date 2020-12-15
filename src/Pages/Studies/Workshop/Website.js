import React from "react";
import AnnotatedImg from "../../../Components/AnnotatedImgs";
import { ProjectPage } from "../../../Components/ProjectPage";
import portfolio from "./assets/portfolio.png";
import typography from "./assets/typography.png";


const Website = ({ picture, title, date }) => {
  return (
    <ProjectPage
      barBg="linear-gradient(90deg, rgba(18,214,223,1) 0%, rgba(0,0,0,1) 54%, rgba(247,15,255,1) 100%)"
      title="The Website"
      date="December 15, 2020"
      content={
        <div>
          <p className="p" style={{ marginBottom: 20 }}>
            The website assignment was to create a portfolio of all the things
            that we had done in the semester. The aim of this assignment was to
            foster better understanding of web development. The lectures leading
            to this assignment were on html, css, javascript, and best practices
            for things like information architecture and responsive web
            development
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            For this assignment I used React, my bread and butter tool of trade.
            I also used desgin tools (since im training to be a designer now),
            primarily Figma. I even created a typography set as well grid
            settings for the UI design. I didn’t follow it as strictly as one
            would in the industry but it was nice to expose my self to these
            practices.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            For React, I used quite a number of libraries. Most notably "react-router" and "styled-components".
            React-router lets me route pages in the browser. There are some issues though, for instance
            the build version of the app doesn't work particularly well with github hosting.
            Styled-components are used to write css in javascript from. I like this because it makes styles easy
            to change programatically. For instance, I am able to build the ground work for a light and dark mode version
            using styled-components. In the future, I might be able to complete it for this portfolio.
          </p>
          <AnnotatedImg
            src={portfolio}
            txt="Here is what my Portfolio design looked like on Figma. My approach was to build with a mobile first mindset. (Figma)"
            alt="a flower"
          />
          <AnnotatedImg
            src={typography}
            txt="Here I'm trying to go full designer mode and designing my own typography system.(Figma)"
            alt="a flower"
          />
          <p className="p" style={{ marginBottom: 20 }}>
            Since I was already familiar with the building process, I focused my
            learning attention on the design aspects of the project. I went
            through the eight principles of information architecture. I also did
            personal research into visual design. I found this project fun. It
            kept me practicing my trade so I'm thankful for that.
          </p>
        </div>
      }
    />
  );
};

export default Website;
