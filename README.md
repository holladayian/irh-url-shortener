# URL Shortener UI

Our company is building a knock off of the site [bitly](https://bitly.com/) to shorten long links. The site will take in a long link and give the user a shortened link that they can put in their browser and be taken to the original long link.

For example, this app will be able to:
* Take in a long link like `https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80`
* Submit the long link to a server
* The server will give back a short link like `http://localhost:3001/useshorturl/1`
* The short link will send the user to the same link as the long link! (some server magic that you don't need to worry about)

*Note: the example above will not readily work in the browser*

Wow, that saves a lot of space by making the URL shorter! The back-end API will save all of the URLs that have been submitted to be shortened so the user can come back and use them later.

The back-end server is already setup and ready to go from the back-end team. [The back-end server is located here](https://github.com/turingschool-examples/url-shortener-api).

We need to build a front-end for users to interact with.

## Setup

* Clone down this repo and change into the cloned down directory
* Setup your own GitHub repo so you can push changes to your own profile
* Run `npm install` to install dependencies
* Run `npm start` to start your development server

Be sure to setup the back-end repo for URL Shortener to be able to retrieve and save shortened URLs.

## Iterations

Make sure to read through all iterations before starting. 

### Iteration 1

A developer just left the company, and they started this front-end. Unfortunately, they didn't document their process or where they left off. 

- Read through the front-end code base. Take a look at what urls are currently stored in the server. 
- Connect the front end to the back end. When the App loads, grab any existing urls on the server, and display them on the DOM. 

### Iteration 2

Right now the App component can recieve information from the server, but not send information to it. 

- When the form is submitted, the new url should POST to the the server.
- On a _successful_ POST, the new shortened url should be added to the DOM as well. 

### Iteration 3

Write unit tests for the following components:

- UrlContainer
  - When passed an array of url objects, make sure that headings and anchor tags get rendered appropriately
- UrlForm
  - When the Form is rendered, make sure that the correct elements render on the dom
  - When the inputs change, make sure that the form elements hold the correct values
  - When the form is submitted, make sure any appropriate functions are called.

### Iteration 4

Write some integration (and more unit) tests:
- When the App is rendered, make sure any UI specific to the App component renders as well
- When the App renders, make sure that any urls on the server are added to the dom
- When the App renders, make sure that users can fill out the form, submit the form, and see a new url added to the DOM

### Iteration 5

Add and test delete functionality for a URL (the server side endpoint already exists).

### Iteration 6

Add some sad path testing. For example:
- What should happen if the server sends back a failed request?
- What should happen if the user tries to submit an incomplete form?

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<!-- initial commit -->