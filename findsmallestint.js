// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
	findSmallestInt(args) {
		let min = Math.min(...args);
		return min;
	}
}
// better version below
class SmallestIntegerFinder {
	findSmallestInt = (args) => Math.min(...args);
}
