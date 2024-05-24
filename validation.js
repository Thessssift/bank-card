export { containsOnlyStringOrSpace, isValidemailFunction, isValidTelephone };

let isvalidname = false;
let isvalidemail = false;
let isvalidtel = false;

function isValidemailFunction() {
  const emailvalidation = email.value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(emailvalidation)) {
    isvalidemail = true;
  } else {
    isvalidemail = false;
    //console.log('email');
  }
  return isvalidemail;
}
function isValidTelephone() {
  const telvalidation = parseInt(tel.value);
  if (Number.isInteger(telvalidation)) {
    isvalidtel = true;
  } else {
    isvalidtel = false;
    //console.log('tel');
  }
  return isvalidtel;
}
function containsOnlyStringOrSpace(x) {
  var regex = /^[a-zA-Z\s]*$/;
  if (regex.test(x)) {
    isvalidname = true;
  } else {
    isvalidname = false;
    //console.log('name');
  }
  return isvalidname;
}
