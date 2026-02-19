interface Authenticatable {
	email: string;
	password: string;
	login(): void;
	logout(): void;
}
interface AuthenticatableAdmin extends Authenticatable {
	role: 'admin' | 'superadmin';
}
class AuthenticatableUser implements Authenticatable {
	constructor(
		public email: string,
		public password: string,
	) {}
	login() {}
	logout() {}
}

function authenticate(user: Authenticatable) {
	user.login();
}
// interface Authenticatable {
// 	role: string;
// }
let user: Authenticatable;
user = {
	email: 'test@test.com',
	password: 'asv2',
	login() {},
	logout() {},
};
