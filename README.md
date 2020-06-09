# Dodo Airlines Travel Tracker

## Abstract
This is the final solo project for the Turing School of Software & Design's Front-End Engineering Mod 2. The goal of the project was to create a travel-tracking application where users can log in as either a traveler or a travel agent. Each should have different dashboard and functionality. The goals, per the spec (available [here](https://frontend.turing.io/projects/travel-tracker.html)): 
- Use OOP to drive the design of the application and the code
- Work with an API to send and receive data
- Solidify the code review process
- Create a robust test suite that thoroughly tests all functionality of a client-side application

The planning document used can be viewed [here](https://docs.google.com/document/d/1BFD7r5Gi9X7SjpSHkElURUxi1DgkTCw65r0Aw7FXhdg/edit?usp=sharing).

Note: The theme I chose was Dodo Airlines from Animal Crossing: New Horizons (which is why the agent login says "Welcome, Wilbur!").

## Deployed Site Link


## Technologies Used
- HTML
- CSS/SCSS/Sass
- Vanilla Javascript
- Git/GitHub
- Webpack
- Fetch API
- Mocha, Chai, & Chai Spies testing

## In Action

Logging in as a travel agent (top) and a traveler (bottom):

<img src="./src/images/dodo-agentlogin.gif" width="75%" height="auto" alt="using the username 'agency' and a password to log in and view the agency dashboard">
<img src="./src/images/dodo-clientlogin.gif" width="75%" height="auto" alt="using the username 'traveler45' and a password to log in and view the traveler dashboard">

Booking trips as a traveler:

<img src="./src/images/dodo-booktrips.gif" width="75%" height="auto" alt="booking two trips using the booking form as a traveler, which then appear in 'your trips' as pending approval">

Approving and deleting trips as the agency:

<img src="./src/images/dodo-pending.gif" width="75%" height="auto" alt="approving one of the trips booked above and deleting the other in the 'pending trips' section of the agency page. the text on the trip cards is replaced with 'approved!' and 'deleted!' respectively.">

Searching for a traveler as the agency:

<img src="./src/images/dodo-search.gif" width="75%" height="auto" alt="searching for a client by name in the search bar, and approving one trip and deleting another of their trips that appear. then searching for another client with a different name.">


## Deploying to GitHub Pages

_If you are finished with the functionality and testing of your project_, then you can consider deploying your project to the web! This way anyone can play it without cloning down your repo.

[GitHub Pages](https://pages.github.com/) is a great way to deploy your project to the web. Don't worry about this until your project is free of bugs and well tested!

If you _are_ done, you can follow [this procedure](./gh-pages-procedure.md) to get your project live on GitHub Pages.
