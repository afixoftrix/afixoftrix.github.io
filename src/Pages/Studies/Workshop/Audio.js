import React from "react";
import ReactAudioPlayer from "react-audio-player";
import AnnotatedImg from "../../../Components/AnnotatedImgs";
import { ProjectPage } from "../../../Components/ProjectPage";

import audioFile from "./assets/final_sound.mp3"



const Audio = ({ picture, title, date }) => {
  return (
    <ProjectPage
      barBg="linear-gradient(90deg, rgba(18,214,223,1) 0%, rgba(0,0,0,1) 54%, rgba(247,15,255,1) 100%)"
      title="The Audio"
      date="November 17, 2020"
      content={
        <div>
          <p className="p" style={{ marginBottom: 20 }}>
            The audio assignment was given to us to explore the world of audio
            creation and editing. Our course introduced us to many concepts
            about audio. We discussed things like microphone types, audio
            clipping, audio editing softwares etc. The range of topics was wide
            and the main purpose was just to paint a picture, ideas in our head
            for when we might need to work with audio as designers.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            In this assignment each individual either created an audio story or
            an Ad. I chose the audio story because I thought it would allow me
            more creative freedom. Like with anything in design or in a creative
            project, it can be difficult to determine what to create. After days
            of contemplating I picked a couple of sounds that would be nice to
            hear and tried to make a dramatic and interesting story out of that.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            My audio story is called "A Soldiers Dream"
          </p>
          <div>
            <ReactAudioPlayer src={audioFile} controls />
          </div>
          <h3>Story</h3>
          <p className="p" style={{ marginBottom: 20 }}>
            “Justin Case is a special-ops soldier living on the edge of
            Christchurch, NZ. He is sleeping one day in his house and has a
            dream. In the dream he is in a helicopter with a couple of his
            platoon members. They have a mission, investigate the cave. After a
            little while Justin and his bothers in arms rappel down from the
            helicopter. The trek to the cave is just a little while through the
            forest. As they approach the entrance, the platoon leader signals
            just as a soldier steps on one of many skulls in front of the cave.
            The squad proceeds silently into the cave. After some steps, Justin
            sees something move and asks his fellow soldiers to be quieter. Then
            comes the come a ghastly growl. To their surprise the there’s a
            monster in the cave. ITS CTHULU! He’s been hiding here for
            centuries. The soldiers are gripped with fear as he rummages through
            their minds.They let out cries of anguish as they spray the cave
            with bullets. It’s to no effect though, as the monster continues to
            torment them. But thankfully for Justin the alarms go off to wake
            him from his nightmarish dream.”
          </p>
          <h3>Process</h3>
          <p className="p" style={{ marginBottom: 20 }}>
            “A Soldier’s Dream” is a sound story composed of multiple audio
            files and edited using Audacity. The initial seed for the story came from an idea of people
            walking in the woods. I like the sounds that come from such a scene.
            Particularly the crackling of twigs and the chirping of birds. The
            idea propagated into what the final version is. I found that working
            on the audio and building a story directly was easier than writing a
            story first. It solved the issue of not being able to find sounds
            for a scene in your written story.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            There are two things I think are interesting to talk about from the
            technical aspects of this clip. The first is the rappelling (using a
            rope to jump off the helicopter) audio scene. This was kind of hard
            to find or illustrate audibly. I remembered some video games I had
            played in the past and that gave me the idea to use zipper sounds to
            simulate the effect. The second thing to mention is the cave scene.
            For this I initially wanted to try the echo effect but it didn’t
            render the way I wanted. The reverb effect however worked wonders.
            I’m still learning this effect but it was able to give me the
            desired effect of cave acoustics.
          </p>
          <p className="p" style={{ marginBottom: 20 }}>
            This was my first time working strictly with audio. I've always shied from non visual forms
            of creativity. This gave assignment gave me a peek into audio creativity. I think it is something that I will
            want to explore more of in the future.
          </p>
        </div>
      }
    />
  );
};

export default Audio;
