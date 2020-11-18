import React from 'react';
import { OriMuiThemeProvider } from '@ori-ui/material-ui';
import { Page } from '~/components';

export default function App() {
  return (
    <OriMuiThemeProvider>
      <Page />
    </OriMuiThemeProvider>
  );
}
