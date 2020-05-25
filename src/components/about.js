import React from "react"

import Image from "./image"

const About = () => (
  <>
    <h2>About Me</h2>
    <div style={{ display: `flex` }} className="about-me">
      <div
        style={{
          minWidth: `100px`,
          marginRight: `0.75rem`,
        }}
      >
        <div
          style={{
            maxWidth: `100px`,
            marginBottom: `1.45rem`,
          }}
        >
          <Image />
        </div>
      </div>
      <div>
        <p>
          I'm a full-stack software engineer and former classroom educator who
          enjoys using logical reasoning and problem-solving to bring lines of
          code to life.
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
