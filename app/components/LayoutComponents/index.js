import React from 'react';
import MainLayout from './Main';

const IndexLayout = () => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <MainLayout />;
  }
};

export default IndexLayout;
