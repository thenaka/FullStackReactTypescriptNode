namespace AbstractNamespace {
	abstract class Vehicle {
		constructor(protected wheelCount: number) { }
		abstract updateWheelCount(newWheelCount: number): void;
		showNumberOfWheels() {
			console.log(`moved ${this.wheelCount} miles`);
		}
	}

	class Motorcycle extends Vehicle {
		constructor() {
			super(2);
		}

		updateWheelCount(newWheelCount: number) {
			this.wheelCount = newWheelCount;
			console.log(`Updated motorcycle wheel count to ${this.wheelCount}`);
		}
	}

	class Automobile extends Vehicle {
		constructor() {
			super(4);
		}

		updateWheelCount(newWheelCount: number) {
			this.wheelCount = newWheelCount;
			console.log(`Updated automobile wheel count to ${this.wheelCount}`);
		}

		showNumberOfWheels() {
			console.log(`Moved ${this.wheelCount} miles`);
		}
	}

	const motorcyle = new Motorcycle();
	motorcyle.updateWheelCount(1);
	const auto = new Automobile();
	auto.updateWheelCount(3);
}