import { Box } from '@mantine/core';
import React from 'react';
import GridLayout, { Layout as LayoutType } from 'react-grid-layout';
import Layout from '../components/Layout';

const Home = () => {
  const [layout, setLayout] = React.useState<LayoutType[]>([
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ]);

  return (
    <Layout>
      <GridLayout
        className="layout"
        layout={layout}
        onLayoutChange={(layout) => setLayout(layout)}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <Box
          key="a"
          sx={() => ({
            backgroundColor: 'hotpink',
          })}
        >
          A
        </Box>
        <Box
          key="b"
          sx={() => ({
            backgroundColor: 'turquoise',
          })}
        >
          B
        </Box>
        <Box
          key="c"
          sx={() => ({
            backgroundColor: 'indigo',
          })}
        >
          C
        </Box>
      </GridLayout>
    </Layout>
  );
};

export default Home;
