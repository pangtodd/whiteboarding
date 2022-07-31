// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

function noSpacey(stringy){
  let newStringy = "";
  //newStringy will become our answer.
  for(let i =0; i<stringy.length; i++){
    //setup loop go go through string.
    if(stringy[i]===" "){
      //evaluates if any of the positions of stringy are empty
      newStringy= newStringy + "%20"
      //if so, adds "%20" to the end of the new string.
    } else {
      newStringy= newStringy + stringy[i];
      //otherwise add the letter of the string we're on to the end of the answer string.
    }
  }
  return newStringy
}


//recursion working
function recurseNoSpacey(string){
  let answer ="";
  if(string.length === 0){
    //base case
    return "";
  } else {
  //checks if first letter is empty, if so it slices the first letter off the word and stores "%20" in answer variable.
    if(string[0]===" "){
      answer="%20";
      string=string.slice(1)
    } else{
      //else, if the position has a letter, it stores that letter in answer variable, and slices off the first letter of the string.
      answer=string[0];
      string=string.slice(1)
    }
    //returns the letter or %20 to spit out the answer, and calls the function itself again with the shortened string.
    return answer + recurseNoSpacey(string);
  }
}
