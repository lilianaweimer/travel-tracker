const User = require('./User');

class Traveler extends User {
    constructor(id, userData) {
        super(id);
        this.username = undefined;
        this.trips = [];
        this.name = userData.name;
    }

    generateUsername(userID) {
        this.username = `traveler${this.id}`;
    }

    addTrips(trips) {
        trips.forEach(trip => {
            if (trip.userID === this.id) {
                this.trips.push(trip);
            }
        });
    }

    calculateAnnualTravelExpenses(destinations) {
        let initialCost = this.trips.reduce((totalExpenses, trip) => {
            let tripExpense;
            for (const destination of destinations) {
                if (destination.id === trip.destinationID) {
                    let flightCost = trip.travelers * destination.estimatedFlightCostPerPerson;                    
                    let lodgingCost = trip.duration * destination.estimatedLodgingCostPerDay;                    
                    tripExpense = (flightCost + lodgingCost);
                }
            }
            totalExpenses += tripExpense;
            return totalExpenses;
        }, 0);
        return initialCost + (initialCost * .1);
    }
}

module.exports = Traveler;