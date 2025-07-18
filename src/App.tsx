import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import { GlobalLoading } from '@/components/common';
import { useIsFetching } from '@tanstack/react-query';
import configAppRoutes from './routers';
import { ThemeProvider } from './theme';

const App = () => {
  const isFetching: number = useIsFetching();
  const routes = useRoutes(configAppRoutes);
  return (
    <Suspense fallback={<GlobalLoading open />}>
      <ThemeProvider>
        <GlobalLoading open={!!isFetching} />
        {routes}
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
