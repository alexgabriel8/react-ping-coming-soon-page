import { ThemeProvider } from './context/theme-context';
import { AppRoutes } from './pages/routes'
import { GlobalStyle } from './global-style';

function App() {
  return (
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
  );
}

export default App;