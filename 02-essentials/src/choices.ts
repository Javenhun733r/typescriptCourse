// enum Role {
// 	Admin,
// 	Editor,
// 	Guest,
// }

type Role = 'admin' | 'editor' | 'guest' | 'reader';
let userRole: Role = 'admin';
userRole = 'guest';
let possibleResult: [1 | -1, 1 | -1];
possibleResult = [1, -1];
function access(role: Role) {}
