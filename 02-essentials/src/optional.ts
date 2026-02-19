function generateError(msg?: string) {
	throw new Error(msg);
}
generateError();
type UserOptional = {
	name: string;
	age: number;
	role?: 'admin' | 'guest';
};
let input = null;
const didProvideInput = input ?? false;
