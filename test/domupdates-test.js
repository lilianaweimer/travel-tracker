import domUpdates from '../src/domUpdates'
import { expect } from 'chai';
const chai = require('chai')
let spies = require('chai-spies');
chai.use(spies);

describe('domUpdates', function() {
    afterEach(function () {
        chai.spy.restore(domUpdates)
    })

    it('should spy on importData', function () {
        let users = {};
        let trips = {};
        let destinations = {};
        let date = "2020/06/08";

        global.domUpdates;
        chai.spy.on(domUpdates, ['importData'], () => {});
        domUpdates.importData(users, trips, destinations, date);
        expect(domUpdates.importData).to.have.been.called(1);
        expect(domUpdates.importData).to.have.been.called.with(users, trips, destinations, date);
    });

    it('should spy on updateTrips', function () {
        let trips = {};
        let tripInfo = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['updateTrips'], () => {});
        domUpdates.updateTrips(trips, tripInfo);
        expect(domUpdates.updateTrips).to.have.been.called(1);
        expect(domUpdates.updateTrips).to.have.been.called.with(trips, tripInfo);
    });

    it('should spy on createTraveler', function () {
        let newTraveler = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['createTraveler'], () => {});
        domUpdates.createTraveler(newTraveler);
        expect(domUpdates.createTraveler).to.have.been.called(1);
        expect(domUpdates.createTraveler).to.have.been.called.with(newTraveler);
    });

    it('should spy on createDomUser', function () {
        let user = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['createDomUser'], () => {});
        domUpdates.createDomUser(user);
        expect(domUpdates.createDomUser).to.have.been.called(1);
        expect(domUpdates.createDomUser).to.have.been.called.with(user);
    });

    it('should spy on updateDestinationsDropdown', function () {
        global.domUpdates;
        chai.spy.on(domUpdates, ['updateDestinationsDropdown'], () => {});
        domUpdates.updateDestinationsDropdown();
        expect(domUpdates.updateDestinationsDropdown).to.have.been.called(1);
        expect(domUpdates.updateDestinationsDropdown).to.have.been.called.with();
    });

    it('should spy on showTravelerWidgets', function () {
        global.domUpdates;
        chai.spy.on(domUpdates, ['showTravelerWidgets'], () => {});
        domUpdates.showTravelerWidgets();
        expect(domUpdates.showTravelerWidgets).to.have.been.called(1);
        expect(domUpdates.showTravelerWidgets).to.have.been.called.with();
    });

    it('should spy on showTravelerExpenses', function () {
        let destinations = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['showTravelerExpenses'], () => {});
        domUpdates.showTravelerExpenses(destinations);
        expect(domUpdates.showTravelerExpenses).to.have.been.called(1);
        expect(domUpdates.showTravelerExpenses).to.have.been.called.with(destinations);
    });

    it('should spy on showTravelerTrips', function () {
        let trips = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['showTravelerTrips'], () => {});
        domUpdates.showTravelerTrips(trips);
        expect(domUpdates.showTravelerTrips).to.have.been.called(1);
        expect(domUpdates.showTravelerTrips).to.have.been.called.with(trips);
    });

    it('should spy on showAgentWidgets', function () {
        global.domUpdates;
        chai.spy.on(domUpdates, ['showAgentWidgets'], () => {});
        domUpdates.showAgentWidgets();
        expect(domUpdates.showAgentWidgets).to.have.been.called(1);
        expect(domUpdates.showAgentWidgets).to.have.been.called.with();
    });

    it('should spy on showPendingTrips', function () {
        let trips = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['showPendingTrips'], () => {});
        domUpdates.showPendingTrips(trips);
        expect(domUpdates.showPendingTrips).to.have.been.called(1);
        expect(domUpdates.showPendingTrips).to.have.been.called.with(trips);
    });

    it('should spy on removeTrips', function () {
        global.domUpdates;
        chai.spy.on(domUpdates, ['removeTrips'], () => {});
        domUpdates.removeTrips();
        expect(domUpdates.removeTrips).to.have.been.called(1);
        expect(domUpdates.removeTrips).to.have.been.called.with();
    });

    it('should spy on deleteTrip', function () {
        let event = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['deleteTrip'], () => {});
        domUpdates.deleteTrip(event);
        expect(domUpdates.deleteTrip).to.have.been.called(1);
        expect(domUpdates.deleteTrip).to.have.been.called.with(event);
    });

    it('should spy on approveTrip', function () {
        let event = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['approveTrip'], () => {});
        domUpdates.approveTrip(event);
        expect(domUpdates.approveTrip).to.have.been.called(1);
        expect(domUpdates.approveTrip).to.have.been.called.with(event);
    });

    it('should spy on findUserName', function () {
        let id = 1;

        global.domUpdates;
        chai.spy.on(domUpdates, ['findUserName'], () => {});
        domUpdates.findUserName(id);
        expect(domUpdates.findUserName).to.have.been.called(1);
        expect(domUpdates.findUserName).to.have.been.called.with(id);
    });

    it('should spy on showAgentIncome', function () {
        let destinations = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['showAgentIncome'], () => {});
        domUpdates.showAgentIncome(destinations);
        expect(domUpdates.showAgentIncome).to.have.been.called(1);
        expect(domUpdates.showAgentIncome).to.have.been.called.with(destinations);
    });

    it('should spy on showCurrentTravelers', function () {
        global.domUpdates;
        chai.spy.on(domUpdates, ['showCurrentTravelers'], () => {});
        domUpdates.showCurrentTravelers();
        expect(domUpdates.showCurrentTravelers).to.have.been.called(1);
        expect(domUpdates.showCurrentTravelers).to.have.been.called.with();
    });

    it('should spy on displayWelcome', function () {
        let user = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['displayWelcome'], () => {});
        domUpdates.displayWelcome(user);
        expect(domUpdates.displayWelcome).to.have.been.called(1);
        expect(domUpdates.displayWelcome).to.have.been.called.with(user);
    });

    it('should spy on sortTripsByDate', function () {
        let tripsToSort = [];

        global.domUpdates;
        chai.spy.on(domUpdates, ['sortTripsByDate'], () => {});
        domUpdates.sortTripsByDate(tripsToSort);
        expect(domUpdates.sortTripsByDate).to.have.been.called(1);
        expect(domUpdates.sortTripsByDate).to.have.been.called.with(tripsToSort);
    });

    it('should spy on displayTrip', function () {
        let tripWidget = {};
        let tripInfo = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['displayTrip'], () => {});
        domUpdates.displayTrip(tripWidget, tripInfo);
        expect(domUpdates.displayTrip).to.have.been.called(1);
        expect(domUpdates.displayTrip).to.have.been.called.with(tripWidget, tripInfo);
    });

    it('should spy on displayEstimatedCost', function () {
        let cost = 123;

        global.domUpdates;
        chai.spy.on(domUpdates, ['displayEstimatedCost'], () => {});
        domUpdates.displayEstimatedCost(cost);
        expect(domUpdates.displayEstimatedCost).to.have.been.called(1);
        expect(domUpdates.displayEstimatedCost).to.have.been.called.with(cost);
    });

    it('should spy on clearBookingFormInputs', function () {
        global.domUpdates;
        chai.spy.on(domUpdates, ['clearBookingFormInputs'], () => {});
        domUpdates.clearBookingFormInputs();
        expect(domUpdates.clearBookingFormInputs).to.have.been.called(1);
        expect(domUpdates.clearBookingFormInputs).to.have.been.called.with();
    });

    it('should spy on displaySearchedUserInfo', function () {
        global.domUpdates;
        chai.spy.on(domUpdates, ['displaySearchedUserInfo'], () => {});
        domUpdates.displaySearchedUserInfo();
        expect(domUpdates.displaySearchedUserInfo).to.have.been.called(1);
        expect(domUpdates.displaySearchedUserInfo).to.have.been.called.with();
    });

    it('should spy on closeSearch', function () {
        let event = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['closeSearch'], () => {});
        domUpdates.closeSearch(event);
        expect(domUpdates.closeSearch).to.have.been.called(1);
        expect(domUpdates.closeSearch).to.have.been.called.with(event);
    });

    it('should spy on displaySearchedTrips', function () {
        global.domUpdates;
        chai.spy.on(domUpdates, ['displaySearchedTrips'], () => {});
        domUpdates.displaySearchedTrips();
        expect(domUpdates.displaySearchedTrips).to.have.been.called(1);
        expect(domUpdates.displaySearchedTrips).to.have.been.called.with();
    });

    it('should spy on insertPendingHTML', function () {
        let destination = {};
        let trip = {};
        let searchedTrips = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['insertPendingHTML'], () => {});
        domUpdates.insertPendingHTML(destination, trip, searchedTrips);
        expect(domUpdates.insertPendingHTML).to.have.been.called(1);
        expect(domUpdates.insertPendingHTML).to.have.been.called.with(destination, trip, searchedTrips);
    });

    it('should spy on insertApprovedHTML', function () {
        let destination = {};
        let trip = {};
        let searchedTrips = {};

        global.domUpdates;
        chai.spy.on(domUpdates, ['insertApprovedHTML'], () => {});
        domUpdates.insertApprovedHTML(destination, trip, searchedTrips);
        expect(domUpdates.insertApprovedHTML).to.have.been.called(1);
        expect(domUpdates.insertApprovedHTML).to.have.been.called.with(destination, trip, searchedTrips);
    });
});
