import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { BoxCustom } from '@/components/common';
import { converNumberToCurrent } from '@/utils';

const data = [
  { label: 'India', value: 50000 },
  { label: 'USA', value: 35000 },
  { label: 'Brazil', value: 10000 },
  { label: 'Other', value: 5000 },
];

const countries = [
  {
    name: 'Stock',
    value: 100000000,
    color: 'hsl(220, 25%, 65%)',
  },
  {
    name: 'Fund',
    value: 100000000,
    color: 'hsl(220, 25%, 45%)',
  },
  {
    name: 'Cash',
    value: 100000000,
    color: 'hsl(220, 25%, 30%)',
  },
];

interface StyledTextProps {
  variant: 'primary' | 'secondary';
}

const StyledText = styled('text', {
  shouldForwardProp: (prop) => prop !== 'variant',
})<StyledTextProps>(({ theme }) => ({
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fill: (theme.vars || theme).palette.text.secondary,
  variants: [
    {
      props: {
        variant: 'primary',
      },
      style: {
        fontSize: theme.typography.h6.fontSize,
      },
    },
    {
      props: ({ variant }) => variant !== 'primary',
      style: {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    {
      props: {
        variant: 'primary',
      },
      style: {
        fontWeight: theme.typography.h5.fontWeight,
      },
    },
    {
      props: ({ variant }) => variant !== 'primary',
      style: {
        fontWeight: theme.typography.body2.fontWeight,
      },
    },
  ],
}));

interface PieCenterLabelProps {
  primaryText: string;
  secondaryText?: string;
}

function PieCenterLabel({ primaryText, secondaryText }: PieCenterLabelProps) {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2;
  const secondaryY = primaryY + 24;

  return (
    <>
      <StyledText variant="primary" x={left + width / 2} y={primaryY}>
        {primaryText}
      </StyledText>
      {secondaryText ? (
        <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
          {secondaryText}
        </StyledText>
      ) : null}
    </>
  );
}

const colors = [
  'hsl(220, 20%, 65%)',
  'hsl(220, 20%, 42%)',
  'hsl(220, 20%, 35%)',
  'hsl(220, 20%, 25%)',
];

export default function SumPieChart() {
  return (
    <BoxCustom>
      <Typography variant="h6">Users by country</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <PieChart
          colors={colors}
          margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
          series={[
            {
              data,
              innerRadius: 75,
              outerRadius: 100,
              paddingAngle: 0,
              highlightScope: { fade: 'global', highlight: 'item' },
            },
          ]}
          height={250}
          width={300}
          slotProps={{
            legend: { hidden: true },
          }}
        >
          {/* <PieCenterLabel primaryText={converNumberToCurrent(100000000)} /> */}
        </PieChart>
      </Box>
      {countries.map((country, index) => (
        <Stack key={index} direction="row" sx={{ alignItems: 'center', gap: 2, pb: 2 }}>
          <Stack sx={{ gap: 1, flexGrow: 1 }}>
            <Stack
              direction="row"
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: '500' }}>
                {country.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {`${converNumberToCurrent(country.value)} (20 %)`}
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              aria-label="Number of users by country"
              value={country.value}
              sx={{
                [`& .${linearProgressClasses.bar}`]: {
                  backgroundColor: country.color,
                },
              }}
            />
          </Stack>
        </Stack>
      ))}
    </BoxCustom>
  );
}
