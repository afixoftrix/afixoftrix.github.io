import React from "react";
import { ProjectPage } from "../../../Components/ProjectPage";
import memorygame from './assets/memorygame.png';
import knob from './assets/knob.png';
import AnnotatedImg from "../../../Components/AnnotatedImgs";

const Entropy = ({ picture, title, date }) => {
  return (
    <ProjectPage
      barBg="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"
      title="Entropy"
      date="December 09, 2020"
      content={
        <div>
          <p className="p" style={{ marginBottom: 20 }}>
            The physical computing lab was quite a journey into the space of
            IOT. In this course we learned how to build circuits and write code
            for an Arduino Uno.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            For this project, we were asked to come up with a nuanced responce
            to a specific topic of our choosing. My group partner and I decided
            that we would end up with "Entropy" as our topic.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            The project aims to relay the concept of entropy through an artistic
            perspective using technology as a tool to visualize and materialize
            our expression of the topic. We reiterate the definition that
            entropy moves from order into chaos. Our concept builds upon the
            idea that the universe is ever increasing in chaos. We illustrate
            this with our apparatus which has two systems of order that are
            connected together, that when interacted with at both ends, produce
            disorder.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            For this project we used two arduino with different games that we
            created (The seeking knob, Memory game) and a processing program
            (The Grid). Basically as users play they game, they are moving from
            disorder to order in their system. Both systems are connected by
            what is referred to as "The grid" the grid represents the universe.
            When a user wins or loses their game, it is recorded in the universe
            or "The grid". Therefore, the consequence of winning and losing in
            two random places and time push the universt towards disorder.
          </p>
          <AnnotatedImg
            src={memorygame}
            txt="The Memory game. This would be a good example of affordance. This is due to the fact that the handle looks as if it were a gun and its also at a wierd angle in relation to the bottle so you just want to make it right by squeezing. Also there are groves in the trigger that sort of invite you to squeeze the trigger."
            alt="memory game"
          />
          <AnnotatedImg
            src={knob}
            txt="The Seeking Knob Game. The second game is testing the user’s memory via a memory game. The Arduino blinks different coloured LED's while also omitting a sound that corresponds to each LED, in a randomly generated sequence and the player has to match the sequence order by pressing buttons that correspond to the different coloured LED's. As the game progresses the randomly generated sequence gets longer and more difficult. For every correct entry, there is a green square that is coloured in the grid. If the entry is incorrect, however, there will be a error noise, all the LED's will blink and a yellow square is entered into the grid pattern. The game will start again, issuing a new random sequence.  This is not as time sensitive as the previous game; however it is not turn dependent and but dependent on how fast you enter the sequence."
            alt="knob"
          />
          <p className="p" style={{ marginBottom: 20 }}>
            This project showed me the broader possibilities of iot.
          </p>
        </div>
      }
    />
  );
};

export default Entropy;
