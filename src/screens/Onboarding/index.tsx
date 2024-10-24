import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {OnboardingScreenProps} from '@/types/navigation';
import useStore from '@/stores';

const OnboardingScreen: React.FC<OnboardingScreenProps> = () => {
  const setIsOnboarded = useStore(state => state.setIsOnboarded);

  const handleComplete = () => {
    setIsOnboarded(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tick</Text>
      <Text style={styles.subtitle}>Learn tech terms effortlessly</Text>
      <TouchableOpacity style={styles.button} onPress={handleComplete}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
