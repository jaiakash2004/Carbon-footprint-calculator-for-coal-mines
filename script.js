// script.js

// Calculate emissions from coal transportation
function calculateTransportation() {
    let fuelConsumption = parseFloat(document.getElementById('fuelConsumption').value);
    let emissionFactorFuel = parseFloat(document.getElementById('emissionFactorFuel').value);
    let distance = parseFloat(document.getElementById('distance').value);
    let fuelPerDistance = parseFloat(document.getElementById('fuelPerDistance').value);
    let tonnage = parseFloat(document.getElementById('tonnage').value);

    // Fuel-based calculation
    let fuelBasedCO2 = fuelConsumption * emissionFactorFuel;

    // Distance-based calculation
    let distanceBasedCO2 = tonnage * distance * fuelPerDistance * emissionFactorFuel;

    document.getElementById('transportationResult').innerText = 
        `Fuel-based CO₂: ${fuelBasedCO2.toFixed(2)} kg, Distance-based CO₂: ${distanceBasedCO2.toFixed(2)} kg`;
}

// Calculate emissions from coal processing
function calculateProcessing() {
    let coalProcessed = parseFloat(document.getElementById('coalProcessed').value);
    let emissionFactorProcessing = parseFloat(document.getElementById('emissionFactorProcessing').value);
    
    let processingCO2 = coalProcessed * emissionFactorProcessing;

    document.getElementById('processingResult').innerText = `Processing CO₂: ${processingCO2.toFixed(2)} tons`;
}

// Calculate methane emissions and convert to CO₂-equivalent
function calculateMethane() {
    let coalProduction = parseFloat(document.getElementById('coalProduction').value);
    let methaneFactor = parseFloat(document.getElementById('methaneFactor').value);
    let gwp = parseFloat(document.getElementById('gwp').value);

    // Methane emissions
    let methaneEmissions = coalProduction * methaneFactor;
    // CO₂-equivalent emissions
    let co2Equivalent = methaneEmissions * gwp;

    document.getElementById('methaneResult').innerText = 
        `Methane CO₂-equivalent: ${co2Equivalent.toFixed(2)} tons (Methane: ${methaneEmissions.toFixed(2)} tons)`;
}

// Calculate total emissions
function calculateTotalEmissions() {
    let fuelBasedCO2 = parseFloat(document.getElementById('fuelConsumption').value) * parseFloat(document.getElementById('emissionFactorFuel').value);
    let distanceBasedCO2 = parseFloat(document.getElementById('tonnage').value) * parseFloat(document.getElementById('distance').value) * parseFloat(document.getElementById('fuelPerDistance').value) * parseFloat(document.getElementById('emissionFactorFuel').value);
    let processingCO2 = parseFloat(document.getElementById('coalProcessed').value) * parseFloat(document.getElementById('emissionFactorProcessing').value);
    let methaneCO2Equivalent = parseFloat(document.getElementById('coalProduction').value) * parseFloat(document.getElementById('methaneFactor').value) * parseFloat(document.getElementById('gwp').value);

    // Total CO2 emissions calculation
    let totalCO2Emissions = fuelBasedCO2 + distanceBasedCO2 + processingCO2 + methaneCO2Equivalent;

    // Calculate tree offset (rounded)
    let treeCount = Math.round(totalCO2Emissions / 411.4);

    // Store the data in sessionStorage to use on the results page
    sessionStorage.setItem('totalCO2Emissions', totalCO2Emissions);
    sessionStorage.setItem('treeCount', treeCount);
    sessionStorage.setItem('fuelBasedCO2', fuelBasedCO2);
    sessionStorage.setItem('distanceBasedCO2', distanceBasedCO2);
    sessionStorage.setItem('processingCO2', processingCO2);
    sessionStorage.setItem('methaneCO2Equivalent', methaneCO2Equivalent);

    // Redirect to the results page
    window.location.href = 'results.html';
}
