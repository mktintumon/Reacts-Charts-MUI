import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Line() {
  const [streamData, setStreamData] = useState([2, 5.5, 2, 8.5, 1.5, 5]);

//Simulating stream data update every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newDataPoint = Math.random() * 10; 
//       setStreamData((prevData) => [...prevData.slice(1), newDataPoint]); 
//     }, 1000);

//     return () => clearInterval(interval); 
//   }, []);

  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
      series={[
        {
          data: streamData,
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
  );
}
