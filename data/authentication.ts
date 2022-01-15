import { gql } from '@apollo/client';
import { graphqlClient as client } from './baseClient';

export const loginUser = async (identifier: string, password: string) => {
  const res = await client.query({
    query: gql`
      query Login {
        login(
          loginUserDto: { username: "${identifier}", password: "${password}" }
        ) {
          user {
            id
            username
            firstName
            lastName
          }
          token
          refreshToken
        }
      }
    `,
  });

  return {
    user: res.data.login.user,
    token: res.data.login.token,
    refreshToken: res.data.login.refreshToken,
    loading: res.loading,
    errors: res.errors,
  };
};
