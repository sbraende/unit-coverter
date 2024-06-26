// Only load javascript file after the DOM has been loaded
document.addEventListener("DOMContentLoaded", (event) => {

    const inputForm = document.getElementById("input-form")
    const numberInput = document.getElementById("number-input")
    const errorMessage = document.getElementById("error-message")
    const lengthEl = document.getElementById("length-element")
    const volumeEl = document.getElementById("volume-element")
    const massEl = document.getElementById("mass-element")

    // Checks input while user types, invalid characters = error message
    numberInput.addEventListener("input", function() {
        const inputValue = numberInput.value
        if (isNaN(Number(inputValue))) {
            errorMessage.style.display = "inline"
        } else {
            errorMessage.style.display = "none"
        }
    })

    // Check for NaN else fill inn conversion values
    inputForm.addEventListener("submit", function(event) {
        event.preventDefault() // Stops JS form from resetting values when submitted 
        const inputValue = numberInput.value
        if (isNaN(Number(inputValue))) {
            errorMessage.style.display = "inline"
        } else if (inputValue === "") {
            // If inputValue in empty, set to 0 
            inputValue = 0
            updateValues(inputValue)
        } else {
            updateValues(inputValue)
        }
    })

    function updateValues(inputValue) {
        lengthEl.textContent = `${inputValue} meters = ${meterToFeet(inputValue)} feet | ${inputValue} feet = ${feetToMeter(inputValue)} meters`
        volumeEl.textContent = `${inputValue} liters = ${literToGallons(inputValue)} gallons | ${inputValue} gallons = ${gallonsToLiter(inputValue)} liters`
        massEl.textContent = `${inputValue} kilos = ${kilosToPounds(inputValue)} pounds | ${inputValue} pounds = ${poundsToKilos(inputValue)} kilos` 
    }

    /*
    Unit conversion chart
    1 meter = 3.280839895 feet
    1 liter = 0.264172052 gallon
    1 kilogram = 2.20462262 pound
    */
    
    function meterToFeet(value) {
        return (value*3.280839895).toFixed(3)
    }

    function feetToMeter(value) {
        return (value/3.280839895).toFixed(3)
    }

    function literToGallons(value) {
        return (value*0.264172052).toFixed(3)
    }

    function gallonsToLiter(value) {
        return (value/0.264172052).toFixed(3)
    }

    function kilosToPounds(value) {
        return (value*2.20462262).toFixed(3)
    }

    function poundsToKilos(value) {
        return (value/2.20462262).toFixed(3)
    }

})