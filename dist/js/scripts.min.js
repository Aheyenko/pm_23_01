window.onload = function () {


    // Area  Chart
 
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

   //AJAX
   const fetchData = () => {
    return new Promise((resolve, reject) => {
      const xmlhttp = new XMLHttpRequest();
      const url = '/json/data.json';
  
      xmlhttp.open("GET", url, true);
      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          const data = JSON.parse(this.responseText);
          const wavy_lables = data.wavy.map(function(index) {return index.month})
          const wavy_datas= data.wavy.map(function(index) {return index.number1})
          const diagram_lables = data.diagram.map(function(index) {return index.piece})
          const diagram_datas= data.diagram.map(function(index) {return index.number1})
        //   const label_month = data.datas3.map(function(index) {return index.month})
        //   const data_set1 = data.datas3.map(function(index) {return index.number1})
        //   const data_set2 = data.datas3.map(function(index) {return index.number2})
        //   const data_set3 = data.datas3.map(function(index) {return index.number3})
        
          resolve([wavy_lables, wavy_datas,diagram_lables,diagram_datas]);
        }
      };
      xmlhttp.send();
    });
  };
  fetchData().then(([wavy_lables, wavy_datas,diagram_lables,diagram_datas]) => {
      let wavyGraph = document.getElementById('wavesGraph').getContext('2d');

      const gradient = wavyGraph.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'white');
      gradient.addColorStop(1, '#4cb7ff');
    
    
      const wavyChart = new Chart(wavyGraph, {
        type: 'line',
        data: {






          labels:wavy_lables,
          datasets: [{
            borderColor: 'rgba(0,0,0,0)',   
            backgroundColor: gradient, // Background color with transparency
            label: 'Active Users',
            tension: 0.4,
            display: false,
           
            fill: true,
            data:wavy_datas,
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
        }});

    // Doughnut Chart
    
    const initialHoverOffset = 4;

    const doughnutData = {
        labels: [],
        datasets: [{
            label: [],
            data: diagram_datas,
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

    let graphLabel1 = document.getElementById("graphLabel");

    //graphLabel.innerText = datata.datasets[0].needleValue + '/10';
    graphLabel.innerHTML = `${data.diagram_datas[2]}<span style="color: black; font-size: 70%; font-weight: normal;"></span>`;

    // graphLabel.fontSize = '38px'
    graphLabel.style.fontWeight = 'bold';

})
async function getData() {
    const response = await fetch('/json/data.json'); 
    const data = await response.json(); 
    return data;
   }
}