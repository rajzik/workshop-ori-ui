import { OriMuiThemeProvider } from '@ori-ui/material-ui';
import { Page } from '~/components';
import { DataContainer, ViewModelContainer } from '~/containers';

export default function App() {
  return (
    <OriMuiThemeProvider>
      <ViewModelContainer>
        <DataContainer>
          <Page />
        </DataContainer>
      </ViewModelContainer>
    </OriMuiThemeProvider>
  );
}
