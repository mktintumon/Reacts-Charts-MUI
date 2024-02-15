import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Bar() {
  const xAxisData = ['2020', '2021', '2022'];

  const seriesData = [
    { data: [2, 3, 5], name: 'TCS' },
    { data: [3, 6, 3], name: 'Google' },
    { data: [2, 5, 6], name: 'Microsoft' },
  ];

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: xAxisData }]}
      series={seriesData.map((item) => ({ data: item.data, label: item.name }))}
      width={500}
      height={300}
    />
  );
}
