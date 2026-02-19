const userName = 'Max';
let age = 30;
// function add(a: number, b: number) {
// 	let result;
// 	result = a + b;
// 	return result;
// }
const add = (a: number, b: number) => a + b;
const printOutput: (a: number | string) => void = output => console.log(output);
printOutput(add(5, 2));
