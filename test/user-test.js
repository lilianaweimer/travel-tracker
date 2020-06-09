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

  it('should have a type', function() {
    expect(user.type).to.equal(undefined);
  });

  it('should be able to change type to traveler', function() {
    user.changeType('traveler');
    expect(user.type).to.equal('traveler'); 
  });

  it('should be able to change type to a travel agent', function() {
    user.changeType('agent');
    expect(user.type).to.equal('agent');
  })
});