import React, { useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const labels = [100, 200, 300, 400, 500, 600, 700];

const options = {
    fill: true,
    animations: false,
    scales: {
        y: {
            min: 0,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: true,
        },
    },
};

export default function BarChart() {
    const data = useMemo(function () {
        return {
            datasets: [
                {
                    label: "Mis datos",
                    tension: 0.3,
                    data: scores,
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.3)",
                },
            ],
            labels,
        };
    }, []);



    return (


        < div className="container-fluid" >
            < div className="d-sm-flex align-items-center justify-content-between mb-4" >
                <h1 className="h3 mb-0 text-gray-800">LISTA DE VEHICULOS</h1>
            </div >
            <div className='lista-productos listado'>
                <div className="App">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>

    );
}