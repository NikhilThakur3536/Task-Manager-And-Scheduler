import { Radar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { useEffect,useState } from 'react';
import { Chart, ChartOptions, RadialLinearScale, PointElement, LineElement, Tooltip, Legend,Filler } from 'chart.js';

Chart.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend,Filler);

export const RadarChart = () => {
 
    const [chartKey, setChartKey] = useState(0); // Force re-mounting on re-entry

    useEffect(() => {
      const interval = setInterval(() => {
        setChartKey((prev) => prev + 1);
      }, 6000);
      return () => clearInterval(interval);
    }, []);

  const data = {
    labels: ['Speed', 'Strength', 'Agility', 'Stamina', 'Skill'],
    datasets: [{
        data: [65, 59, 90, 81, 56],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        data: [28, 48, 40, 19,30],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
  };

  const options: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          display: false, 
        },
        grid: {
          circular: false, 
          color: 'rgba(0, 0, 0, 0.14)'
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutBounce',
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
  };

  return (
    <>
        <div className='flex '>

        </div>
        <div className=' absolute z-40 w-[40%] h-[59%] top-2/4 left-1/4 transform translate-x-6 -translate-y-10 bg-gray-100/60 rounded-2xl border border-gray-500/30'>
            <h3 className='font-poppins font-semibold pl-10 text-lg'> Insights & Analytics</h3>
            <motion.div className='w-full h-full'
                initial={{rotateX:80,scale:0}}
                whileInView={{rotateX:0,scale:1}}
                transition={{duration:.7}}
            >
            <Radar key={chartKey} className="transform translate-x-1 -translate-y-4" data={data} options={options} />
            </motion.div>
        </div>
    </>
  );
};

