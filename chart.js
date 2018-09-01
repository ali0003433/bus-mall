//get canvas element in html w/ id 'my-chart'
let elChart = document.getElementById('my-chart').getContext('2d');

//define a function to populate the clicks and shown in the canvas element
function populateChart(prop) {
    //declare var and assign empty array to store property values
    let propArray = [];
    //loop through the imageArray 
    for (let i =0; i < imageArray.length; i++) {
    propArray.push(imageArray[i][prop])
    }
    return propArray;
}

//declare a new var and assign it the value of a new instance of chart object (using chartjs CDN)
function() {
    elImageContainer.innerHTML = '';
    elChart.innerHTML = '';
    let myChart = new Chart (elChart, {
        //assign property of type to be a bar chart
        type: 'bar',
        //set up data property that contains the labels for data 
        data: {
            labels: populateChart('name'),
            datasets: [
                {
                    label: 'Times clicked',
                    data: populateChart('clicked'),
                    backgroundColor: 'lightgreen'
                }, 
                {
                    label: 'Times shown',
                    data: populateChart('shown'),
                    backgroundColor: 'grey'
                }
            ],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }
    });
}
