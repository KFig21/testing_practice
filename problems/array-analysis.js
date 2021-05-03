function analyze(arr) {
  return {
    average: (arr.reduce((a, b) => a + b, 0))/arr.length,
    min: findMin(arr),
    max: findMax(arr),
    length: arr.length
  }
}

function findMin(arr){
  let min = arr[0];
  for(i=1; i<arr.length; i++){ 
    if (arr[i] < min){ 
    min = arr[i] 
    }
  }
  return min
}

function findMax(arr){
  let max = arr[0];
  for(i=1; i<arr.length; i++){ 
    if (arr[i] > max){
      max = arr[i] 
    }
  }
  return max
}

module.exports = analyze