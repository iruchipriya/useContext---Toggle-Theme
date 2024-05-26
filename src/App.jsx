import ThemeProvider from './ThemeProvider';
import ThemeButton from './ThemeButton';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
};

export default App;
