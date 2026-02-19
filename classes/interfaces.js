"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthenticatableUser {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    login() { }
    logout() { }
}
function authenticate(user) {
    user.login();
}
// interface Authenticatable {
// 	role: string;
// }
let user;
user = {
    email: 'test@test.com',
    password: 'asv2',
    login() { },
    logout() { },
};
