import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import useStore from '@/stores';

// Import your screens
import OnboardingScreen from '@/screens/Onboarding';
import HomeScreen from '@/screens/Home';
import TermDetailScreen from '@/screens/TermDetail';
import SettingsScreen from '@/screens/Settings';

// Import your theme provider and types
import {ThemeProvider} from '@/theme';
import {RootStackParamList} from '@/types/navigation';

// Create query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
    },
  },
});

// Create the navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  // Get necessary state from the store
  const {isOnboarded, userPreferences} = useStore();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider initialTheme={userPreferences.theme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <StatusBar
              barStyle={
                userPreferences.theme === 'dark'
                  ? 'light-content'
                  : 'dark-content'
              }
              backgroundColor="transparent"
              translucent
            />
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                contentStyle: {
                  backgroundColor:
                    userPreferences.theme === 'dark' ? '#000' : '#fff',
                },
              }}>
              {!isOnboarded ? (
                // Onboarding Stack
                <Stack.Screen
                  name="Onboarding"
                  component={OnboardingScreen}
                  options={{gestureEnabled: false}}
                />
              ) : (
                // Main App Stack
                <>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen
                    name="TermDetail"
                    component={TermDetailScreen}
                    options={{
                      headerShown: true,
                      title: 'Term Details',
                      animation: 'slide_from_right',
                    }}
                  />
                  <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                      headerShown: true,
                      title: 'Settings',
                      animation: 'slide_from_bottom',
                    }}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
