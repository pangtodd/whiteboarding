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
//set up a a nested loop. nums[i] is the "evaluator", loops through each element of the array. 
//If the "evaluator" is the same as the element(nums[j])- and the position is different than the origianal instance (nums[i])- it is a duplicate.
//slice mutates num, removing the element j (splice(j,1) means remove position j, and the 1= how many elements starting at that position.)  
function deDeDup(nums){
  for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
      if(nums[j]===nums[i] && j != i){
        nums.splice(j,1);
      } 
    }
  }
  return nums;
}


//recursion version works, but doesn't keep the numbers in the same order and the formatting stinks.
//set up base case, then set empty array aside for the answer.
//let the answer = nums.shift()- which makes answer= the first array, and mutates the nums array to lose its first entry.
//set up dupPosition to = nums.indexOf(answer)- it will return the index position of anything that = answer.
//if no matches are found, indexOf(anwer) will return as -1 , which leads to our else statement (we push answer into the "final" array)
function recurseDeDupe(nums){
  if(nums.length === 0){
    return "";
  } else {
    final = [];
    let answer=nums.shift();
    dupPosition=nums.indexOf(answer);
    if(dupPosition != -1){
      nums.splice(dupPosition,1);
      nums.push(answer);
    } else{
      final.push(answer+", ");
    }
    return final+ recurseDeDupe(nums);
  }
}
