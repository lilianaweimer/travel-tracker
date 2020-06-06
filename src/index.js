// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import User from './User';
import Traveler from './Traveler';
import TravelAgent from './TravelAgent';
import domUpdates from '../src/domUpdates';
import fetch from 'node-fetch';
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


let user = new User();
let travelAgent;
let traveler;
let users;
let destinations;
let trips;
let loginButton = document.querySelector('.login-button');

loginButton.addEventListener('click', () => {
    attemptLogin()
});

Promise.all([
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/')
        .then(response => response.json()),
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
        .then(response => response.json()),
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
        .then(response => response.json())
])
    .then(data => createDatasets(data[0], data[1], data[2]))
    .catch(err => console.error(err))

const createDatasets = (userData, destinationData, tripsData) => {
    users = userData.travelers;    
    destinations = destinationData.destinations;    
    trips = tripsData.trips;    
}

const attemptLogin = () => {
    let usernameInput = document.getElementById('username-input').value;
    let passwordInput = document.getElementById('password-input').value;
    let newID = retrieveUserID(usernameInput);
    if (newID) {
        createUser(newID);
        user.logIn(passwordInput);
        checkLogInStatus();
    }
}

const retrieveUserID = (username) => {
    if (username === 'agency') {
        return 'agency';
    } else if (username.includes('traveler')) {
        return parseInt(username.substr(8));
    } else {
        return undefined;
    }
}

const createUser = (newID) => {
    if (newID === 'agency') {
        travelAgent = new TravelAgent(newID);
        user.changeType('agent');
        return travelAgent;
    } else {
        let userInfo = finduserByID(newID);
        traveler = new Traveler(userInfo);
        user.changeType('traveler');
        return traveler;
    }
}

const checkLogInStatus = () => {
    console.log('checking log in status...');
    if (user.loggedIn === true) {
        domUpdates.showDashboard(user);
    }
}

const finduserByID = (id) => {
    return users.find(user => user.id === id);
}

