// This function should return an object, but it's not doing what's intended. What's wrong?

// function mystery() {
// var results =
//   {sanity: 'Hello'};
// return
//   results;
//   }

function mystery() {
	let results = {
		sanity: 'Hello',
	};
	return results;
}

// better
const mystery = () => ({ sanity: 'Hello' });
