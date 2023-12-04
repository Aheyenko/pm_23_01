window.onload = function () {
    // Doughnut Chart
    const initialHoverOffset = 4;

    const doughnutData = {
        labels: [],
        datasets: [{
            label: [],
            data: [300, 50, 100],
            backgroundColor: [
                '#ffc400',
                '#38a4dd',
                '#b39ddb'
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
                doughnutConfig.data.datasets[datasetIndex].hoverOffset = 30;

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

    // Area  Chart
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
  //Purple graphs

  const labels = ['1', '2', '3', '4', '5', '6', '7','8'];
  const data = [
      {
          label: 'My First dataset',
          data: ['50','100','120','40','35', '85', '100','90'],
          borderColor: '#b198dc',
          pointBackgroundColor: 'rgba(0,0,0,0)',
          pointBorderWidth:0,
          pointHoverBorderWidth:0,
          backgroundColor: '#b198dc',
          pointHoverBackgroundColor: '#b198dc',
          pointHoverRadius: 8, 
          pointHoverBorderColor:' #e7e0f4',     // Point radius on hover
          pointHoverBorderWidth:3,
          tension: 0.4,
          fill: true,
      },
      {
          label: 'My Second dataset',
          data: ['105','115','90','80','115','110', '85','120'],
          borderColor: '#e7e0f4',
          pointBackgroundColor: 'rgba(0,0,0,0)',
          pointBorderWidth:0,
          pointHoverBorderWidth:0,
          backgroundColor: '#e7e0f4',
          pointRadius: 5,
    
          tension: 0.4,
          fill: true,
      },
  ];

  const config = {
      type: 'line',
      data:{
        labels: labels,
        datasets: data,
      },
      options: {
          responsive: true,
          plugins: {
              title: {
                  display: false,

              },
              tooltip: {
                  enabled: false,
              },
              legend: {
                display: false,
            },
          },
          interaction: {
              mode: 'nearest',
              axis: 'x',
              intersect: false
          },
          scales: {
              x: {
                  title: {
                      display: false,
                  },
                  display: false,
              },
              y: {
                  stacked: true,
                  title: {
                      display: false,
                  },
                  display: false,
                  min:0,
                  max:300,
              }
          },
          maintainAspectRatio: false,
          tooltips: {
            enabled: false // Enable tooltips to display data on hover
          },

      }
  };

  // Initialize the chart with the provided data and options
  let purpleGraph = new Chart(document.getElementById('purpleGraph').getContext('2d'), config);
   //Green graphs

   const labels1 = ['1', '2', '3', '4', '5', '6', '7','8'];
   const data1 = [
       {
           label: 'My First dataset',
           data: ['95','100','120','40','35', '85', '100','90'],
           borderColor: '#cdedea',
           pointBackgroundColor: 'rgba(0,0,0,0)',
           pointBorderWidth:0,
           pointHoverBorderWidth:0,
           backgroundColor: '#cdedea',
           pointHoverBackgroundColor: '#6dc7be',
           pointHoverRadius: 8, 
           pointHoverBorderColor:'#cdedea',     // Point radius on hover
           pointHoverBorderWidth:3,
           tension: 0.4,
           fill: true,
       },
       {
           label: 'My Second dataset',
           data: ['200','115','90','80','115','110', '85','120'],
           borderColor: '#6dc7be',
           pointBackgroundColor: 'rgba(0,0,0,0)',
           pointBorderWidth:0,
           pointHoverBorderWidth:0,
           backgroundColor: '#6dc7be',
        
           tension: 0.4,
           fill: true,
       },
   ];
 
   const config1 = {
       type: 'line',
       data:{
         labels: labels1,
         datasets: data1,
       },
       options: {
           responsive: true,
           plugins: {
               title: {
                   display: false,
 
               },
               tooltip: {
                   enabled: false,
               },
               legend: {
                 display: false,
             },
           },
           interaction: {
               mode: 'nearest',
               axis: 'x',
               intersect: false
           },
           scales: {
               x: {
                   title: {
                       display: false,
                   },
                   display: false,
               },
               y: {
                   stacked: true,
                   title: {
                       display: false,
                   },
                   display: false,
                   min:0,
                   max:300,
               }
           },
           maintainAspectRatio: false,
           tooltips: {
             enabled: false // Enable tooltips to display data on hover
           },
 
       }
   };
 
   // Initialize the chart with the provided data and options
   let greenGraph = new Chart(document.getElementById('greenGraph').getContext('2d'), config1);
}