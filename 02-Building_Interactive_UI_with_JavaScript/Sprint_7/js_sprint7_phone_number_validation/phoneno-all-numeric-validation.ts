function phonenumber(inputtxt:any):void {
  var phoneno = /^\(?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/;
  if ((inputtxt.value.match(phoneno))) {
    alert("Valid");
  }
  else {
    alert("in valid");
   
  }
}