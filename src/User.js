class User {
    constructor(id = 'agency') {
        this.id = id;
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