const domUpdates = {

    traveler: null,
    travelAgent: null,
    users: null,
    trips: null,
    destinations: null,

    importApiData(users, trips, destinations) {
        this.users = users;
        this.trips = trips;
        this.destinations = destinations;
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
        this.displayWelcome(traveler);
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
        let sortedTrips = traveler.trips.map(trip => {
            trip.date = new Date(trip.date);
            return trip;
        }).sort((a, b) => {
            return b.date - a.date;
        });        
        sortedTrips.forEach(trip => {
            this.displayTrip(trip);
        });
    },

    displayTrip(trip) {
        let tripWidget = document.getElementById('trips');
        console.log(trip);
        
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
        tripWidget.insertAdjacentHTML('beforeend', tripInfo);
    },

    displayWelcome(user) {
        let welcome = document.querySelector('.welcome');
        if (user === traveler) {
            let firstName = traveler.name.split(" ")[0]
            welcome.innerText = `Welcome, ${firstName}!`
        }
    },

}

module.exports = domUpdates;