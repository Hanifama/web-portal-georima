// components/WorkAchievementChart.tsx

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface WorkAchievementChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const WorkAchievementChart: React.FC<WorkAchievementChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // If a chart instance already exists, destroy it
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d") as unknown as CanvasRenderingContext2D
 
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Work Achievement",
              data: data.values,
              backgroundColor: "rgba(75, 192, 192, 0.2)", // Adjust the color as needed
              borderColor: "rgba(75, 192, 192, 1)", // Adjust the color as needed
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default WorkAchievementChart;
