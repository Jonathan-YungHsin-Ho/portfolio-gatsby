---
title: "Onboarding and TechStories"
date: "2020-06-21"
keywords: "blog"
---

I reached the one-month mark at my new job earlier this week and have been reflecting on the onboarding process so far. Granted that I got hired during a global pandemic and started my new job remotely, I wasn't sure what to expect, nor did I know how my experience would differ from "normal" in-person onboarding. Lambda School and various shorter coding bootcamps often market that their students are ready to ship code from Day One, and I had assumed that that would be the expectation.

Instead, my experience has been that rather than shipping code, I've been primarily learning. And there really is quite a lot to learn:

- New industry
- Familiarity with our product
- Company culture, dynamics, and roles
- Workflow and DevOps
- New tech stack (C# .NET, Angular)
- The code base itself

I'm sure I'm leaving things out... how does that saying go, "You don't know what you don't know"? I do feel pretty fortunate that I haven't been rushed to deliver code and contribute immediately.

In any event, I was curious as to what the onboarding experience was like for other entry-level developers and engineers. Most resources online that I've come across for new folks in tech are geared toward learning the technical material and preparation for the interview process, with securing that offer letter as the end goal, the destination. I haven't come across much on what to expect after getting hired.

My curiosity piqued, I posted on the Lambda School Slack channel asking other hired alumni about their onboarding experiences. I especially wanted to know whether the size and type of company (startup versus enterprise) made a key difference in a new hire's experience. A number of people quickly weighed in on the thread, sharing a range of interesting experiences: some feeling rushed and thrown into things, others feeling guided and supported in a more gradual onboarding process.

As Slack goes though, that thread was buried fairly quickly. Nevertheless, I personally found the anecdotes very helpful and illuminating and felt that it would be beneficial for new tech hires to get a sense of what to expect regarding the range of onboarding experiences that they may encounter. As such, I spent some time this past weekend building out a simple web app where visitors could read and share their stories: [TechStories](https://techstories.netlify.app/).

I wanted both to build something quickly and to keep the rust off with the Lambda Stack, so I built the site in ReactJS and Node.js. Having recently worked with Material UI on an Angular project, I decided to switch it up and get in some practice with Semantic UI. (For pretty much all of my previous projects, I styled them by hand using either vanilla CSS or styled-components, rather than using preexisting design systems, to better familiarize myself with CSS. For my more recent projects, I've been wanting to get comfortable working with UI libraries as I'll be working with them more on enterprise-level code).

The project is very basic in its functionality and still a work-in-progress: a visitor to the site can read other people's onboarding stories and quickly add one of their own. There's no signin functionality or user database, which means that anyone can add an entry anonymously but will be unable to edit or remove an existing entry. I plan on adding search and filtering capabilities, and I want to gauge some initial user experience to determine whether to add additional functionality. Any feedback is welcome!
