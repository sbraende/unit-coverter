const inputForm = document.getElementById("input-form")
const inputEl = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-element")
const volumeEl = document.getElementById("volume-element")
const massEl = document.getElementById("mass-element")

inputForm.addEventListener("submit", function() {
    event.preventDefault()
    
    let value = Number(inputEl.value)
    lengthEl.textContent = `${value} meters = ${meterToFeet(value)} feet | ${value} feet = ${feetToMeter(value)} meters`
    volumeEl.textContent = `${value} liters = ${literToGallons(value)} gallons | ${value} gallons = ${gallonsToLiter(value)} liters`
    massEl.textContent = `${value} kilos = ${kilosToPounds(value)} pounds | ${value} pounds = ${poundsToKilos(value)} kilos`
})

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

/*
1 meter = 3.280839895 feet
1 liter = 0.264172052 gallon
1 kilogram = 2.20462262 pound
*/