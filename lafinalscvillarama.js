function showPage(page) {
  const pages = document.querySelectorAll(".converter-page")
  pages.forEach((p) => p.classList.remove("active"))
  const backBtn = document.querySelector(".back-btn")

  if (page === "mainPage") {
    document.querySelector(".container").style.display = "block"
    if (backBtn) backBtn.style.display = "none"
  } else {
    document.querySelector(".container").style.display = "none"
    document.getElementById(page).classList.add("active")
    if (backBtn) backBtn.style.display = "flex"
  }
}

function swapUnits(type) {
  if (type === "weight") {
    const fromUnit = document.getElementById("fromUnit")
    const toUnit = document.getElementById("toUnit")
    const temp = fromUnit.value
    fromUnit.value = toUnit.value
    toUnit.value = temp
  } else if (type === "length") {
    const fromLength = document.getElementById("fromLength")
    const toLength = document.getElementById("toLength")
    const temp = fromLength.value
    fromLength.value = toLength.value
    toLength.value = temp
  } else if (type === "temp") {
    const fromTemp = document.getElementById("fromTemp")
    const toTemp = document.getElementById("toTemp")
    const temp = fromTemp.value
    fromTemp.value = toTemp.value
    toTemp.value = temp
  }
}

function convertWeight() {
  const weight = Number.parseFloat(document.getElementById("weight").value)
  const fromUnit = document.getElementById("fromUnit").value
  const toUnit = document.getElementById("toUnit").value
  let result = 0
  let formula = ""

  if (isNaN(weight)) {
    alert("Please enter a valid weight.")
    return
  }

  // Perform the conversion
  if (fromUnit === "Kilograms" && toUnit === "Grams") {
    result = weight * 1000
    formula = "multiply the weight value by 1000"
  } else if (fromUnit === "Kilograms" && toUnit === "Pound") {
    result = weight * 2.20462
    formula = "multiply the weight value by 2.20462"
  } else if (fromUnit === "Grams" && toUnit === "Kilograms") {
    result = weight / 1000
    formula = "divide the weight value by 1000"
  } else if (fromUnit === "Grams" && toUnit === "Pound") {
    result = weight * 0.00220462
    formula = "multiply the weight value by 0.00220462"
  } else if (fromUnit === "Pound" && toUnit === "Kilograms") {
    result = weight / 2.20462
    formula = "divide the weight value by 2.20462"
  } else if (fromUnit === "Pound" && toUnit === "Grams") {
    result = weight / 0.00220462
    formula = "divide the weight value by 0.00220462"
  } else {
    // Same unit, no conversion needed
    result = weight
    formula = "no conversion needed"
  }

  // Display the result with formula
  document.getElementById("result").innerHTML = 
    `<strong>${weight} ${fromUnit}</strong> = <strong>${result} ${toUnit}</strong>`;
  
  // Add formula display
  const formulaElement = document.createElement("div");
  formulaElement.innerHTML = `<span style="background-color: pink; color: #000; padding: 2px 6px; border-radius: 2px; font-size: 12px; font-weight: bold; margin-right: 8px;">Formula</span> ${formula}`;
  formulaElement.style.marginTop = "10px";
  formulaElement.style.fontSize = "14px";
  formulaElement.style.color = "#bdc1c6";
  
  // Clear previous formula if exists
  const previousFormula = document.getElementById("formula-text");
  if (previousFormula) {
    previousFormula.remove();
  }
  
  formulaElement.id = "formula-text";
  document.getElementById("result").parentNode.appendChild(formulaElement);
}

