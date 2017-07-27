function acc(x) {
  if (x.getAttribute('id') === "accOne") {
    document.getElementById('pOne').style.display = "block";
    document.getElementById('pTwo').style.display = "none";
    document.getElementById('pThree').style.display = "none";
  } 
  else if (x.getAttribute('id') === "accTwo") {
    document.getElementById('pOne').style.display = "none";
    document.getElementById('pTwo').style.display = "block";
    document.getElementById('pThree').style.display = "none";
    
    
  } 
  else if (x.getAttribute('id') === "accThree") {
    document.getElementById('pOne').style.display = "none";
    document.getElementById('pTwo').style.display = "none";
    document.getElementById('pThree').style.display = "block";   
    
  }  
}


