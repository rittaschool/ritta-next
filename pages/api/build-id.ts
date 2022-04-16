import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({
    buildId: process.env.BUILD_ID,
  });
};
