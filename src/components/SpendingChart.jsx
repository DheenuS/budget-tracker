import React, { useContext, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Context } from '../context/Context';


ChartJS.register(ArcElement, Tooltip, Legend);

const SpendingChart = () => {
  
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const {
    food,
    transportation,
    entertainment,
    shopping,
    housing,
    utilities,
    health,
  } = useContext(Context);

    useEffect(() => {
      setChartData({
        labels: ['Food & Dining', 'Transportation', 'Housing', 'Shopping', 'Entertainment', 'Utilities', 'Health'],
        datasets: [
          {
            data: [food, transportation, housing, shopping, entertainment, utilities, health],
            backgroundColor: [
              '#EF4444', '#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EC4899', '#10B981',
            ],
            borderWidth: 0,
          },
        ],
      });
    }, [food, transportation, housing, shopping, entertainment, utilities, health]);
    
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
            const percentage = total ? Math.round((value / total) * 100) : 0;
            return `${label}: ₹${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-64 md:h-72 lg:h-80">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default SpendingChart;
