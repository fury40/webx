$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault(); // Prevent default form submission

    var name = $("#name").val(); // Get name from input field
    var age = $("#age").val(); // Get age from input field
    var email = $("#email").val(); // Get email from input field
    var password = $("#password").val(); // Get password from input field

    // Name validation: should contain only alphabets
    if (!/^[a-zA-Z]+$/.test(name)) {
      $("#validationResult").html(
        '<p style="color: red;">Name must contain only alphabets!</p>'
      );
      return; // Exit the function if name is invalid
    }

    // Age validation: should be a number greater than 18 and less than 100
    if (isNaN(age) || age < 18 || age >= 100) {
      $("#validationResult").html(
        '<p style="color: red;">Age must be a number greater than 18 and less than 100!</p>'
      );
      return; // Exit the function if age is invalid
    }

    // Email validation: must end with "@somaiya.edu"
    if (!email.endsWith("@somaiya.edu")) {
      $("#validationResult").html(
        '<p style="color: red;">Email must end with "@somaiya.edu"!</p>'
      );
      return; // Exit the function if email is invalid
    }

    // Password validation: should be greater than 8 characters and alphanumeric
    if (password.length < 8 || !password.match(/^[0-9a-zA-Z]+$/)) {
      $("#validationResult").html(
        '<p style="color: red;">Password must be greater than 8 characters and alphanumeric!</p>'
      );
      return; // Exit the function if password is invalid
    }

    // Send AJAX request to server for validation
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/validate_user",
      data: { name: name, age: age, email: email, password: password },
      success: function (response) {
        $("#validationResult").html(response);
      },
    });
  });
});

// http://localhost:3000/validate_user
