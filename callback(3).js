function show(a){
    console.log("rashmi"  + a);
  }
  
  function geeky(callback){
    var a = 100;
    callback(a);
  }
  
  geeky(show);

  "==============================================="
  function show(b){
    console.log("rashmi"  + b);
  }
  
  function geeky(a,callback){
    callback(a);
  }
  
  geeky(100,show);

  "================================================"

  function geeky(callback){
    var a = 100;
    callback(a);
  }
  
  geeky(function show(a){
    console.log("hi"+ a);
  })


"===================================================="

function geeky(callback){
    var a = 100;
    callback(a);
  }
  
  geeky(function (a){
    console.log("hi"+ a);
  })
  
  "======================================================="
  function geeky(callback){
    var b = 100;
    callback(b);
  }
  
  geeky(c => console.log("hi"+ c));
  
  
