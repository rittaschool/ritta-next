import { useState } from 'react';
import Image from 'next/image';
import {
  Anchor,
  Burger,
  createStyles,
  Header as MantineHeader,
  MediaQuery,
} from '@mantine/core';
import Logo from './Logo';

import Ritta from '../assets/Ritta.svg';

const useStyles = createStyles((theme) => ({
  header: {
    alignItems: 'center',
    display: 'flex',
  },
}));

const Header = () => {
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <MantineHeader height={75}>
      <div className={classes.header}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={open}
            onClick={() => setOpen(!open)}
            size="sm"
            mr="xl"
          ></Burger>
        </MediaQuery>
        <Logo />
      </div>
    </MantineHeader>
  );
};

export default Header;
