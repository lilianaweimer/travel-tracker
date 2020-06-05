class User {
    constructor(userData) {
        this.id = userData.id || 'agency';
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