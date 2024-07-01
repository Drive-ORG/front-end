import { Home, Info } from '@mui/icons-material';
import { Drawer } from '@mui/material';

import { NavbarItem } from '../NavbarItem';
import classes from './index.module.scss';
import { NavbarDrawerProps } from './models';

export const NavbarDrawer = ({ isOpen, onClose }: NavbarDrawerProps) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <div className={classes.item_container}>
        <NavbarItem title='Home' link='/'>
          <Home />
        </NavbarItem>
      </div>
      <div className={classes.item_container}>
        <NavbarItem title='About' link='/about'>
          <Info />
        </NavbarItem>
      </div>
    </Drawer>
  );
};
