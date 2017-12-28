function hoisting(){
  console.log("value " + myObject);

  if(!myObject){
    var myObject = {value: "hello"};
    console.log(myObject.value);
  } 
}
hoisting();
//myObject skal declares i starten.
//Derfor for vi undefined på den første console.log()

function hoisting2(){
    var myObject = "";
    console.log("value " + myObject);
    
      if(!myObject){
          myObject = {value: "its me"};
        console.log(myObject.value);
      } 
}
hoisting2();
//her deklarer vi variablen først derfor undgår vi undefined.
function hoisting3(){
    console.log(hello);
}
hoisting3();
//Man får reference error når du kører hoisting 3.
//Fordi vi ikke har deklaret variablen hello
function hoisting4(){
    var hello = 4;
    console.log(hello);
}
hoisting4();
//her for vi ikke fejl fordi vi deklareret