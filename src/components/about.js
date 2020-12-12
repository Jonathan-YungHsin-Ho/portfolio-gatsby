import React from "react"

import Photo from "./photo"

const About = () => (
  <>
    <h2>About Me</h2>
    <div className="about-me">
      <div className="about-photo-wrapper-1">
        <div className="about-photo-wrapper-2">
          <Photo />
        </div>
      </div>
      <div>
        <p>
          I'm a full-stack software engineer and former classroom educator (12+
          years experience in public and independent schools) who enjoys using
          logical reasoning and problem-solving to bring lines of code to life.
        </p>
        <br />
        <p>
          I'm a fast learner and doer, adept at building on my prior knowledge
          and finding resources to bridge gaps in my understanding. The
          communication and collaboration skills I've developed as an educator
          and my experience working with diverse groups of people are strengths
          that I bring to all of my pursuits.
        </p>
        <br />
        <p>
          I'm always learning and growing, and I'm excited to apply all that
          I've learned toward finding solutions for real-world problems.
        </p>
        <br />
        <p>
          My interests in making things extend beyond the computer screen; I
          send hand-drawn postcards when I travel, and I make hand-bound
          journals. I'm currently working on a book about my experiences in
          education.
        </p>
      </div>
    </div>
  </>
)

export default About
