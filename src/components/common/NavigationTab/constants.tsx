import { APP_ROUTES } from '@/routers/routes';
import { ReactNode } from 'react';
import {
  GridViewRounded,
  AccountBalanceRounded,
  ShowChartRounded,
  BusinessRounded,
  CreditCardRounded,
} from '@mui/icons-material';

export interface MenuItem {
  label: string;
  path: string;
  name: string;
  icon: ReactNode;
}

export const menuRouteParent: MenuItem[] = [
  {
    label: 'Stock',
    path: APP_ROUTES.STOCK.to,
    name: 'stock',
    icon: <ShowChartRounded sx={{ height: '100%', width: '100%' }} />,
  },
  {
    label: 'Bank',
    path: APP_ROUTES.BANK.to,
    name: 'bank',
    icon: <AccountBalanceRounded sx={{ height: '100%', width: '100%' }} />,
  },
  {
    label: 'Dashboard',
    path: APP_ROUTES.DASHBOARD.to,
    name: 'dashboard',
    icon: <GridViewRounded sx={{ height: '100%', width: '100%' }} />,
  },
  {
    label: 'Fund',
    path: APP_ROUTES.FUND.to,
    name: 'fund',
    icon: <BusinessRounded sx={{ height: '100%', width: '100%' }} />,
  },
  {
    label: 'Debt',
    path: APP_ROUTES.DEBT.to,
    name: 'debt',
    icon: <CreditCardRounded sx={{ height: '100%', width: '100%' }} />,
  },
];
