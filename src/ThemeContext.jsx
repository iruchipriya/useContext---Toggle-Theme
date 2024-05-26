import { createContext, useContext } from 'react';

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);
//cutom hook is useHook
export { ThemeContext, useTheme };
