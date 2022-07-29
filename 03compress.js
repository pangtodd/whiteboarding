// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

function compress(string){
  let counter=1;
  let answer="";
  for(let i=0; i<string.length; i++){
    if(string[i+1] && string[i]===string[i+1]){
      counter = counter+1;
    }else{
      if(counter===1){
        answer=answer+string[i];
      }
      else{
        answer=answer+(counter)+string[i];
        counter=1;
      }
    }
  }
  return answer;
}

// Input: "aaabccdddda"
// Output: "3ab2c4da"

function recurseCompress(string){
  if(string = ""){
    return "";
  } else{
    counter = 1;   
    if(string[i+1] && string[i]===string[i+1]){
      counter = counter+1;
    }else{
      if(counter===1){
        answer=answer+string[i];
      }
      else{
        answer=answer+(counter)+string[i];
        counter=1;
      }
    }
  }
}