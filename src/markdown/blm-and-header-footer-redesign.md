---
title: "Black Lives Matter and a Minor Site Redesign"
date: "2020-06-07"
keywords: "blog"
---

I haven't been as focused this past week on tech given what's happening in the world, particularly the nationwide protests against police brutality. It saddens me that the recognition that Black lives matter requires so many voices during a pandemic that's disproportionately devastated that community here in the United States. My hope is that those voices and the risks the protestors are taking will lead to meaningful and long overdue change.

In my previous life as an educator, I tried to do my small part to address racism and other forms of oppression, and I hope to do the same as a software engineer. While I'm early in my career, I'm committed to supporting underrepresented developers in tech, whether as a mentor or in other capacities. Additionally, as I'm planning on relocating to Detroit, I'm committed to educating myself about its history and to living in the city respectfully. I am currently reading [_The Origins of the Urban Crisis_](https://www.amazon.com/Origins-Urban-Crisis-International-Perspectives/dp/0691121869) and would welcome any other book recommendations about Detroit and its history.

An update regarding a minor redesign of this portfolio site...

Over the past few weeks, I noticed that this site wasn't rendering properly on iPhones (As an Android user, I didn't notice this initially). My design had a fixed header and a fixed footer, with the main content of the various pages scrollable between them. While the site looked the way that I wanted on web and Android browsers, I noticed there were serious styling and functional issues with the header and footer on iPhones.

At first, I thought the issue had to do with iOS Safari before noticing it was the same in iOS Chrome as well. Upon further inspection, I realized the bug was resulting from my usage of viewport-height units in my css (vh), particularly using 100vh layouts.

In my design, I was using a parent layout container set to 100vh along with three children flexbox elements--the header, the main content, and the footer--to organize my page. Rather than fixing the header and footer with absolute positioning, I set the main content to grow to fill up any remaining space in the parent container, thus pushing the header to the top of the page and the footer to the bottom. Clever use of flexbox, I thought. Unfortunately, this approach didn't play nicely with the iOS viewport. On an iPhone, both the header and footer content were jumbled on top of each other, and the links in the navigation bar weren't even clickable.

I attempted a variety of fixes, including [CSS media queries](https://medium.com/@susiekim9/how-to-compensate-for-the-ios-viewport-unit-bug-46e78d54af0d), [autoprefixers](https://autoprefixer.github.io/), [JavaScript](https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser), [npm packages](https://github.com/mvasin/react-div-100vh), to [using](https://github.com/gatsbyjs/gatsby/issues/14590) `wrapPageElement` in the `gatsby-browser.js` file. I've linked to some of the various solutions that I've tried, in case anyone is encountering similar issues and may find them useful. What made the issue particularly tricky to debug was that since the site looked fine on my web browsers, including in the mobile views in Chrome inspector, I had to deploy and manually check each debug attempt on a borrowed iPhone.

Ultimately, the above fixes unfortunately either didn't do anything, were insufficient, or introduced new glitchy behavior, and I decided to remove the footer altogether and to avoid using a 100vh layout. I moved the footer toolbar with external links and dark mode toggle up beneath the navigation bar, and locked the updated header in place with fixed positioning.

This may be avoiding the problem altogether rather than unraveling the underlying issue and fixing it, but I'm fairly pleased with the outcome, at least for the time being. The site also looks much better and works on iOS devices now.
