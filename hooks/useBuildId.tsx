import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useInterval from './useInterval';

function useBuildId() {
  let [buildId, setBuildId] = useState('unknown');

  useEffect(() => {
    async function handle() {
      let id = await fetchId();

      if (!(id == 'development')) {
        id = id.substring(0, 7);
      }

      setBuildId(id);
    }

    handle();
  }, []);

  useInterval(async () => {
    let id = await fetchId();

    if (!(id == 'development')) {
      id = id.substring(0, 7);
    }

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
