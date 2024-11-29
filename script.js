// Select the form and pop-up elements
const form = document.getElementById("bmiForm");
const result = document.getElementById("result");
const bmiPopUp = document.getElementById("bmiPopUp");
const bmiScore = document.getElementById("bmiScore");
const bmiText = document.getElementById("bmiText");
const bmiButton = document.getElementById("bmiButton");

// Event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const weight = document.getElementById("weight").value.trim();
    const height = document.getElementById("height").value.trim();

    // Validate inputs
    if (!name) {
        result.textContent = "Please enter your name.";
        return;
    }
    if (!isValidNumber(age) || age <= 0) {
        result.textContent = "Please enter a valid age.";
        return;
    }
    if (!isValidNumber(weight) || weight <= 0) {
        result.textContent = "Please enter a valid weight in kg.";
        return;
    }
    if (!isValidNumber(height) || height <= 0) {
        result.textContent = "Please enter a valid height in cm.";
        return;
    }

    // Calculate BMI
    const heightInMeters = parseFloat(height) / 100; // Convert cm to meters
    const bmi = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);

    // Display BMI score and message
    bmiScore.textContent = bmi;
    bmiText.textContent = getBMIMessage(bmi);

    // Show the pop-up
    bmiPopUp.style.display = "block";
});

// Helper function to validate if a value is a positive number
function isValidNumber(value) {
    const number = parseFloat(value);
    return !isNaN(number) && number > 0;
}

// Function to determine BMI message based on the BMI score
function getBMIMessage(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Event listener for closing the pop-up
bmiButton.addEventListener("click", function() {
    bmiPopUp.style.display = "none";
});
