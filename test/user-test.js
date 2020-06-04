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
    user = new User(userData);
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
});