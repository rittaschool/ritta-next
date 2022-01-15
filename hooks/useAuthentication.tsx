import { useState } from 'react';
import { User } from '@rittaschool/shared';
import { loginUser } from '../data/authentication';

interface UseAuthentication {
  authenticated: boolean;
  loading: boolean;
  user: User | null;
  login: (identifier?: string | null, password?: string | null) => void;
}

let setMethods: {
  setAuthenticated?: (authenticated: boolean) => void;
  setLoading?: (loading: boolean) => void;
  setUser?: (user: User | null) => void;
} = {};

const useAuthentication = (): UseAuthentication => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  setMethods = {
    setAuthenticated,
    setLoading,
    setUser,
  };

  return {
    authenticated,
    loading,
    user,
    login,
  };
};

const login = async (identifier?: string | null, password?: string | null) => {
  if (!identifier || !password) console.log('Rip');

  const { user, loading, errors } = await loginUser(identifier!, password!);

  if (!setMethods) return;

  setMethods!.setLoading!(loading); // You should not use ! but this is a special case

  if (user && !errors) {
    setMethods!.setAuthenticated!(true); // You should not use ! but this is a special case
    setMethods!.setUser!(user); // You should not use ! but this is a special case
  }
};

export default useAuthentication;
