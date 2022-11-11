const employees = [
	{ name: 'tim', id: 1 },
	{ name: 'cindy', id: 2 },
	{ name: 'rpb', id: 3 },
]
const elements = employees.map((item, index) => {
	return `<div>${item.id} - ${item.name}</div>`;
});
console.log(elements);