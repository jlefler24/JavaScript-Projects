function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Full name must be filled out");
      return false;
    }
  }