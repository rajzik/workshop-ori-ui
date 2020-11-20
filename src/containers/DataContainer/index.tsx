import React, { createContext, FC, useContext } from 'react';
import { data } from '~/constants';

const DataContext = createContext(data);

const DataProvider = DataContext.Provider;

export const useData = () => useContext(DataContext);

export const DataContainer: FC = ({ children }) => {
  // This container should contain logic for data fetching.

  return <DataProvider value={data}>{children}</DataProvider>;
};
