import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SpendingChart = () => {
  const data = {
    labels: ['Food & Dining', 'Transportation', 'Housing', 'Utilities', 'Entertainment', 'Shopping', 'Health'],
    datasets: [
      {
        data: [320, 120, 1200, 150, 75, 180, 50],
        backgroundColor: [
          '#EF4444', // red
          '#3B82F6', // blue
          '#8B5CF6', // purple
          '#10B981', // green
          '#F59E0B', // yellow
          '#EC4899', // pink
          '#10B981', // green
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12,
          padding: 16,
          color: '#fff',
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ₹${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-64 md:h-72 lg:h-80">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SpendingChart;
