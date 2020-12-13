---
title: "From the Lambda stack to Angular"
date: "2020-12-12"
keywords: "blog"
---

Around mid-October or so, I was moved to a different team that has been undertaking a big back-end project. While I'd previously been focused on learning Angular, I've shifted in the past two months to focusing on C# and ASP.NET Core, as those are the language and framework we use to build our APIs.

I thought that it might be useful to write a few blog posts aimed at Lambda School students or alums (or anyone else, really) who are, whether by choice or necessity, learning Angular and C# after first learning React and Node/Express. This post will share some general tips, suggestions, and resources for Angular; a future one will do the same for C# and ASP.NET Core.

Unless its stack has changed in the past few months, [Lambda School](https://lambdaschool.com/) teaches students to build front-end applications using React and back-end APIs using Node.js and the Express framework. Without going into a full review of Lambda School, I think a strength of the program is that students are constantly building projects, both independently (pretty much daily) and on teams, as part of Build Weeks and Labs. To that end, [React](https://reactjs.org/) makes sense as the offered front-end library, given its popularity and relative ease of adoption. While I've tinkered around with [Vue](https://vuejs.org/) (growing in popularity) and [Svelte](https://svelte.dev/) (super lightweight), React and [Angular](https://angular.io/) remain the two most popular libraries/frameworks for front-end development at the time of this post.

I'll start with some differences between the two, before sharing some resources and general tips for transitioning from React to Angular.<br/><br/>

### Differences between React and Angular

#### Library vs Framework

It's fair to say that Angular has a much steeper learning curve than React does. Part of it this is due to how flexible React is. React is a JavaScript library, whereas Angular is a full-fledged, opinionated framework. React allows for more different approaches, especially in component and application organization, while Angular is stricter in terms of code architecture, ways of doing things, and best practices. In my opinion, there are just more concepts to learn when learning Angular.

There are benefits and considerations to both React and Angular, of course. For a simple application, whether a personal project or a small team project for a Build Week or a hackathon, React is much easier to get off the ground and running. For an enterprise application involving coordinating many teams and engineers, there's value to the structure and organization that Angular provides. This isn't to say that enterprises don't use React, but I imagine that those that do must require specific coding standards and best practices around React to ensure that all developers are on the same page.<br/><br/>

#### Functional Programming vs Object-Oriented Programming

Another key difference between React and Angular is that React takes a functional programming approach to the front-end, whereas Angular takes an object-oriented programming approach. This may be a little high-level, and I won't go into the weeds on this, but the main takeaway here is that learning Angular requires learning object-oriented programming more in-depth. While the Lambda curriculum covers general object-oriented programming principles with Python, especially around inheritance, solidifying understanding of OOP principles is important when working with Angular. It's important to have a good grasp of the following:

- What the constructor does
- Interfaces
- Dependency injection

While we covered constructors in Lambda, there were definitely some OOP concepts that didn't quite click for me until working with Angular (and C#).<br/><br/>

#### TypeScript

One additional difference between React and Angular is TypeScript. While TypeScript's optional with React, it's a primary language for Angular application development. Learning TypeScript can seem daunting, but since it's a superset of JavaScript, it's helpful to think of it as JavaScript with additional optional features.

(One key point here... Angular is NOT AngularJS. The simple way to think about it is that AngularJS was Angular 1.0, while Angular is Angular 2.0 and onward. My recommendation is to focus on Angular, as I believe that AngularJS is primarily a legacy framework at this point.)<br/><br/>

### Resources

#### TypeScript

TypeScript can get pretty complex, but it's not necessary to learn all the intricacies right away. As in all things, the fundamentals are the most important. It's fine to focus on the basics and only tackle more complex concepts when needed.

I found [Execute Program](https://www.executeprogram.com/) really useful in getting started with TypeScript and learning the syntax.

Additionally, the TypeScript docs are pretty terrific, and worth exploring:

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript for JavaScript programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Playground](https://www.typescriptlang.org/play)

One additional thought about learning TypeScript for Angular: there are so many resources out there, so I'd focus just on those that describe how to work with TypeScript in Angular. Likewise, if learning TypeScript to use with React, I'd focus on tutorials and resources for that overlap specifically.<br/><br/>

#### Angular

The Angular docs are pretty great, and going through some of the basic tutorials there are useful. I'd recommend spending some time reading through the Angular docs.

Basic tutorials on the Angular site:

- [Getting Started](https://angular.io/start)
- [Tour of Heroes app and tutorial](https://angular.io/tutorial)

I found both of the following free courses very helpful. The [Angular University](https://angular-university.io/home) one is good for getting a quick introduction to some of the general concepts. The [Thinkster](https://thinkster.io/) course goes more in-depth and involves interactive exercises, and I highly recommend it.

Free courses:

- [Angular University](https://angular-university.io/course/getting-started-with-angular2) (2.5 hrs)
- [Thinkster](https://thinkster.io/topics/fundamentals-of-angular) (13 hrs)

In addition to these courses, I'm a big fan of [Pluralsight](https://www.pluralsight.com/), which I have access to via a work license. Pluralsight has a big list of Angular tutorials and conference talks, and I found the specificity of some of the tutorials and talks very helpful when digging into particular Angular topics. I'll likely write a separate post with my recommendations for an Angular "curriculum" on Pluralsight. While Pluralsight has a monthly fee, they often have free trial weekends or weeks.

Finally, [StackBlitz](https://stackblitz.com/) is great for experimenting with Angular (and other frameworks) in the browser. It's great to experimenting with an Angular concept without spinning up a whole new project. I've used it for TypeScript and RxJS as well.<br/><br/>

### Key Angular Concepts

Angular does a lot of things differently than React, from routing to making HTTP calls to how it iterates over arrays. I won't focus too much on those differences here, as I think they're just different ways of approaching things and can be best learned from one of the tutorials above.

I recommend paying attention to the following concepts when learning Angular, as they're not concepts encountered in React:

- **Components, services, and modules.** Angular is pretty particular about where different logic is handled, which isn't something that React enforces. Learning how components and services interact is pretty important.
- **Decorators.** Angular uses decorators quite a bit, to decorate methods and classes. This wasn't something I'd seen in React, as they're a TypeScript feature. I don't know that it's extremely necessary to know what's happening under the hood with these when first starting out with Angular, but seeing the @ symbol everywhere was initially jarring.
- **Routing.** Angular handles routing differently than React and React Router do, but I found it to be fairly straightforward to implement. Vue takes a similar approach to routing, so familiarity with Vue would help with this area.
- **Directives.** Angular directives are a concept that don't exist in React; but I found them to be fairly straightforward and intuitive as well. Again, Vue has a similar directives, so familiarity with Vue helps here.
- **Dependency injection.** I mentioned this earlier when discussing object-oriented programming. This is a key concept when understanding Angular services. It comes up when learning ASP.NET Core as well.
- **RxJS.** RxJS has a pretty steep learning curve itself and borderlines on being an advanced concept in Angular, so I'll dedicate a separate post to it. It's a third-party library that Angular leverages for handling data and can do some really impressive things; I believe it can also be used with React, so it's not Angular-specific. That said, it's a foundational part of Angular and allows for a concept called reactive programming, which is a really cool approach to working with data.<br/><br/>

### General Tips and Suggestions when transitioning from React to Angular

I'll wrap this up for now with some some general tips and suggestions. While these are useful for learning Angular, they pertain to learning other frameworks and technologies as well.

- When learning TypeScript, focus on the basics and fundamentals, as they'll be used far more often than advanced and complex concepts.
- When seeking out resources on concepts tangential to Angular (TypeScript, object-oriented programming, RxJS, etc.), focus on how those topics are implemented specifically in Angular. In other words, focus on when and where TypeScript is used in Angular, which object-oriented programming concepts are key in Angular, and how RxJS is used in Angular. It can be easy to get lost in all the resources, particularly more generalized ones, so specificity is helpful.
- When learning a new concept, I find it helpful to search within my company's codebase to see its implementation.
- When in doubt, read the docs.
- Have fun! When I first started working with Angular, it felt like a lot of boilerplate, or just a lot of magic happening under the hood that I couldn't understand, and I found myself missing the simplicity and flexibility of React. As certain concepts clicked into place though, I started enjoying working with Angular more and more. There's a lot to appreciate about the logic, organization, architecture, and approach of Angular.
