const User = require('./User');

class TravelAgent extends User {
    constructor() {
        super();
        this.id = 'agency';
        this.username = 'agency';
        this.allTrips = [];
    }

    //NOT SURE I ACTUALLY NEED THIS ONE OR THE PROPERTY
    addTrips(trips) {
        trips.forEach(trip => {
            this.allTrips.push(trip);
        });
    }

    findPendingTrips(trips) {
        return trips.filter(trip => {
            return trip.status === 'pending';
        })
    }

    calculateIncome(destinations) {
        let initialCost = this.allTrips.reduce((totalExpenses, trip) => {
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
        return initialCost * .1;
    }

    findTodaysTravelers(trips, today) {
        let todaysTravelers = [];
        trips.forEach(trip => {
            if (!todaysTravelers.includes(trip.userID) && trip.date === today) {
                todaysTravelers.push(trip.userID);
            }
        });
        return todaysTravelers;
    }
}
module.exports = TravelAgent;