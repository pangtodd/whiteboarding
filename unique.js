// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

function unique(string){
  let score=0;
  for(let i = 0;i<string.length;i++){
    let checker=string[i];
    for(let j = 0;j<string.length;j++){
      if(string[j]===checker){
        score++;
      }
    }
  }
  if(score>string.length){
    return false;
  }else{
    return true;
  }
}