import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  useColorScheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { Mode } from '@mui/system/cssVars/useCurrentColorScheme';
import IncomeBarChart from './components/IncomeBarChart';
import SumPieChart from './components/SumPieChart';
import StatCard, { StatCardProps } from './components/StatusLineChart';

const DashBoard = () => {
  const data: StatCardProps[] = [
    {
      title: 'Users',
      value: '14k',
      interval: 'Last 30 days',
      trend: 'up',
      data: [
        200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380, 360, 400,
        380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
      ],
    },
    {
      title: 'Conversions',
      value: '325',
      interval: 'Last 30 days',
      trend: 'down',
      data: [
        1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820, 780, 800,
        760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
      ],
    },
    {
      title: 'Event count',
      value: '200k',
      interval: 'Last 30 days',
      trend: 'neutral',
      data: [
        500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530, 520, 410,
        530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
      ],
    },
  ];
  // const { mode, setMode } = useColorScheme();
  // if (!mode) {
  //   return null;
  // }
  return (
    <Grid container spacing={2}>
      {data.map((card, index) => (
        <Grid key={index} size={{mobile: 12, tablet: 12, laptop: 4, desktop: 4 }}>
          <StatCard {...card} />
        </Grid>
      ))}
      <Grid key={'grownTreeChart'} size={{ mobile: 12, tablet: 6, laptop: 8, desktop: 8 }}>
        <IncomeBarChart />
      </Grid>
      <Grid key={'netWorthPieChart'} size={{ mobile: 12, tablet: 6, laptop: 4, desktop: 4 }}>
        <SumPieChart />
      </Grid>
    </Grid>
  );
};

export default DashBoard;

// <Box
//     sx={{
//       display: 'flex',
//       width: '100%',
//       alignItems: 'center',
//       justifyContent: 'center',
//       bgcolor: 'background.default',
//       color: 'text.primary',
//       borderRadius: 1,
//       p: 3,
//       minHeight: '56px',
//     }}
//   >
//     <FormControl>
//       <FormLabel id="demo-theme-toggle">Theme</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-theme-toggle"
//         name="theme-toggle"
//         row
//         value={mode}
//         onChange={(event) => setMode(event.target.value as Mode)}
//       >
//         <FormControlLabel value="system" control={<Radio />} label="System" />
//         <FormControlLabel value="light" control={<Radio />} label="Light" />
//         <FormControlLabel value="dark" control={<Radio />} label="Dark" />
//       </RadioGroup>
//     </FormControl>
//   </Box>
