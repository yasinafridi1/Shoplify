import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
    const labels = ["First week", "Second Week", "Third Week", "Last Week"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Reveneu",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [25, 10, 5, 2, 20, 30, 45],
            },
        ],
    };
    return (
        <div className="w-2/5 h-5/6">
            <Bar data={data} />
        </div>
    );
};

export default BarChart;
