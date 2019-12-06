function add(a, b , callback){ 
    console.log(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
    callback(); 
    } 
      
    // disp() function is called just 
    // after the ending of add() function  
    function disp(){ 
    console.log('This must be printed after addition'); 
    } 
      
    // Calling add() function 
    add(5,6,disp); 





   " ===================================================================="

    // add() function is called with arguments a, b 
   // and callback, callback will be executed just  
   // after ending of add() function 
   function add(a, b , callback){ 
    console.log(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
    callback(); 
    } 
    
    // add() function is called with arguments given below 
    add(5,6,function disp(){ 
    console.log('This must be printed after addition.'); 
    }); 