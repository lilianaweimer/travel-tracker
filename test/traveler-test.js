import chai from 'chai';
const expect = chai.expect;
const User = require('../src/User');
const Traveler = require('../src/Traveler')

describe('Traveler', function() {
    let user;
    let traveler;
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
            "userID": 45,
            "destinationID": 35,
            "travelers": 1,
            "date": "2020/05/14",
            "duration": 16,
            "status": "approved",
            "suggestedActivities": []
        },
        {
            "id": 144,
            "userID": 45,
            "destinationID": 13,
            "travelers": 2,
            "date": "2020/09/21",
            "duration": 4,
            "status": "approved",
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
        }
    ];

    beforeEach(() => {
    user = new User(userData);
    traveler = new Traveler(userData);
    });

    it('should be a function', function() {
        expect(Traveler).to.be.a('function');
    });
   
    it('should be a child of User', function() {
        expect(traveler).to.be.an.instanceof(User);
    });

    it('should be an instance of Traveler', function() {
        expect(traveler).to.be.an.instanceof(Traveler);
   });
   
    it('should have an id', function() {
        expect(traveler.id).to.equal(45);
    });

    it('should have a password', function() {
        expect(traveler.password).to.equal('travel2020');
    });

    it('should log in with the right password', function() {
        traveler.logIn('travel2020');
        expect(traveler.loggedIn).to.equal(true);
    });

    it('should have a name', function() {
        expect(traveler.name).to.equal('Ofilia Titman');
    });

    it('should be able to have a username', function() {
        expect(traveler.username).to.equal(undefined);
    });

    it('should be able to generate a username from its userID', function() {
        traveler.generateUsername(traveler.id);
        expect(traveler.username).to.equal('traveler45');
    });

    it('should have a trips array', function() {
        expect(traveler.trips).to.be.an('array');
    });

    it('should be able to add trips to the array', function() {
        traveler.addTrips(trips);
        expect(traveler.trips).to.deep.equal(trips);
    });

    it('should be able to calculate annual spending on trips', function() {
        traveler.addTrips(trips);
        expect(traveler.calculateAnnualTravelExpenses(destinations)).to.equal(12265);
    });
});