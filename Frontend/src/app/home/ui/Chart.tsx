import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartData,  
  ChartOptions
} from "chart.js";
import { Chart } from "react-chartjs-2";


ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);


type CombinedChartData = ChartData<"line"|"bar" , number[], string>;


const options: ChartOptions<"bar" | "line"> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Tasks Completed Every Month"
    }
  },
  scales: {
    y: {
      stacked: true 
    }
  }
};


const generateRandomNumbers = (count: number, min: number, max: number): number[] =>
  Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);

const labels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];


const data: CombinedChartData = {
  labels,
  datasets: [
    {
      label: "Front-End",
      data: generateRandomNumbers(7, 0, 100),
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      stack: "combined",
      type: "line"
    },
    {
      label: "Back-End",
      data: generateRandomNumbers(7, 0, 100),
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      stack: "combined",
      type: "line"
    }
  ]
};

const data2:CombinedChartData={
  labels,
  datasets: [
    {
      label: "Task completed",
      data: generateRandomNumbers(7, 0, 100),
      borderColor: "rgba(98, 2, 118, 0.5)", 
      backgroundColor: "rgba(188, 9, 224, 0.5)",
      stack: "combined",
      type: "bar"
    },
    {
      label: "In Progress",
      data: generateRandomNumbers(7, 0, 100),
      borderColor: "rgb(4, 61, 99)",
      backgroundColor: "rgba(0, 153, 255, 0.5)",
      stack: "combined",
      type: "bar"
    }
  ]
}

export const BarChart: React.FC = () => {
  return (
        <div>
            
            <Chart type="line" data={data} options={options} />
        </div>
  )

}
 export const AboutSectionMobileChart=()=>{
    return(
      <div>  
        <Chart type="bar" data={data2} options={options} />
      </div>
      
    )
 }
