import { useState } from 'react';
import useInterval from './useInterval';

function useBuildId() {
  let [buildId, setBuildId] = useState('unknown');

  useInterval(async () => {
    let id = await fetchId();

    setBuildId(id);
  }, 30000); // 30 seconds

  return buildId;
}

async function fetchId() {
  let response = await fetch('/api/build-id');

  if (!response.ok) return;

  let data = await response.json();

  return data.buildId;
}

export default useBuildId;
