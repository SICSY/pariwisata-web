import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({ data = {}, options = {} }) => {
    // Validasi data
    if (!data || !data.labels || !data.datasets) {
        return <div>Error: Data tidak valid atau tidak lengkap</div>;
    }

    return <Bar data={data} options={options} />;
};

export default Chart;
