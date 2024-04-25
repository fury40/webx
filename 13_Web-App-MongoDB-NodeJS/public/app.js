const carForm = document.getElementById("carForm");
const carList = document.getElementById("carList");

// Function to fetch cars from the server and display them in the table
async function getCars() {
  try {
    const response = await fetch("/cars");
    const data = await response.json();
    carList.innerHTML = "";
    data.forEach((car) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${car.make}</td>
                <td>${car.model}</td>
                <td>${car.year}</td>
                <td>
                    <button onclick="deleteCar('${car._id}')">Delete</button>
                    <button onclick="updateCar('${car._id}', '${car.make}', '${car.model}', '${car.year}')">Edit</button>
                </td>
            `;
      carList.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching cars:", error);
  }
}

// Function to handle form submission and add a new car
async function addCar(event) {
  event.preventDefault();
  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const formData = { make, model, year };
  try {
    const response = await fetch("/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log("New car added:", data);
    getCars(); // Refresh car list after adding a new car
  } catch (error) {
    console.error("Error adding car:", error);
  }
}

// Function to handle deletion of a car
async function deleteCar(carId) {
  try {
    const response = await fetch(`/cars/${carId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data.message);
    getCars(); // Refresh car list after deleting a car
  } catch (error) {
    console.error("Error deleting car:", error);
  }
}

// Function to handle updating a car
async function updateCar(carId, make, model, year) {
  const newMake = prompt("Enter new make:", make);
  const newModel = prompt("Enter new model:", model);
  const newYear = prompt("Enter new year:", year);
  const formData = { make: newMake, model: newModel, year: parseInt(newYear) };
  try {
    const response = await fetch(`/cars/${carId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data.message);
    getCars(); // Refresh car list after updating a car
  } catch (error) {
    console.error("Error updating car:", error);
  }
}

// Event listener for form submission
carForm.addEventListener("submit", addCar);

// Initial call to fetch cars when the page loads
getCars();
