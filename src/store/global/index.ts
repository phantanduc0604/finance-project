import { theme } from 'config/theme';
import { atom } from 'jotai';

// loading
export const openLoading = atom(false);
export const blurLoading = atom(true);

// menu
export const openMenu = atom(window.screen.width > theme.breakpoints.lg);
