export const APP_ROUTES = {
  path: '/*',
  to: '/',
  LANDING: {
    path: 'landing',
    to: '/auth/landing',
  },
  AUTH: {
    path: 'auth/*',
    to: '/auth',
    LOGIN: {
      path: 'login',
      to: '/auth/login',
    },
    SIGN_UP: {
      path: 'sign-up',
      to: '/auth/sign-up',
    },
    FORGOT_PASSWORD: {
      path: 'forgot-password',
      to: '/auth/forgot-password',
    },
    RESET_PASSWORD: {
      path: 'reset-password',
      to: '/auth/reset-password',
    },
  },
  DASHBOARD: {
    path: 'dashboard',
    to: '/dashboard',
  },
  STOCK: {
    path: 'stock',
    to: '/stock',
  },
  BANK: {
    path: 'bank',
    to: '/bank',
  },
  DEBT: {
    path: 'debt',
    to: '/debt',
  },
  FUND: {
    path: 'fund',
    to: '/fund',
  },
  NOT_FOUND: {
    path: '404',
    to: '/404',
  },
};
