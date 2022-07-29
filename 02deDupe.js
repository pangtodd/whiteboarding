// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

// this works, but not in the same order.
function deDup(nums){
  let sortedNums=nums.sort();
  for(let i=0;i<nums.length;i++){
    if(sortedNums[i]===sortedNums[i+1]){
      sortedNums.splice(i,1);
    }
    return sortedNums;
  }  
}

//function using filter
function deDupFilter(nums){
  return nums.filter((item, index) => nums.indexOf(item) === index);
  console.log(nums);
}
//indexOf findes the first position of the item & returns it. Any duplicates (ie, an item whose position DOESN'T match the first instance's position) is removed/filtered out.


// got loop working, returns in correct order
function deDeDup(nums){
  let newNums= nums;
  console.log("new nums: "+newNums);
  for(let i=0;i<nums.length;i++){
    let num1=nums[i];
    for(let j=0;j<nums.length;j++){
      console.log("evalutator: "+num1+" current num:"+nums[j]);
      if(nums[j]===nums[i] && j != i){
        newNums.splice(j,1);
      } 
    }
  }
  return nums;
}