// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

function noSpacey(stringy){
  let newStringy = "";
  for(let i =0; i<stringy.length; i++){
    if(stringy[i]===" "){
      newStringy= newStringy + "%20"
    } else {
      newStringy= newStringy + stringy[i];
    }
    console.log("in loop"+newStringy)
  }
  console.log(newStringy)
}
//recursion not working
function recurseNoSpacey(string){
  let answer ="";
  let rev
  if(string.length === 0){
    return "";
  } else {
    if(string[0]===" "){
      answer="%20";
      string=string.slice(1)
    } else{
      answer=string[0];
      string=string.slice(1)
    }
    return answer + recurseNoSpacey(string);
  }
}
