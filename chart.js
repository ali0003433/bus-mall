let elChart = document.getElementById('my-chart').getContext('2d');

function populateBarChart(prop) {
    let propArray = [];
    for (let i =0; i < fontArray.length; i++) {
        propArray.push(fontArray[i][prop]);
    }
    return propArray;
}

//declare a new var and assign it the value of a new instance of chart object (using chartjs CDN)
function displayBarChart() {
    elImageContainer.innerHTML = '';
    elChart.innerHTML = '';
    let myChart = new Chart (elChart, {
        //assign property of type to be a bar chart
        type: 'bar',
        //set up data property that contains the labels for data
        data: {
            labels: populateBarChart('name'),
            datasets: [
                {
                    label: 'Times clicked',
                    data: populateBarChart('clicked'),
                    backgroundColor: 'purple'
                },
                {
                    label: 'Times shown',
                    data: populateBarChart('shown'),
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
