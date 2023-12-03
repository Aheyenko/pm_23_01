window.onload = (event) => {
  // Doughnut Chart
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
          hoverOffset: 4
      }]
  };

  const doughnutConfig = {
      type: 'doughnut',
      data: doughnutData
  };

  let doughnutChart = document.getElementById('doughnutChart').getContext('2d');
  new Chart(doughnutChart, doughnutConfig);

  // Area Chart
  const areaData = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [{
          label: "Monthly Sales",
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
          data: [65, 59, 80, 81, 56]
      }]
  };

  const areaOptions = {
      scales: {
          x: [{
              type: 'category',
              labels: areaData.labels
          }],
          y: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  };

  let areaChart = document.getElementById('myAreaChart').getContext('2d');
  new Chart(areaChart, {
      type: 'line',
      data: areaData,
      options: areaOptions
  });
}

