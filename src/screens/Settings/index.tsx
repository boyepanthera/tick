import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {SettingsScreenProps} from '@/types/navigation';
import useStore from '@/stores';

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  const {
    notifications,
    userPreferences,
    updateNotificationSettings,
    updateUserPreferences,
  } = useStore();

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Enable Notifications</Text>
          <Switch
            value={notifications.enabled}
            onValueChange={value =>
              updateNotificationSettings({enabled: value})
            }
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Theme</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            value={userPreferences.theme === 'dark'}
            onValueChange={value =>
              updateUserPreferences({theme: value ? 'dark' : 'light'})
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
