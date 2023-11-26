const data = {
  labels: [
      'Red',
      'Blue',
      'Yellow'
  ],
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

const config = {
  type: 'doughnut',
  data: data,
};

let myChart = document.getElementById('donought').getContext('2d');
console.log(myChart)


new Chart(myChart, config);

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
      ul.appendChild(li);
  });
};

populateUl();

console.log(myChart);