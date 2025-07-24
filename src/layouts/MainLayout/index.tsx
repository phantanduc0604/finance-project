import Header from '@/components/common/Headers';
import { Container } from '@mui/material';
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
        <Container sx={{height: 'calc(100vh - 66px)' ,overflowY: 'auto', scrollBehavior: 'smooth' }} maxWidth="desktop">
          <Outlet />
        </Container>
      </ContainerContentWrapper>
    </main>
  );
};

export default MainLayout;
