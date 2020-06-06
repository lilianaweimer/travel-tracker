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
            this.showTravelerDashboard(user);
        } else if (user.type === 'agent') {
            this.showAgentDashboard();
        }
    },

    showTravelerDashboard() {
        this.showTravelerWidgets();
        this.showTravelerTrips(this.trips);
        this.showTravelerExpenses(this.destinations);
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

    },

}

module.exports = domUpdates;