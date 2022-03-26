# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [ ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [ ] Open the assignment in Canvas and click on the "Set up git" option (Or, depending, if you see something along the lines of 'Load Sprint Challenge Submission in a new window' click that).
- [ ] Wire your fork to Codegrade using the "Click here for instructions on setting up Git submissions" link, select Github, authorize Github.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`. MAKE SURE TO PUSH TO MAIN, YOU NO LONGER NEED TO CREATE A NEW BRANCH!!
- [ ] Make commits often! PUSH TO MAIN!!!
- [ ] You can run tests locally by running npm run test.
- [ ] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://tk-assets.lambdaschool.com/b011a132-0916-4ed2-8955-14192de03a75_sample-screenshot.png)

[Another example](https://tk-assets.lambdaschool.com/3b82c793-2352-4d4d-a81d-e55bf350f7bd_sample-screenshot2.png)

### Instructions

Your finished project must include all of the following requirements:

- [ ] Use the endpoint `[GET] https://swapi.dev/api/people` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
- [ ] Set the list of characters into state.
- [ ] Render your characters to the DOM:

  1. Build a React component named 'Character' to render an individual character.
  1. Map over the list in state, and for each character render a Character to the page.
  1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. The components must be styled with **styled-components**.

  **Notes:**

- Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw).
- If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any the following optional goals:

- [ ] Make the Character component more complex and break it into several subcomponents.
- [ ] Use the endpoint `[GET] https://swapi.dev/api/films` (mocked in msw) to obtain movie information to render with the characters.
- [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [ ] Create transitions or animations with styled-components.
- [ ] Use Promise.all to resolve an array of promises.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the main branch.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Put your answers underneath the questions:

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
  
  ReactJS is an open-source javascript library which allows for rapid development of User Interfaces by harnessing the unifying power of components. This allows UIs to be constructed in a modular manner with reusable components (the term modular being used in both the classical sense and in the JS-modules sense). ReactJS allows for HTML and CSS to be fluidly integrated with javascript, allowing each component to be constructed in place, as a unified whole, without having to bounce around between .js, .css., and .html files, scattering the myriad pieces of each component in so many different locations.

  Imagine you're constructing a profession-looking Lego shopping mall (is there a such thing as a profession Lego builder? No matter.). Rather than just adding and removing Lego pieces as the whim takes you, you'd want to plan things out ahead. Furthermore, you'd notice that there's a great deal of repetition going on in your construction. You'd want to figure out which parts of your construction you can do assembly-line style, and which elements of each store or area have to be individualized. Then, as you plan out how to put together each section, you'd visualize the process, turning the model over and over again in your head and running through the construction steps. Finally, you'd grab the Legos and apply the process that you just imagined.
  
  This is similar to the way React operates. React creates what is called the ReactDOM. This exists as a sort of conceptual construct. The React MotherBrain runs through the code it's been given, mentally updating the ReactDOM per instruction. When it has enough changes processed, it batch-applies them to the actual DOM, but only updating the parts which are actually changed (as opposed to directly changing the actual DOM for each step which is notoriously cumbersome).This can provide some considerable speed benefits.

  Components make this process considerably more efficient. Components are essentially functions which produce reusable pieces of a UI -- just like stores or kiosks or parking spaces or elevators are manufactured elements of a mall. UIs are comprised of <div> and <p> and <button> elements which tend to follow the same pattern for construction. Components handle that construction for the React MotherBrain.

  Ultimately, however, the whole purpose of the UI is to convey information. Each store needs its own sign and content. Some parking spaces are handicapped, others are contactless-pickup. And all of these individualizing-details tend to change over time, as well. This is where React introduces the concept of 'state.' State is essentially the sum of all individualized data at any given moment in time. This data is typically handled by the primary component, the one in which all other components reside. In React applications, this component is traditionally called "App." App is the equivalent of the high-mucketty-muck in charge of Lego mall construction, and is considered the "source of truth" for the application.  

  This concept of "source of truth" is essential to the functioning of the application. All truth originates in this App component (state items are declared through the {useState} hook) and it is passed down as needed to its inner components (and to their inner components, and to theirs) by including the requisite data items in each element's properties (known familiarly as "props"). These components are forbidden from directly altering the data, though the App may pass down to them the ability to call one of App's own methods to update the data. 

  The more errant-thinking reader might now be asking: but how does this self-contained application then interact with the document object or external apis? To start, App selectively renders to the dom whichever components it determines to be needful using the ReactDOM.render() method. Then, through the {useEffect} hook, it can send a GET request to an external API, can set or remove an eventListener, or can selectively update components with changing state data. This allows for the synchronization of effects with various happenings throughout a components lifetime (and effectively replaces the componentDidMount, componentDidUpdate, and componentWillUnmount methods).

2. Describe component state.
See above.
3. Describe props.
See above.
4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
See above.
