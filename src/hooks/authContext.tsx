import { setToken } from '@/config';
import { STORAGE_KEY } from '@/constants';

import { APP_ROUTES } from '@/routers/routes';
import { clearLocalStorage, createContext, getLocalStorage, isUndefined, setLocalStorage } from '@/utils';
import { useMemo, useState } from 'react';

interface AuthContextValues {
  isLoggedIn: boolean;
  signIn: (data: any) => void;
  signOut: () => void;
}

const [Provider, useAuth] = createContext<AuthContextValues>({
  name: 'auth'
});

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState(getLocalStorage(STORAGE_KEY.ACCESS_TOKEN));

  const [refreshToken, setRefreshToken] = useState(getLocalStorage(STORAGE_KEY.REFRESH_TOKEN));

  const checkIsTokenAvailable = () => {
    if (!isUndefined(accessToken) && !isUndefined(refreshToken)) return true;
    return false;
  };

  const isLoggedIn = useMemo(() => {
    return checkIsTokenAvailable();
    // eslint-disable-next-line
  }, [accessToken, refreshToken]);

  const signIn = (data: any) => {
    setAccessToken(data.access_token);
    setRefreshToken(data.refresh_token);

    setToken(data.access_token);

    setLocalStorage(STORAGE_KEY.ACCESS_TOKEN, data.access_token);
    setLocalStorage(STORAGE_KEY.REFRESH_TOKEN, data.refresh_token);
  };

  const signOut = async () => {
    clearLocalStorage();
    const _window: any = window;
    _window.location = APP_ROUTES.AUTH.LOGIN.to;
  };

  const value = useMemo(() => {
    return {
      isLoggedIn,
      signIn,
      signOut,
    };
  }, [isLoggedIn]);

  return <Provider value={value}>{children}</Provider>;
};

export { AuthProvider, useAuth };
