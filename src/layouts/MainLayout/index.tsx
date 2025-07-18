import Header from '@/components/common/Headers';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  const ContainerContentWrapper = ({ children }: { children: ReactNode }) => {
    return (
      <>
        <Header />
        {children}
      </>
    );
  };

  return (
      <main>
        <ContainerContentWrapper>
          <Outlet />
        </ContainerContentWrapper>
      </main>
  );
};

export default MainLayout;