function convertLength() {
  const length = Number.parseFloat(document.getElementById("length").value)
  const fromUnit = document.getElementById("fromLength").value
  const toUnit = document.getElementById("toLength").value
  let result = 0
  let formula = ""

  if (isNaN(length)) {
    alert("Please enter a valid length.")
    return
  }

  // Perform the conversion
  if (fromUnit === "Kilometers" && toUnit === "Meters") {
    result = length * 1000
    formula = "multiply the length value by 1000"
  } else if (fromUnit === "Kilometers" && toUnit === "Feet") {
    result = length * 3280.84
    formula = "multiply the length value by 3280.84"
  } else if (fromUnit === "Meters" && toUnit === "Kilometers") {
    result = length / 1000
    formula = "divide the length value by 1000"
  } else if (fromUnit === "Meters" && toUnit === "Feet") {
    result = length * 3.28084
    formula = "multiply the length value by 3.28084"
  } else if (fromUnit === "Feet" && toUnit === "Kilometers") {
    result = length / 3280.84
    formula = "divide the length value by 3280.84"
  } else if (fromUnit === "Feet" && toUnit === "Meters") {
    result = length / 3.28084
    formula = "divide the length value by 3.28084"
  } else {
    // Same unit, no conversion needed
    result = length
    formula = "no conversion needed"
  }

  // Display the result with formula
  document.getElementById("lengthResult").innerHTML = 
    `<strong>${length} ${fromUnit}</strong> = <strong>${result} ${toUnit}</strong>`;
  
  // Add formula display
  const formulaElement = document.createElement("div");
  formulaElement.innerHTML = `<span style="background-color: pink; color: #000; padding: 2px 6px; border-radius: 2px; font-size: 12px; font-weight: bold; margin-right: 8px;">Formula</span> ${formula}`;
  formulaElement.style.marginTop = "10px";
  formulaElement.style.fontSize = "14px";
  formulaElement.style.color = "#bdc1c6";
  
  // Clear previous formula if exists
  const previousFormula = document.getElementById("length-formula-text");
  if (previousFormula) {
    previousFormula.remove();
  }
  
  formulaElement.id = "length-formula-text";
  document.getElementById("lengthResult").parentNode.appendChild(formulaElement);
}

function convertTemperature() {
  const temp = Number.parseFloat(document.getElementById("temperature").value)
  const fromUnit = document.getElementById("fromTemp").value
  const toUnit = document.getElementById("toTemp").value
  let result = 0
  let formula = ""

  if (isNaN(temp)) {
    alert("Please enter a valid temperature.")
    return
  }

  // Perform the conversion
  if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
    result = (temp * 9) / 5 + 32
    formula = "multiply by 9/5, then add 32"
  } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
    result = temp + 273.15
    formula = "add 273.15"
  } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
    result = ((temp - 32) * 5) / 9
    formula = "subtract 32, then multiply by 5/9"
  } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
    result = ((temp - 32) * 5) / 9 + 273.15
    formula = "subtract 32, multiply by 5/9, then add 273.15"
  } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
    result = temp - 273.15
    formula = "subtract 273.15"
  } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
    result = ((temp - 273.15) * 9) / 5 + 32
    formula = "subtract 273.15, multiply by 9/5, then add 32"
  } else {
    // Same unit, no conversion needed
    result = temp
    formula = "no conversion needed"
  }

  // Display the result with formula
  document.getElementById("tempResult").innerHTML = 
    `<strong>${temp} ${fromUnit}</strong> = <strong>${result} ${toUnit}</strong>`;
  
  // Add formula display
  const formulaElement = document.createElement("div");
  formulaElement.innerHTML = `<span style="background-color: pink; color: #000; padding: 2px 6px; border-radius: 2px; font-size: 12px; font-weight: bold; margin-right: 8px;">Formula</span> ${formula}`;
  formulaElement.style.marginTop = "10px";
  formulaElement.style.fontSize = "14px";
  formulaElement.style.color = "#bdc1c6";
  
  // Clear previous formula if exists
  const previousFormula = document.getElementById("temp-formula-text");
  if (previousFormula) {
    previousFormula.remove();
  }
  
  formulaElement.id = "temp-formula-text";
  document.getElementById("tempResult").parentNode.appendChild(formulaElement);
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  showPage("mainPage")
  document.querySelector(".back-btn").style.display = "none"
})