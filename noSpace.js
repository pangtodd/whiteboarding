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
  let stringArray= string.split("");
  let answer ="";
  if(stringArray.length === 0){
    return "";
  } else {
    console.log("yo "+stringArray[0]);
    if(stringArray[stringArray[0]]===" "){
      popped=stringArray.shift();
      console.log(popped);
      answer="%20";
    } else{
      answer=stringArray.shift();
    }
    return recurseNoSpacey(stringArray.join("")) + answer
  }
}
