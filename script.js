var form = document.getElementById("myform");
function getData(event) {
  event.preventDefault();

  var fname = document.myform.fname.value;
  var lname = document.myform.lname.value;
  var pass1 = document.myform.password1.value;
  var pass2 = document.myform.password2.value;
  var email = document.myform.email.value;
  var gen = document.myform.Gender.value;
  var languages = new Array();
  var checkboxes = document.getElementsByName("languages");
  for (var box of checkboxes) {
    if (box.checked) {
      languages.push(box.value);
    }
  }
  var country = document.myform.country.value;
  var msg = document.myform.message.value;
  var data = new Object();
  data.firstname = fname;
  data.lastname = lname;
  data.password1 = pass1;
  data.password2 = pass2;
  data.email = email;
  data.Gender = gen;
  data.languages = languages;
  data.country = country;
  data.message = msg;

  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");

  if (fname == null || fname == "" || lname == null || lname == "") {
    alert("Enter your first and last name");
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    alert("Please enter email address");
  } else if (pass1.length < 6 || pass2.length < 6) {
    alert("Password must be of 6 characters");
  } else if (pass1 !== pass2) {
    alert("Password does not match");
  } else if (msg == null || msg == "") {
    alert("please enter Address message");
  }

  console.log(data);
}
form.addEventListener("submit", getData);
