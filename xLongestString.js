  function longestString(array){
    combo=[]
    comboArray=[];
    for(i=0;i<array.length;i++){
      comboArray=[];
      comboArray.push(array[i]);
      for(j=0;j<array.length;j++){
        if(i != j){
          console.log("evaluator="+array[i]+"components: "+array[i][0]+" or "+ array[i].slice(-1)+",comparison= "+array[j].slice(-1)+" or "+ array[j][0])
          if(array[i][0]===array[j].slice(-1) || array[i].slice(-1)===array[j][0]){
          comboArray.push(array[j]);
          } else {
          comboArray=[];
          }
        }
      if(comboArray.join("").length>0){
        combo.push(comboArray.join(""));
      }
    }
    console.log("string="+combo);
    console.log("full array="+comboArray);
  }
}

example1=["aabb", "aaaa", "bbab"];
longestString(example1)

v2
function longestString(array){
  combo=[]
  comboArray=[];
  for(i=0;i<array.length;i++){
    comboArray=[];
    comboArray.push(array[i]);
    for(j=0;j<array.length;j++){
        comboArray.push(array[j]);
      }
    if(comboArray.join("").length>0){
      combo.push(comboArray.join(""));
    }
  }
  console.log("string="+combo[1]);
  console.log("full array="+comboArray);
}

v3
const longestString = (words) => {
  let result = [];

  const permute = (arr, m = []) => {
    console.log("arr="+arr+", m="+m);
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        if(arr[i][0]===array[i+1].slice(-1) || array[i].slice(-1)===array[i+1][0]){
          let next = curr.splice(i, 1);
        } else {
          let next = curr.splice(i+1, 1);
        } 
        console.log("curr ="+curr+", next="+next)
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(words)

 return result;
}


