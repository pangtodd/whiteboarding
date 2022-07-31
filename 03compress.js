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
//recursive not working yet.

function recurseCompress(string){
  if(string === ""){
    return "";
  } else {
    console.log("string first digit="+string);
    let numberPre= parseInt(string[0]);
    let newString="";
    let answer="";
    if(Number.isInteger(numberPre) && string[2]){
      if(string[1]===string[2]){
        numberPre= numberPre+1;
        newString = numberPre.toString() + string.slice(2);
        answer = "";
      } else {
        answer=string[0]+string[1];
        newString= string.slice(2);
      }
    }else if(string[1] && string[0]===string[1]){
        newString = "2" + string.slice(1);
        answer = "";
        console.log("answer: "+answer +" newstring= "+newString);
    } else {
        answer=string[0];
        newString = string.slice(1);
      }
      console.log("new String ="+newString);
      console.log("answer= "+answer);
      return answer + recurseCompress(newString);
    }
  }
