const domUpdates = {

    traveler: null,
    travelAgent: null,
    users: null,
    trips: null,
    destinations: null,
    today: null,

    getTodaysDate() {
        let today = new Date();
        today = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`
        this.today = today;
    },

    importApiData(users, trips, destinations) {
        this.users = users;
        this.trips = trips;
        this.destinations = destinations;
        this.getTodaysDate();
    },

    createDomUser(user) {
        if (user.id === 'agency') {
            travelAgent = user;
        } else {
            traveler = user;
        }
    },

    showDashboard(user) {
        if (user.type === 'traveler') {
            this.showTravelerDashboard();
        } else if (user.type === 'agent') {
            this.showAgentDashboard();
        }
    },

    showTravelerDashboard() {
        this.showTravelerWidgets();
        this.showTravelerTrips(this.trips);
        this.showTravelerExpenses(this.destinations);
        this.displayWelcome('traveler');
    },

    showAgentDashboard() {
        this.showAgentWidgets();
        this.showAgentIncome(this.destinations);
        this.showCurrentTravelers(this.trips);
        this.showPendingTrips(this.trips);
        this.displayWelcome('agent');
    },

    showTravelerWidgets() {
        const travelerExpenses = document.querySelector('.traveler.header-widget');
        const travelerTrips = document.getElementById('trips');
        const travelerBookTrip = document.getElementById('book-trip');
        const logInWidget = document.querySelector('.login-widget');
        logInWidget.classList.add('hidden');
        travelerExpenses.classList.remove('hidden');
        travelerTrips.classList.remove('hidden');
        travelerBookTrip.classList.remove('hidden');
    },

    showTravelerExpenses(trips) {
        const expenses = traveler.calculateAnnualTravelExpenses(trips);
        document.querySelector('.amount-spent').innerText = `$${expenses}`
        
    },

    showTravelerTrips(destinations) {
        traveler.addTrips(destinations);
        let sortedTrips = this.sortTripsByDate(traveler.trips);
        let tripWidget = document.getElementById('trips');
        sortedTrips.forEach(trip => {
            let destination = this.destinations.find(destination => {
                return trip.destinationID === destination.id;
            });
            let cleanDate = `${trip.date.getMonth()}/${trip.date.getDate()}/${trip.date.getFullYear()}`
            let tripInfo = `
                <article class='trip'>
                    <h4>${destination.destination}</h4>
                    <img src='${destination.image}' alt='${destination.alt}' class="trip-image"/>
                    <p>${cleanDate}</p>
                    <p>${trip.duration} days</p>
                    <p>${trip.travelers} happy travelers</p>
                    <p>Status: ${trip.status}</p>
                </article>`;   
            this.displayTrip(tripWidget, tripInfo);
        });
    },

    displayTrip(tripWidget, tripInfo) {
        tripWidget.insertAdjacentHTML('beforeend', tripInfo);
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
            let cleanDate = `${trip.date.getMonth()}/${trip.date.getDate()}/${trip.date.getFullYear()}`
            const tripHTML = `
            <article class='trip'>
                <h4>${destination.destination}</h4>
                <img src='${destination.image}' alt='${destination.alt}' class="trip-image"/>
                <p>${cleanDate}</p>
                <p>Client Name: ${this.findUserName(trip.userID)}</p> 
                <p>Duration: ${trip.duration} days</p>
                <p>Happy Travelers: ${trip.travelers}</p>
                <p>Status: ${trip.status}</p>
                <button class='approve-trip'>Approve</button>
                <button class='delete-trip'>Delete</button>
            </article>`;
            this.displayTrip(displayTo, tripHTML);
        });
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
        const travelers = travelAgent.findTodaysTravelers(this.trips, this.today);
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

}

module.exports = domUpdates;