import React from 'react';
import {useColorScheme} from 'react-native';

// Define theme types
export type ThemeMode = 'light' | 'dark' | 'system';

// Define the colors interface first
interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
  border: string;
  card: string;
  error: string;
  success: string;
  warning: string;
  inactive: string;
  textSecondary: string;
}

// Define colors for each theme
export const lightTheme: ThemeColors = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#007AFF',
  secondary: '#5856D6',
  accent: '#FF2D55',
  border: '#E5E5EA',
  card: '#F2F2F7',
  error: '#FF3B30',
  success: '#34C759',
  warning: '#FFCC00',
  inactive: '#8E8E93',
  textSecondary: '#666666',
};

export const darkTheme: ThemeColors = {
  background: '#000000',
  text: '#FFFFFF',
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  accent: '#FF375F',
  border: '#38383A',
  card: '#1C1C1E',
  error: '#FF453A',
  success: '#32D74B',
  warning: '#FFD60A',
  inactive: '#636366',
  textSecondary: '#EBEBF5',
};

// Context value interface
interface ThemeContextValue {
  theme: ThemeMode;
  isDark: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
}

// Create the context
const ThemeContext = React.createContext<ThemeContextValue | null>(null);

// Provider props interface
interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: ThemeMode;
}

export const ThemeProvider = ({
  children,
  initialTheme = 'system',
}: ThemeProviderProps) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = React.useState<ThemeMode>(initialTheme);

  const isDark = React.useMemo(() => {
    if (theme === 'system') {
      return systemTheme === 'dark';
    }
    return theme === 'dark';
  }, [theme, systemTheme]);

  const colors = React.useMemo(() => {
    return isDark ? darkTheme : lightTheme;
  }, [isDark]);

  const toggleTheme = React.useCallback(() => {
    setTheme(current => {
      if (current === 'light') return 'dark';
      if (current === 'dark') return 'system';
      return 'light';
    });
  }, []);

  const value: ThemeContextValue = React.useMemo(
    () => ({
      theme,
      isDark,
      colors,
      toggleTheme,
    }),
    [theme, isDark, colors, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom hook for using theme
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Utility function to create themed styles
export const createThemedStyles = <T extends object>(
  styleCreator: (colors: ThemeColors) => T,
): (() => T) => {
  return () => {
    const {colors} = useTheme();
    return styleCreator(colors);
  };
};

// Export the ThemeColors type for use in components
export type {ThemeColors};
