import { theme } from 'config/theme';
import { atom } from 'jotai';

export const openMenu = atom(window.screen.width > theme.breakpoints.lg);
