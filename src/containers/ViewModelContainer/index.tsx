import { createContext, FC, useContext } from 'react';
import { viewModel } from '~/constants';

const ViewModelContext = createContext(viewModel);

const ViewModelProvider = ViewModelContext.Provider;

export const useViewModel = () => useContext(ViewModelContext);

export const ViewModelContainer: FC = ({ children }) => (
  // This container should contain logic for data fetching.

  <ViewModelProvider value={viewModel}>{children}</ViewModelProvider>
);
