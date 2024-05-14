import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Shop',
      data: [1200, 1500, 900, 1100, 1300],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Invest',
      data: [500, 700, 600, 800, 900],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Rent',
      data: [800, 850, 800, 900, 950],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
    },
    {
      label: 'Car',
      data: [300, 400, 350, 400, 450],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
        color: '#111',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      beginAtZero: true
    },
    y: {
      title: {
        display: true,
        text: 'Spending ($ Dollars)',
        color: '#111',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function SpendingChart() {
  return <Bar data={data} options={options} />;
}

export default SpendingChart;
