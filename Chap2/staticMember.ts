class ClassA {
	static typeName: string;
	constructor() { }

	static getFullName() {
		return "ClassA " + ClassA.typeName;
	}
}

const a = new ClassA();
ClassA.typeName = "type";
console.log(ClassA.typeName);