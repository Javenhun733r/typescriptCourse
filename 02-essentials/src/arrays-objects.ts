let hobbies = ['Sports', 'Cooking'];
hobbies.push('Cycling');
// let users: (string | number)[];
let users: Array<string | number>;
users = [1, 'Max'];
let possibleResults: [number, number];
possibleResults = [1, -1];
// possibleResults = [5, 10, 12];
let user: {
	name: string;
	age: number;
	hobbies: string[];
	role: {
		description: string;
		id: number;
	};
} = {
	name: 'Max',
	age: 38,
	hobbies: ['Sports', 'Cooking'],
	role: {
		description: 'admin',
		id: 1,
	},
};
let val: {} = 'some text';
let data: Record<string, number | string>;
