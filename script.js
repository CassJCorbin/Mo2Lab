window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // Register Convert button's click event handler
  const convertButton = document.getElementById("convertButton");
  convertButton.addEventListener("click", convertTemperature);

  // Register input event handlers for both text fields
  const cInput = document.getElementById("cInput");
  const fInput = document.getElementById("fInput");

  cInput.addEventListener("input", function() {
    fInput.value = "";
  });

  fInput.addEventListener("input", function() {
    cInput.value = "";
  });
}

// Convert Celsius to Fahrenheit
function convertCtoF(degreesCelsius) {
  // The formula to convert Celsius to Fahrenheit
  return degreesCelsius * 9 / 5 + 32;
}

// Convert Fahrenheit to Celsius
function convertFtoC(degreesFahrenheit) {
  // The formula to convert Fahrenheit to Celsius
  return (degreesFahrenheit - 32) * 5 / 9;
}

// Function to be called when Convert button is clicked
function convertTemperature() {
  const cInput = document.getElementById("cInput");
  const fInput = document.getElementById("fInput");
  const errorMessage = document.getElementById("errorMessage");
  const weatherImage = document.getElementById("weatherImage");

  let celsius = parseFloat(cInput.value);
  let fahrenheit = parseFloat(fInput.value);

  if (!isNaN(celsius)) {
    fInput.value = convertCtoF(celsius);
    fahrenheit = fInput.value;
    errorMessage.innerHTML = "";
  } else if (!isNaN(fahrenheit)) {
    cInput.value = convertFtoC(fahrenheit);
    errorMessage.innerHTML = "";
  } else {
    errorMessage.innerHTML = "Input is not a number";
    return;
  }

  // Change the weather image based on the Fahrenheit temperature
  if (fahrenheit < 32) {
    weatherImage.src = "cold.png";
  } else if (fahrenheit >= 32 && fahrenheit <= 50) {
    weatherImage.src = "cool.png";
  } else {
    weatherImage.src = "warm.png";
  }
}