const joinList = function(array) {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += array[i];

    if (i < array.length - 1) {
      result += ", ";
    }
  }
  return result;
};


const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);

console.log('Today I learned about', concepts);