import chai from 'chai';
const expect = chai.expect;
const User = require('../src/User');
const Traveler = require('../src/Traveler');
const TravelAgent = require('../src/TravelAgent');

describe('Travel Agent', function() {
    let user;
    let traveler;
    let travelAgent;
    let today = '2020/06/04';
    let agentData = {};
    let userData = {
        "id": 45,
        "name": "Ofilia Titman",
        "travelerType": "thrill-seeker"
    };
    let trips = [
        {
            "id": 45,
            "userID": 45,
            "destinationID": 5,
            "travelers": 6,
            "date": "2020/09/06",
            "duration": 9,
            "status": "approved",
            "suggestedActivities": []
        },
        {
            "id": 49,
            "userID": 54,
            "destinationID": 35,
            "travelers": 1,
            "date": "2020/06/04",
            "duration": 16,
            "status": "approved",
            "suggestedActivities": []
        },
        {
            "id": 144,
            "userID": 45,
            "destinationID": 13,
            "travelers": 2,
            "date": "2020/06/04",
            "duration": 4,
            "status": "approved",
            "suggestedActivities": []
        },
        {
            "id": 3456,
            "userID": 6543,
            "destinationID": 25,
            "travelers": 5,
            "date": "2020/08/22",
            "duration": 7,
            "status": "pending",
            "suggestedActivities": []
        },
        {
            "id": 6543,
            "userID": 3465,
            "destinationID": 23,
            "travelers": 7,
            "date": "2020/07/13",
            "duration": 25,
            "status": "pending",
            "suggestedActivities": []
        }
    ];

    let destinations = [
        {
            "id": 5,
            "destination": "Madrid, Spain",
            "estimatedLodgingCostPerDay": 150,
            "estimatedFlightCostPerPerson": 650,
            "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "city with clear skys and a road in the day time"
        },
        {
            "id": 35,
            "destination": "Anchorage, Alaska",
            "estimatedLodgingCostPerDay": 200,
            "estimatedFlightCostPerPerson": 100,
            "image": "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "man riding on kayak surrounded by mountains"
        },
        {
            "id": 13,
            "destination": "St. Petersburg, Russia",
            "estimatedLodgingCostPerDay": 100,
            "estimatedFlightCostPerPerson": 1100,
            "image": "https://images.unsplash.com/photo-1556543697-2fb00d31948a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "buildings and people crossing the street carrying shoping bags during the day"
        },
        {
            "id": 25,
            "destination": "New York, New York",
            "estimatedLodgingCostPerDay": 175,
            "estimatedFlightCostPerPerson": 200,
            "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "people crossing the street during the day surrounded by tall buildings and advertisements"
        },
        {
            "id": 23,
            "destination": "Copenhagen, Denmark",
            "estimatedLodgingCostPerDay": 120,
            "estimatedFlightCostPerPerson": 1000,
            "image": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "colorful buildings with holiday decorations by the water with tents and docked boats"
        },
    ];

    beforeEach(() => {
    user = new User(userData);
    traveler = new Traveler(userData);
    travelAgent = new TravelAgent(agentData);
    });

    it('should be a function', function() {
        expect(TravelAgent).to.be.a('function');
    });
   
    it('should be a child of User', function() {
        expect(travelAgent).to.be.an.instanceof(User);
    });

    it('should be an instance of Traveler', function() {
        expect(travelAgent).to.be.an.instanceof(TravelAgent);
   });
   
    it('should have an id', function() {
        expect(travelAgent.id).to.equal('agency');
    });

    it('should have a password', function() {
        expect(travelAgent.password).to.equal('travel2020');
    });

    it('should log in with the right password', function() {
        travelAgent.logIn('travel2020');
        expect(travelAgent.loggedIn).to.equal(true);
    });

    it('should have a username', function() {
        expect(travelAgent.username).to.equal('agency');
    });

    it('should have an array of all trips', function() {
        expect(travelAgent.allTrips).to.be.an('array');
    });

    it('should have access to all trips', function() {
        travelAgent.addTrips(trips);
        expect(travelAgent.allTrips).to.deep.equal(trips);
    })

    it('should be able to find all pending trip requests', function() {
        expect(travelAgent.findPendingTrips(trips)).to.deep.equal(
            [{
                "id": 3456,
                "userID": 6543,
                "destinationID": 25,
                "travelers": 5,
                "date": "2020/08/22",
                "duration": 7,
                "status": "pending",
                "suggestedActivities": []
            },
            {
                "id": 6543,
                "userID": 3465,
                "destinationID": 23,
                "travelers": 7,
                "date": "2020/07/13",
                "duration": 25,
                "status": "pending",
                "suggestedActivities": []
            }]
        );
    });

    it('should be able to calculate total income for the year', function() {
        travelAgent.addTrips(trips);
        expect(travelAgent.calculateIncome(destinations)).to.equal(2337.5);
    });

    it('should be able to find travelers for today\'s date', function() {
        expect(travelAgent.findTodaysTravelers(trips, today)).to.deep.equal([54, 45])
    });

});