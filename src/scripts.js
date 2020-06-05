import User from './User';
import Traveler from './Traveler';
import TravelAgent from './TravelAgent';
// import './css/base.scss/';
import domUpdates from '../src/domUpdates';
import fetch from 'node-fetch';

let user;
let destinations;
let trips;
let loginButton = document.querySelector('.login-button');

loginButton.addEventListener('click', domUpdates.attemptLogin())

Promise.all([
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/45')
        .then(response => response.json()),
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
        .then(response => response.json()),
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
        .then(response => response.json())
])
    .then(data => createDatasets(data[0], data[1], data[2]))
    .catch(err => console.error(err))

const createDatasets = (userData, destinationData, tripsData) => {

    destinations = destinationData;
    trips = tripsData;
}