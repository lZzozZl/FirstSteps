//     setTimeout(function(){
//        window.location.reload(1);
//     }, 5000);


document.getElementById("slider").innerHTML = "";








function edno(){
  document.getElementById("slider").innerHTML += "1";
}

function dve(){
  document.getElementById("slider").innerHTML += "2";
}

function tri(){
  document.getElementById("slider").innerHTML += "3";
}
function chetiri(){
  document.getElementById("slider").innerHTML += "4";
}
function pet(){
  document.getElementById("slider").innerHTML += "5";
}
function shest(){
  document.getElementById("slider").innerHTML += "6";
}
function sedem(){
  document.getElementById("slider").innerHTML += "7";
}
function osem(){
  document.getElementById("slider").innerHTML += "8";
}
function devet(){
  document.getElementById("slider").innerHTML += "9";
}
function nula(){
  document.getElementById("slider").innerHTML += "0";
}


var fNumber = 0;
var sNumber = 0;
var deistvie = "hoj";
var result;
// var daliPlus = false;





  
function seplus(){
  fNumber =  parseInt(document.getElementById("slider").innerHTML);
  console.log(fNumber);
  document.getElementById("slider").innerHTML = "";
  deistvie =  "+";  
}

function seminus(){
  fNumber =  parseInt(document.getElementById("slider").innerHTML);
  console.log(fNumber);
  document.getElementById("slider").innerHTML = "";
  deistvie =  "-";  
}

function seTimes(){
  fNumber =  parseInt(document.getElementById("slider").innerHTML);
  console.log(fNumber);
  document.getElementById("slider").innerHTML = "";
  deistvie =  "*";  
}

function delenie(){
  fNumber =  parseInt(document.getElementById("slider").innerHTML);
  console.log(fNumber);
  document.getElementById("slider").innerHTML = "";
  deistvie =  "/";  
}





  
  function ravno() {
    sNumber = parseInt(document.getElementById("slider").innerHTML);
    if ( deistvie === "+" ) {
        result = fNumber + sNumber;
         document.getElementById("slider").innerHTML = result;
        }
    else if ( deistvie === "-" ) {
         result = fNumber - sNumber;
         document.getElementById("slider").innerHTML = result;
    }
    else if ( deistvie === "*" ) {
         result = fNumber * sNumber;
         document.getElementById("slider").innerHTML = result;
    }
    else if ( deistvie === "/" ) {
         result = fNumber / sNumber;
         document.getElementById("slider").innerHTML = result;      
    }
  }




// switch (5) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }