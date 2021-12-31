function findFirstDuplicate(arr) {
  // type your code here
  const newObj = {}
  for(let i=0; i<arr.length; i++){
    if(newObj[arr[i]] === undefined){
      newObj[arr[i]] = 1
    }else if(newObj[arr[i]] !== undefined){
      return arr[i]
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: ''");
  console.log("=>", findFirstDuplicate([1, "", 3, ""]));

  console.log("");

  console.log("Expecting: 6");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 5, 6, 6]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/* 
  const newObj = {}
  For each indext i in the array,
    If (array[i] didn't exist in the object)
      Then create a key/value pair in the object, ie array[i]:1
    else if (array[i] did exist in the object)
      return array[i]
  if no duplicate value found
    return -1
*/
// And a written explanation of your solution
