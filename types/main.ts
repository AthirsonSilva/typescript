const today = new Date().toISOString();
console.info(today);

const Person = {
	name: 'John',
	age: 30,
};

class Color {
	constructor(public name: string) {}
}

const red = new Color('red');
