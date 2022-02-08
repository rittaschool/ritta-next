import React from 'react';
import GridLayout, { Layout } from 'react-grid-layout';

const Home = () => {
  const [layout, setLayout] = React.useState<Layout[]>([
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ]);

  return (
    <GridLayout
      className="layout"
      layout={layout}
      onLayoutChange={(layout) => setLayout(layout)}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="a" className="bg-pink-500">
        a
      </div>
      <div key="b" className="bg-amber-500">
        b
      </div>
      <div key="c" className="bg-cyan-500">
        c
      </div>
    </GridLayout>
  );
};

export default Home;
