class User {
    constructor() {
        this.password = 'travel2020';
        this.loggedIn = false;
    }

    logIn(password) {
        if (password === this.password) {
            this.loggedIn = true;
        }
    }
}

module.exports = User;