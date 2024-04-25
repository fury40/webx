// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Dummy user validation logic
function validateUser(name, age, email, password) {
  // Check if name contains only alphabets, age is a number greater than 18 and less than 100,
  // email ends with '@somaiya.edu',
  // and password is greater than 8 characters and alphanumeric
  return (
    /^[a-zA-Z]+$/.test(name) &&
    !isNaN(age) &&
    age >= 18 &&
    age < 100 &&
    email.endsWith("@somaiya.edu") &&
    password.length > 8 &&
    /^[0-9a-zA-Z]+$/.test(password)
  );
}

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Handling POST request to validate user
app.post("/validate_user", (req, res) => {
  const { name, age, email, password } = req.body;

  // Perform user validation
  const isValid = validateUser(name, age, email, password);

  // Send response back to client
  if (isValid) {
    res.send('<p style="color: green;">User is valid!</p>');
  } else {
    res.send(
      '<p style="color: red;">Invalid user, name, age, email, or password!</p>'
    );
  }
});

// Serve the static HTML file
app.use(express.static("public"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
