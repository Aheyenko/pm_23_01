window.onload = function () {
    // Doughnut Chart
    const initialHoverOffset = 4;

    const doughnutData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: initialHoverOffset
        }]
    };

    const doughnutOptions = {
        legend:{
display:false,
        },
        onClick: function (event, elements) {
            if (elements.length > 0) {
                const clickedElement = elements[0];
                const datasetIndex = clickedElement.datasetIndex;
                const index = clickedElement.index;

                // Move the clicked piece to the side (e.g., increase the hoverOffset)
                doughnutConfig.data.datasets[datasetIndex].hoverOffset = 8;

                // Redraw the chart
                doughnutChart.update();
            }
        }
    };

    const doughnutConfig = {
        type: 'doughnut',
        data: doughnutData,
        options: doughnutOptions
    };

    let doughnutChart = new Chart(document.getElementById('doughnutChart').getContext('2d'), doughnutConfig);

    // Area Chart
    let wavyGraph = document.getElementById('wavesGraph').getContext('2d');

  const gradient = wavyGraph.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'white');
  gradient.addColorStop(1, '#4cb7ff');


  const wavyChart = new Chart(wavyGraph, {
    type: 'line',
    data: {
      labels: ['','JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',''],
      datasets: [{
        borderColor: 'rgba(0,0,0,0)',   
        backgroundColor: gradient, // Background color with transparency
        label: 'Active Users',
        tension: 0.4,
        display: false,
       
        fill: true,
        data: [32, 34, 31, 27, 30, 36, 40,37, 32],
        pointRadius: 5,
        pointBackgroundColor: 'rgba(0,0,0,0)',
        pointHoverBackgroundColor: '#00c4ff',
        pointHoverRadius: 8, 
        pointHoverBorderColor:' #cceaff',     // Point radius on hover
        pointHoverBorderWidth:3,
      }]
    },
    options: {
        scales: {
            y: {
              ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, ticks) {
                  return value + "k";
                },
                stepSize:10,
              },
              min:0,
              max:70,
            }
          },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: true // Enable tooltips to display data on hover
      },
      plugins:{
      legend: {
        display: false,
      },
    },
    }
  });
}