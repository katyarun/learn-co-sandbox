function find(array, criteriaFn) {
  let current = array
  let next = []
 
  while (current) {
    if (criteriaFn(current)) {
      console.log("answer is " + current);
      return current;
    }
 
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
        console.log(next);
      }
      console.log(" ");
    }
    current = next.shift();
    console.log(next);
  }
 
  return null
}

// const person = {
//   name: 4,
//   occupation: {
//     title: 5,
//     yearsHeld: 2
//   },
//   pets: [{
//     kind: "dog",
//     name: 7,
//   }, {
//     kind: "cat",
//     name: 2
//   }]
// }

const x = [1, [2, [4, [5, [6]], 7]]];
// console.log(find(person, n => n > 5))
find(x, n=> n>5);
