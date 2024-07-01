import { ArrowUpward } from '@mui/icons-material';
import { Button, Grid, Hidden } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { NavbarDrawer } from './_components/NavbarDrawer';
import { NavbarItem } from './_components/NavbarItem';
import classes from './index.module.scss';

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Hidden mdDown>
        <Grid container spacing={6}>
          <Grid item>
            <NavbarItem title='Home' link='/' />
          </Grid>
          <Grid item>
            <NavbarItem title='About' link='/about' />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Button variant='outlined' onClick={handleOpenDrawer}>
          <ArrowUpward className={`${isDrawerOpen ? classes.opened_icon : ''} ${classes.icon}`} />
        </Button>
        <NavbarDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
      </Hidden>
    </>
  );
};
