import { Theme } from '@mui/material';
import Backdrop from './Backdrop';
import Badge from './Badge';
import Button from './Button';
import Form from './Form';
import Menu from './Menu';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Button(theme), Backdrop(theme), Badge(theme),Form(theme) , Menu(theme));
}
