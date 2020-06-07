import User from './User';
import Traveler from './Traveler';
import TravelAgent from './TravelAgent';
import domUpdates from '../src/domUpdates';
import fetch from 'node-fetch';
import './css/base.scss';

let user = new User();
let travelAgent;
let traveler;
let users;
let destinations;
let trips;
let fullTripInfo;
const loginButton = document.querySelector('.login-button');
const getTripCostButton = document.querySelector('.cost-button');
const bookTripButton = document.querySelector('.book-button');
const main = document.getElementById('main');

loginButton.addEventListener('click', () => {
    attemptLogin()
});
getTripCostButton.addEventListener('click', () => {
    getBookTripInfo()
});
bookTripButton.addEventListener('click', () => {
    addTripToAPI(fullTripInfo);
    domUpdates.clearBookingFormInputs();
});
main.addEventListener('click', () => {
   manageTripRequest(event);
   searchForClient(event); 
   closeSearch(event);
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

const createDatasets = (userData, tripsData, destinationData) => {
    users = userData.travelers;
    trips = tripsData.trips;
    destinations = destinationData.destinations;
    let date = getTodaysDate();   
    domUpdates.importData(users, trips, destinations, date);    
}

const getTodaysDate = () => {
    let today = new Date();
    today = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`
    return today;
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
        travelAgent.addTrips(trips);
        user.changeType('agent');
        domUpdates.createDomUser(travelAgent);
        return travelAgent;
    } else {
        let userInfo = finduserByID(newID);
        traveler = new Traveler(userInfo);
        user.changeType('traveler');
        domUpdates.createDomUser(traveler);
        return traveler;
    }
}

const checkLogInStatus = () => {
    if (user.loggedIn === true) {
        showDashboard(user);
    }
}

const showDashboard = (user) => {
    if (user.type === 'traveler') {
        showTravelerDashboard();
    } else if (user.type === 'agent') {
        showAgentDashboard();
    }
}

const showTravelerDashboard = () => {
    domUpdates.updateDestinationsDropdown(destinations);
    domUpdates.showTravelerWidgets();
    domUpdates.showTravelerTrips(trips);
    domUpdates.showTravelerExpenses(destinations);
    domUpdates.displayWelcome('traveler');
}

const showAgentDashboard = () => {
    domUpdates.showAgentWidgets();
    domUpdates.showAgentIncome(destinations);
    domUpdates.showCurrentTravelers(trips);
    domUpdates.showPendingTrips(trips);
    domUpdates.displayWelcome('agent');
}

const finduserByID = (id) => {
    return users.find(user => user.id === id);
}

const getBookTripInfo = () => {
    let id = Date.now();
    let userID = traveler.id;    
    let destinationSelection = document.getElementById('book-destination').value; 
    let travelersInput = document.getElementById('book-travelers').value;    
    let dateInput = document.getElementById('book-departure').value;    
    let durationInput = document.getElementById('book-duration').value;    
    destinationSelection = findDestinationFromName(destinationSelection);
    let reformattedDate = dateInput.replace(/-/gi, '/');
    fullTripInfo = {
        id: id,
        userID: userID,
        destinationID: destinationSelection.id,
        travelers: parseInt(travelersInput),
        date: reformattedDate,
        duration: parseInt(durationInput),
        status: 'pending',
        suggestedActivities: [],
    };
    let estimatedCost = getCost(destinationSelection, durationInput, travelersInput);
    domUpdates.displayEstimatedCost(estimatedCost);
}

const addTripToAPI = (tripInfo) => {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tripInfo)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
    fetchTrips();
    domUpdates.updateTrips(trips, [tripInfo]);
}

const fetchTrips = () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips/')
    .then(response => response.json())
    .then(data => addNewTrips(data.trips))
    .catch(err => console.error(err))    
}

const addNewTrips = (newTrips) => {
    trips = newTrips.trips;   
}

const findDestinationFromName = (destinationName) => {
    let fullDestination = destinations.find(destination => destination.destination === destinationName);
    return fullDestination;
}

const getCost = (destination, duration, travelers) => {
    let lodging = destination.estimatedLodgingCostPerDay * duration;
    let flights = destination.estimatedFlightCostPerPerson * travelers;
    let total = lodging + flights;
    return total + (total * .1);
}

const manageTripRequest = (event) => {
    if (event.target.className === 'approve-trip') {
        approveTrip(event);
    } else if (event.target.className === 'delete-trip') {
        deleteTrip(event);
    }
}

const approveTrip = (event) => {
    let tripID = event.target.closest('.trip').id;
    let tripToPost = {
       "id": parseInt(tripID),
       "status": "approved"
    }
    postTripApproval(tripToPost);
    domUpdates.approveTrip(event); 
}

const postTripApproval = (tripToPost) => {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tripToPost)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

const deleteTrip = (event) => {
    let tripID = event.target.closest('.trip').id;
    let tripToDelete = {
        id: parseInt(tripID)
    }
    domUpdates.deleteTrip(event);
    deleteTripFromAPI(tripToDelete);
}

const deleteTripFromAPI = (tripToDelete) => {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tripToDelete)
    })
    .then(response => response.json())
    .catch(err => console.error(err))
}

const searchForClient = (event) => {
    if (event.target.className === 'search-button') {
        let searchInput = document.querySelector('.search-bar').value.toLowerCase();
        let foundUser = users.find(user => {
            return user.name.toLowerCase().includes(searchInput);
        });
        traveler = new Traveler(foundUser);
        domUpdates.createTraveler(traveler);
        domUpdates.displaySearchedUserInfo(foundUser);
    }    
}

const closeSearch = (event) => {
    if (event.target.className === 'close-search') {
        domUpdates.closeSearch(event);
    }
}