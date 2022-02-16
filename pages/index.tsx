import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@mantine/core';

const Home: NextPage = () => {
  return (
    <>
      <Link href="/login" passHref>
        <Button component="a">Go To Login</Button>
      </Link>
      <Link href="/home">/home</Link>
    </>
  );
};

export default Home;
