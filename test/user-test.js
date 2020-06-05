import chai from 'chai';
const expect = chai.expect;
const User = require('../src/User');

describe('User', function() {
    let user;
    let userData = {
        "id": 45,
        "name": "Ofilia Titman",
        "travelerType": "thrill-seeker"
    };

    beforeEach(() => {
    user = new User(userData.id);
    });

    it('should be a function', function() {
     expect(User).to.be.a('function');
    });

    it('should be an instance of User', function() {
      expect(user).to.be.an.instanceof(User);
    });

    it('should have an id', function() {
        expect(user.id).to.equal(45)
    });

    it('should be able to be a travel agent', function() {
        user = new User();
        expect(user.id).to.equal('agency');
    })

    it('should have a password', function() {
        expect(user.password).to.equal('travel2020');
    });

    it('should have a default logged in status', function() {
        expect(user.loggedIn).to.equal(false);
    });

    it('should have a method for logging in', function() {
        expect(user.logIn).to.be.a('function');
    });

    it('should log in with the right password', function() {
        user.logIn('travel2020');
        expect(user.loggedIn).to.equal(true);
    });

    it('should not log in with the wrong password', function() {
        user.logIn('password');
        expect(user.loggedIn).to.equal(false);
    });
});