// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

function bubbleSort(array){
  for(let i=0; i<array.length;i++){
    for(let j=0; j<array.length;j++){
      if(array[j]>array[j+1]){
        let temp= array[j];
        array[j]= array[j+1]
        array[j+1]=temp
      } 
    }
  }
  return array;
}