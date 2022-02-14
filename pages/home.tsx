import React from 'react';
import { Layout } from 'react-grid-layout';
import Calendar from '../components/Calendar';
import Grid from '../components/Grid';

const Home = () => {
  const [layout, setLayout] = React.useState<Layout[]>([
    { i: 'calendar', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ]);

  return (
    <Grid
      className="layout"
      layout={layout}
      onLayoutChange={(layout) => setLayout(layout)}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="calendar" className="bg-pink-500">
        <Calendar />
      </div>
      <div key="b" className="bg-amber-500">
        b
      </div>
      <div key="c" className="bg-cyan-500">
        c
      </div>
    </Grid>
  );
};

export default Home;
