//------------ Tickets Open-------------------------
var bar = document.getElementById('TicketsOpen').getContext('2d');
var TicketsOpen = new Chart(bar, {
    type: 'horizontalBar',
    data: {
        labels : ['1 - 10 Days', '11 - 20 Days', '21 - 30 Days', '31 - 40 Days', 'Above 40 Days'],
        datasets: [{
            label: 'Tickets Open',
            backgroundColor: ["#22cece", "#36a2eb", "#ffce56", "#ff9e4a", "#ff6384"],
            // borderColor: ["red", "green", "#FFCE56", "#E7E9ED", "#36A2EB"],
            hoverBorderColor:["yellow"],
            data: [25, 30, 25, 2, 40 ]
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    }
});

//------------ Tickets Closed-------------------------
var bar = document.getElementById('TicketsClosed').getContext('2d');
var TicketsClosed = new Chart(bar, {
    type: 'horizontalBar',
    data: {
        labels : ['1 - 10 Days', '11 - 20 Days', '21 - 30 Days', '31 - 40 Days', 'Above 40 Days'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ["#22cece", "#36a2eb", "#ffce56", "#ff9e4a", "#ff6384"],
            // borderColor: ["red", "green", "#FFCE56", "#E7E9ED", "#36A2EB"],
            hoverBorderColor:["yellow"],
            data: [35, 20, 1, 25, 20]
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    }
});

//------------ No. of Complaints-------------------------
var bar = document.getElementById('Complaints').getContext('2d');
var Complaints = new Chart(bar, {
    type: 'horizontalBar',
    data: {
        labels : ['A3 Sedan', 'A3 Sportback', 'A3 Cabriolet', 'S3 Sedan', 'S3 Sportback','RS 3 Sedan', 'RS 3 Sportback'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ["#22cece", "#36a2eb", "#ffce56", "#ff9e4a", "#ff6384", "#22cece", "#36a2eb"],
            // borderColor: ["red", "green", "#FFCE56", "#E7E9ED", "#36A2EB"],
            hoverBorderColor:["yellow"],
            data: [35, 20, 1, 25, 20, 10, 23]
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    }
});


//------------ No. of Complaints (Repeat Repair) -------------------------
var bar = document.getElementById('RepeatRepair').getContext('2d');
var RepeatRepair = new Chart(bar, {
    type: 'horizontalBar',
    data: {
        labels : ['A3 Sedan', 'A3 Sportback', 'A3 Cabriolet', 'S3 Sedan', 'S3 Sportback','RS 3 Sedan', 'RS 3 Sportback'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ["#22cece", "#36a2eb", "#ffce56", "#ff9e4a", "#ff6384", "#22cece", "#36a2eb"],
            // borderColor: ["red", "green", "#FFCE56", "#E7E9ED", "#36A2EB"],
            hoverBorderColor:["yellow"],
            data: [35, 20, 1, 25, 20, 10, 23]
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    }
});



   