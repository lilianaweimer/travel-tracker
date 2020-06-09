class User {
  constructor() {
    this.password = 'travel2020';
    this.loggedIn = false;
    this.type = undefined;
  }

  logIn(password) {
    if (password === this.password) {
      this.loggedIn = true;
    }
  }

  changeType(type) {
    this.type = type;
  }
}

module.exports = User;