import { Typography, Button, Stack, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { BoxCustom } from '@/components/common';
import { converNumberToCurrent } from '@/utils';

const combinedData = [
  { month: 'Jan', thisYear: 5000, lastYear: 4000 },
  { month: 'Feb', thisYear: 4500, lastYear: 4200 },
  { month: 'Mar', thisYear: 7000, lastYear: 6800 },
  { month: 'Apr', thisYear: 6000, lastYear: 5000 },
  { month: 'May', thisYear: 8000, lastYear: 7500 },
  { month: 'Jun', thisYear: 9000, lastYear: 8500 },
  { month: 'Jul', thisYear: 0, lastYear: 7200 },
  { month: 'Aug', thisYear: 0, lastYear: 8100 },
  { month: 'Sep', thisYear: 0, lastYear: 8700 },
  { month: 'Oct', thisYear: 0, lastYear: 9200 },
  { month: 'Nov', thisYear: 0, lastYear: 9800 },
  { month: 'Dec', thisYear: 0, lastYear: 10200 },
];
export default function IncomeBarChart() {
  const [showLastYear, setShowLastYear] = useState(false);

  return (
    <BoxCustom>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6">Monthly Income Overview</Typography>
        <Switch onClick={() => setShowLastYear((prev) => !prev)} checked={showLastYear} />
      </Stack>

      <BarChart
      margin={{ left: 0, right: 0, top: 0, bottom: 20 }}
        borderRadius={10}
        slotProps={{
          legend: { hidden: true },
        }}
        sx={{
          '& .MuiChartsAxis-line': {
            display: 'none',
          },
          '& .MuiChartsAxis-tick': {
            display: 'none',
          },
          '& .MuiChartsAxis-directionY': {
            display: 'none',
          },
        }}
        xAxis={[
          {
            id: 'months',
            data: combinedData.map((d) => d.month),
            scaleType: 'band',
            tickPlacement: 'middle',
            tickLabelPlacement: 'middle',
          },
        ]}
        series={[
          ...(showLastYear
            ? [
                {
                  data: combinedData.map((d) => d.lastYear),
                  label: 'Last Year',
                  color: '#9e9e9e',
                  valueFormatter: (value: number | null) =>
                    `${converNumberToCurrent(value ? value : 0)} ₫`,
                },
              ]
            : []),
          {
            data: combinedData.map((d) => d.thisYear),
            label: 'Current Year',
            color: '#3f51b5',
            valueFormatter: (value: number | null) =>
              `${converNumberToCurrent(value ? value : 0)} ₫`,
          },
        ]}
        height={350}
      />
    </BoxCustom>
  );
}
