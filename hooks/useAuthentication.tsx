import { useState } from 'react';
import { startLogin, submitChallenge } from '../data/authentication';
import { Challenge, IUser } from '@rittaschool/shared';
import { startFido2Setup, respondToFido2Setup } from '../data/fido2';

interface UseAuthentication {
  authenticated: boolean;
  loading: boolean;
  user: IUser | null;
  challenge: Challenge | null;
  startLoginProcess: (
    identifier?: string | null
  ) => Promise<{ nextScreen: string }>;
  submitPassword: (password: string, challenge: Challenge) => any; //TODO: make interface later
  fido2: {
    startSetup: (email: string) => Promise<any>;
    finishSetup: (data: any) => Promise<boolean>;
  };
}

const screens: {
  [key: string]: string;
} = {
  PASSWORD_NEEDED: 'password',
  FIDO2_NEEDED: 'fido2',
  OTP_NEEDED: 'otp',
};

const useAuthentication = (): UseAuthentication => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  const startLoginProcess = async (
    identifier?: string | null
  ): Promise<{ nextScreen: string }> => {
    if (!identifier) console.log('No identifier');

    const { loading, errors, data } = await startLogin(identifier!);

    setLoading(loading);

    if (errors || !data) {
      console.log(errors);
      console.log('No Data');
    }

    if (data!.challenge) {
      setChallenge(data!.challenge);
      return { nextScreen: screens[data!.challenge!.type] };
    } else {
      throw new Error('No challenge');
    }
  };

  const submitPassword = async (password: string, challenge: Challenge) => {
    if (!challenge.userId) return console.log('Challenge has no userId');

    console.log('chal', challenge);

    const { errors, loading, data } = await submitChallenge({
      ...challenge,
      data: {
        passwordData: {
          password,
        },
      },
    });

    console.log('data', data);

    setLoading(loading);

    if (errors || !data) {
      console.log(errors);
    }

    if (data?.user) {
      setUser(data.user);
      return setAuthenticated(true);
    }
  };

  const fido2 = {
    // Email should be removed because this is going to be behind login
    startSetup: async (email: string) => {
      const { errors, data } = await startFido2Setup(email);

      if (errors || !data) {
        console.log(errors);
      }

      const result = await navigator.credentials
        .create({ publicKey: data })
        .catch((err) => console.log('FAIL err: ', err));

      return result;
    },
    finishSetup: async (data: any) => {
      console.log('data', data);
      const { errors, data: resultData } = await respondToFido2Setup(data);

      if (errors || !resultData) {
        console.log(errors);
        return false;
      }

      console.log(resultData);

      return true;
    },
  };

  return {
    authenticated,
    loading,
    user,
    startLoginProcess,
    submitPassword,
    challenge,
    fido2,
  };
};

export default useAuthentication;
