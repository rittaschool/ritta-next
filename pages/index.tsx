import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import AdminLayout from '../components/AdminLayout';

const Home: NextPage = () => {
  return (
    <AdminLayout
      contentTitle={'Home'}
      contentTitleButton={<i className="fa fa-2x fa-home" />}
      url={'/login'}
    >
      <h1>Redirecting to login</h1>
      <hr />
    </AdminLayout>
  );
};

export default Home;
