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
  for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
      if(nums[j]===nums[i] && j != i){
        nums.splice(j,1);
      } 
    }
  }
  return nums;
}

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