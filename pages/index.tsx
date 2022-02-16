import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Link href="/login">/login</Link>
      <Link href="/home">/homie</Link>
    </>
  );
};

export default Home;
