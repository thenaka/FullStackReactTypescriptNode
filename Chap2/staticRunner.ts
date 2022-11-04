class Runner {
	static lastRunTypeName: string;
	constructor(private typeName: string) { }

	run() {
		Runner.lastRunTypeName = this.typeName;
	}
}

const aa = new Runner("a");
const bb = new Runner("b");
bb.run();
aa.run();
console.log(Runner.lastRunTypeName);