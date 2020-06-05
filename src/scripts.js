import User from './User';
import Traveler from './Traveler';
import TravelAgent from './TravelAgent';
// import './css/base.scss/';
import domUpdates from '../src/domUpdates';
import fetch from 'node-fetch';

fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/45')
        .then(response => console.log(response.json())),


Promise.all([
    // fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/45')
    //     .then(response => console.log(response.json())),
    // fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
    //     .then(response => response.json()),
    // fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    //     .then(response => response.json())
])
    // .then(data => console.log(data))
    // .catch(err => console.error(err))