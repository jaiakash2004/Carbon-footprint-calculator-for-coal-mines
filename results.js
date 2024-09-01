// results.js

// Get stored values from sessionStorage
let totalCO2Emissions = parseFloat(sessionStorage.getItem('totalCO2Emissions'));
let treeCount = parseInt(sessionStorage.getItem('treeCount'));
let fuelBasedCO2 = parseFloat(sessionStorage.getItem('fuelBasedCO2'));
let distanceBasedCO2 = parseFloat(sessionStorage.getItem('distanceBasedCO2'));
let processingCO2 = parseFloat(sessionStorage.getItem('processingCO2'));
let methaneCO2Equivalent = parseFloat(sessionStorage.getItem('methaneCO2Equivalent'));

// Display CO2 emissions message
document.getElementById('co2Message').innerText = `Total CO₂ emissions: ${totalCO2Emissions.toFixed(2)} tons`;

// Display tree offset message
document.getElementById('offsetMessage').innerHTML = `You owe nature <b>${treeCount}</b> tree${treeCount > 1 ? 's' : ''} monthly.<br> 
    ${treeCount > 0 ? `<a href='https://www.tema.org.tr/en/homepage' class='button-17'>🌳 Proceed to offset 🌳</a>` : ''}`;


// Create the pie chart for emissions breakdown
let ctx = document.getElementById('emissionsPieChart').getContext('2d');
let pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Fuel-based Emissions', 'Distance-based Emissions', 'Processing Emissions', 'Methane CO₂ Equivalent'],
        datasets: [{
            data: [fuelBasedCO2, distanceBasedCO2, processingCO2, methaneCO2Equivalent],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'CO₂ Emissions Breakdown'
        }
    }
});

// Additional analysis chart (Bar chart)
let ctx2 = document.getElementById('additionalChart1').getContext('2d');
let barChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Fuel-based', 'Distance-based', 'Processing', 'Methane CO₂ Equivalent'],
        datasets: [{
            label: 'CO₂ Emissions (tons)',
            data: [fuelBasedCO2, distanceBasedCO2, processingCO2, methaneCO2Equivalent],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'CO₂ Emissions Comparison'
        }
    }
});

// More charts can be added similarly if needed
