const domUpdates = {

    traveler: null,
    travelAgent: null,
    users: null,
    trips: null,
    destinations: null,
    today: null,

    importData(users, trips, destinations, date) {
        this.users = users;
        this.trips = trips;
        this.destinations = destinations;
        this.today = date;
    },

    updateTrips(trips, tripInfo) {
        this.trips = trips;
        this.showTravelerTrips(tripInfo);
    },

    createTraveler(newTraveler) {
        this.traveler = newTraveler;
    },

    createDomUser(user) {
        if (user.id === 'agency') {
            travelAgent = user;
        } else {
            traveler = user;
        }
    },

    updateDestinationsDropdown() {
        let dropdown = document.querySelector('.dropdown');
        let sortedDestinations = this.destinations.sort((a, b) => {
            let destinationA = a.destination.toLowerCase();
            let destinationB = b.destination.toLowerCase();
            if (destinationA < destinationB) {
                return -1
            }
            if (destinationA > destinationB) {
                return 1
            }
            return 0;
        });
        sortedDestinations.forEach(destination => {
            let destinationOption = `
            <option value='${destination.destination}' id='${destination.id}'>${destination.destination}</option>
            `;
            dropdown.insertAdjacentHTML('beforeend', destinationOption);
        });
    },

    showTravelerWidgets() {
        const travelerExpenses = document.querySelector('.traveler.header-widget');
        const travelerTrips = document.getElementById('trips-display');
        const travelerBookTrip = document.getElementById('book-trip');
        const logInWidget = document.querySelector('.login-widget');
        logInWidget.classList.add('hidden');
        travelerExpenses.classList.remove('hidden');
        travelerTrips.classList.remove('hidden');
        travelerBookTrip.classList.remove('hidden');
    },

    showTravelerExpenses(destinations) {      
        const expenses = traveler.calculateAnnualTravelExpenses(destinations);
        document.querySelector('.amount-spent').innerText = `$${expenses}`;
    },

    showTravelerTrips(trips) {        
        traveler.addTrips(trips);        
        this.removeTrips();        
        let sortedTrips = this.sortTripsByDate(traveler.trips);        
        let tripWidget = document.getElementById('trips-display');
        sortedTrips.forEach(trip => {
            let destination = this.destinations.find(destination => {
                return trip.destinationID === destination.id;
            });
            trip.date = `${trip.date.getFullYear()}/${trip.date.getMonth()}/${trip.date.getDate()}`;
            let tripInfo = `
                <article class='trip'>
                    <h4>${destination.destination}</h4>
                    <img src='${destination.image}' alt='${destination.alt}' class="trip-image"/>
                    <p>Departure: ${trip.date}</p>
                    <p>Days: ${trip.duration}</p>
                    <p>Travelers: ${trip.travelers}</p>
                    <p>Status: ${trip.status}</p>
                </article>`;   
            this.displayTrip(tripWidget, tripInfo);
        });        
    },

    showAgentWidgets() {
        const agentIncome = document.getElementById('agent-income');
        const currentTravelers = document.getElementById('current-travelers');
        const agentSearch = document.getElementById('find-traveler');
        const pendingTrips = document.getElementById('pending-trips')
        const logInWidget = document.querySelector('.login-widget');
        logInWidget.classList.add('hidden');
        agentIncome.classList.remove('hidden');
        currentTravelers.classList.remove('hidden');
        agentSearch.classList.remove('hidden');
        pendingTrips.classList.remove('hidden');
    },

    showPendingTrips(trips) {
        let pending = travelAgent.findPendingTrips(trips);
        let sortedPending = this.sortTripsByDate(pending);
        const displayTo = document.getElementById('pending-trips');
        sortedPending.forEach(trip => {
            let destination = this.destinations.find(destination => {
                return trip.destinationID === destination.id;
            });
            trip.date = `${trip.date.getFullYear()}/${trip.date.getMonth()}/${trip.date.getDate()}`
            const tripHTML = `
            <article class='trip' id='${trip.id}'>
                <h4>${this.findUserName(trip.userID)}</h4>
                <img src='${destination.image}' alt='${destination.alt}' class="trip-image"/>
                <p>${trip.date}</p>
                <p>Destination: ${destination.destination}</p> 
                <p>Duration: ${trip.duration} days</p>
                <p>Walkers: ${trip.travelers}</p>
                <p>Status: ${trip.status}</p>
                <button class='approve-trip'>Approve</button>
                <button class='delete-trip'>Delete</button>
            </article>`;
            this.displayTrip(displayTo, tripHTML);
        });
    },

    removeTrips() {
        let tripCards = document.getElementsByClassName('trip');
        while (tripCards[0]) {
            tripCards[0].parentNode.removeChild(tripCards[0]);
        }
    },

    deleteTrip(event) {
        let article = event.target.closest('.trip');
        article.innerHTML = `<h4>Deleted!</h4>`
    },

    approveTrip(event) {
        let article = event.target.closest('.trip');
        article.innerHTML = `<h4>Approved!</h4>`
    },

    findUserName(id) {
        let user = this.users.find(user => user.id === id);
        return user.name;
    },

    showAgentIncome(destinations) {
        const income = travelAgent.calculateIncome(destinations);
        document.querySelector('.amount-earned').innerText = `$${income}`
    },

    showCurrentTravelers() {
        const travelers = travelAgent.findTodaysTravelers(this.trips, this.today)
        document.querySelector('.todays-travelers').innerText = `${travelers.length}`;
    },

    displayWelcome(user) {
        let welcome = document.querySelector('.welcome');
        if (user === 'traveler') {
            let firstName = traveler.name.split(" ")[0]
            welcome.innerText = `Welcome, ${firstName}!`
        } else if (user === 'agent') {
            welcome.innerText = 'Welcome, Wilbur!';
        }
    },

    sortTripsByDate(tripsToSort) {
        return tripsToSort.map(trip => {
            trip.date = new Date(trip.date);
            return trip;
        }).sort((a, b) => {
            return b.date - a.date;
        });       
    },

    displayTrip(tripWidget, tripInfo) {
        tripWidget.insertAdjacentHTML('beforeend', tripInfo);
    },

    displayEstimatedCost(cost) {
        let button = document.querySelector('.cost-button');
        let newHTML = `
        <div>
        <h4>Estimated Cost (10% fee included): $${cost}</h4>
        `;
        document.querySelector('.book-button').classList.remove('hidden');
        button.classList.add('hidden');
        button.insertAdjacentHTML('beforebegin', newHTML); 
    },

    clearBookingFormInputs() {
        document.getElementById('book-destination').value = ''; 
        document.getElementById('book-travelers').value = '';    
        document.getElementById('book-departure').value = '';    
        document.getElementById('book-duration').value = '';
    },

    displaySearchedUserInfo(searchedUser) {
        this.traveler.addTrips(this.trips);
        document.getElementById('search').classList.add('hidden');
        let travelerInfoSection = document.getElementById('find-traveler');
        travelerInfoSection.innerHTML = `
        <section id='search-results' class='main-widget'>
        <h2 class='trips-header'>${this.traveler.name}</h2>
        <p>Total spent on travel: $${this.traveler.calculateTotalTravelExpenses(this.destinations)}</p>
        <h4>Trips:</h4>
        <section class='searched-trips'></section>
        <button class='close-search'>Back to Search</button>
        </section>
        `;
        this.displaySearchedTrips();
    },

    closeSearch(event) {
        // document.getElementById('search-results').remove();
        // document.getElementById('search').classList.remove('hidden');
    },

    displaySearchedTrips() {
        let searchedTrips = document.querySelector('.searched-trips');
        let sortedTrips = this.sortTripsByDate(this.traveler.trips);
        sortedTrips.forEach(trip => {
            let destination = this.destinations.find(destination => {
                return trip.destinationID === destination.id;
            });
            trip.date = `${trip.date.getFullYear()}/${trip.date.getMonth()}/${trip.date.getDate()}`
            if (trip.status === 'pending') {
                this.insertPendingHTML(destination, trip, searchedTrips);
            } else if (trip.status === 'approved') {
                this.insertApprovedHTML(destination, trip, searchedTrips);
            }
        });
    },


    insertPendingHTML(destination, trip, searchedTrips) {
        searchedTrips.insertAdjacentHTML('beforeend', `
        <article class='trip' id='${trip.id}'>
            <h4>${destination.destination}</h4>
            <p>Departure: ${trip.date}</p>
            <p>Duration: ${trip.duration}</p>
            <p>Walkers: ${trip.travelers}</p>
            <button class='approve-trip'>Approve</button>
            <button class='delete-trip'>Delete</button>
        </article>
        `);
    },

    insertApprovedHTML(destination, trip, searchedTrips) {
        searchedTrips.insertAdjacentHTML('beforeend', `
        <article class='trip' id='${trip.id}'>
            <h4>${destination.destination}</h4>
            <p>Departure: ${trip.date}</p>
            <p>Duration: ${trip.duration}</p>
            <p>Walkers: ${trip.travelers}</p>
            <button class='delete-trip'>Delete</button>
        </article>
        `);
    },

}

module.exports = domUpdates;