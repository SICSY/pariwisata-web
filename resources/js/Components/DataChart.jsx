import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Daftarkan elemen dan plugin untuk ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

const DataChart = () => {
    const data1 = {
        labels: ["Destinasi A", "Destinasi B", "Destinasi C", "Destinasi D"],
        datasets: [
            {
                label: "Jumlah Destinasi 2024",
                data: [12, 19, 7, 14], // Nilai untuk Pie Chart
                // backgroundColor: [
                //     "rgba(75, 192, 192, 0.6)",
                //     "rgba(255, 99, 132, 0.6)",
                //     "rgba(255, 159, 64, 0.6)",
                //     "rgba(153, 102, 255, 0.6)",
                // ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 4,
                hoverOffset: 20,
                hoverBackgroundColor: [
                    "rgba(75, 192, 192, 0.8)",
                    "rgba(255, 99, 132, 0.8)",
                    "rgba(255, 159, 64, 0.8)",
                    "rgba(153, 102, 255, 0.8)",
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "right",
                labels: {
                    usePointStyle: true,
                },
            },
            title: {
                display: true,
                text: "Data Jumlah Destinasi",
            },
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
    };

    return (
        <div className="App">
            <h1>Pie Chart with Full Screen</h1>
            <div className="chart-container">
                <Pie data={data1} options={options} />
            </div>
        </div>
    );
};

export default DataChart;
