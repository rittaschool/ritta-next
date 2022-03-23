import Image, { ImageProps } from 'next/image';
import { FC } from 'react';
import { createStyles, Image as MantineImage, useCss } from '@mantine/core';
import rittaSvg from '../assets/Ritta.svg';

interface LogoProps {
  color?: string;
  SVG?: any;
  onClick?: () => void;
}

const useStyles = createStyles((theme) => ({
  logo: {
    height: '5rem',
    width: '100%',
  },

  svg: {
    height: '100%',
  },
}));

// #1abc9c is ritta primary color (green)
const Logo: FC<LogoProps> = ({
  color = '#1abc9c',
  SVG = rittaSvg,
  onClick,
}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.logo} onClick={onClick}>
      <SVG fill={color} className={classes.svg} />
    </div>
  );
};

export default Logo;
