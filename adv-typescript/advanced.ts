type Storage = {
	[prop: string]: number | boolean;
};
let store: Storage = {};
store.id = 5;
store.isOpen = false;
let someObj: Record<string, number | boolean>;
// store.name = 'sda'
// let roles = ['admin', 'guest', 'editor'] as const;
// roles.push('max')
// const firstRole = roles[0];
const dataEntries = {
	entry1: 0.51,
	entry2: 2.32,
} satisfies Record<string, number>;
// dataEntries.entry3;
