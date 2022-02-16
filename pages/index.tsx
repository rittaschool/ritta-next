import type { NextPage } from 'next';
import Link from 'next/link';
import { Button, List, ListItem } from '@mantine/core';

const Home: NextPage = () => {
  return (
    <List>
      <ListItem>
        <Link href="/login" passHref>
          <Button component="a">Go To Login</Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/home" passHref>
          <Button component="a">Go To Dashboard</Button>
        </Link>
      </ListItem>
    </List>
  );
};

export default Home;
