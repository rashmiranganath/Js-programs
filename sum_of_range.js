function sumAll(arr) {
    var sum = 0;
    var num1 = arr[0];
    var num2 = arr[arr.length-1];
    if (num1<num2){
      var startingNum = num1;
      var endingNum = num2;
  }
  else
  {
  var startingNum = num2;
  var endingNum = num1;
  }
  
  for( let i= startingNum; i <=endingNum ; i++){
    sum = sum + i; 
  }
  return sum;
  }
  
  console.log(sumAll([1, 4]));
  