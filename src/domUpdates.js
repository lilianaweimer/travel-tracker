const domUpdates = {

    showDashboard(user) {
        if (user.type === 'traveler') {
            this.showTravelerDashboard(user);
        } else if (user.type === 'agent') {
            this.showAgentDashboard();
        }
    },

    showTravelerDashboard(user) {
        const travelerExpenses = document.querySelector('.traveler.header-widget');
        const travelerTrips = document.getElementById('trips');
        const travelerBookTrip = document.getElementById('book-trip');
        const logInWidget = document.querySelector('.login-widget');
        logInWidget.classList.add('hidden');
        travelerExpenses.classList.remove('hidden');
        travelerTrips.classList.remove('hidden');
        travelerBookTrip.classList.remove('hidden');

    },

}

module.exports = domUpdates;