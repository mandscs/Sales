function validateEmail(email) {

  let emailCheck = document.getElementById('email').value;
  let underline = "@";
  
  if (emailCheck.includes(underline) && emailCheck != "") {
    alert("email válido");
    } else {
      alert("Por favor digite um e-mail válido!");
    }
  }