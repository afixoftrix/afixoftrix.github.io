import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cards from "../Components/Cards";
import { Footer } from "../Components/Footer";

const HomeContainer = styled.div`
  color: ${(props) => props.theme.text};
  h1 {
    margin-top: 92px;
    text-align: right;
  }
`;

const LinksContainer = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-rows: 375px, 375px;
  gap: 20px;
`;

const HeroSection = styled.div`
  margin-top: 100px;
`;

const Contact = styled.div`
  
`

export const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <h3 className="h3"> Hi, I’m Unwana (OOH-WANA)</h3>
        <p className="p2">
          A frontend engineer currently undergoing a master’s course in
          interaction and experience design at the University of Limerick
        </p>
      </HeroSection>
      <LinksContainer>
        <Link to="/studies">
          <Cards.HomeCard
            title="Studies"
            description="Veiw case studies from things I have done this semester"
          />
        </Link>
        <Link to="/works">
          <Cards.HomeCard
            title="Works"
            description="These are a series of works that I have done over the past 3 years in the field of frontend development."
          />
        </Link>
        <Link to="/about">
          <Cards.HomeCard
            title="About"
            description="More about me?"
          />
        </Link>
      </LinksContainer>
      <Contact>
        <h3>Contact</h3>
        <div>
          <span>tel:</span>
          <span>+234 814 287 3499</span>
        </div>
        <div>
          <span>email 1:</span>
          <span>unwana.essien@outlook.com</span>
        </div>
        <div>
          <span>email 2:</span>
          <span>17079438@studentmail.ul.ie</span>
        </div>
        <div>
          <span>Location:</span>
          <span>Limerick, Ireland</span>
        </div>
      </Contact>
      <Footer />
    </HomeContainer>
  );
};
