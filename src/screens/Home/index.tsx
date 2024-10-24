import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {HomeScreenProps} from '@/types/navigation';
import useStore from '@/stores';
import {createThemedStyles, useTheme} from '@/theme';

interface EmptyListProps {
  isDark: boolean;
}

const EmptyList: React.FC<EmptyListProps> = ({isDark}) => {
  const styles = useStyles();
  const {colors} = useTheme();

  return (
    <View style={styles.emptyContainer}>
      <Text style={[styles.emptyText, {color: colors.textSecondary}]}>
        No terms available {isDark ? '🌙' : '☀️'}
      </Text>
      <Text style={[styles.emptySubText, {color: colors.textSecondary}]}>
        Start by adding some tech terms to your collection
      </Text>
    </View>
  );
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const terms = useStore(state => state.terms);
  const {colors, isDark} = useTheme();
  const styles = useStyles();

  const handleTermPress = (termId: string) => {
    navigation.navigate('TermDetail', {termId});
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Text style={[styles.title, {color: colors.text}]}>Tech Terms</Text>
        <TouchableOpacity
          onPress={handleSettingsPress}
          style={[styles.settingsButton, {backgroundColor: colors.card}]}>
          <Text style={[styles.settingsText, {color: colors.primary}]}>
            Settings {isDark ? '⚙️' : '🔧'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={terms}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<EmptyList isDark={isDark} />}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.termCard,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
              },
            ]}
            onPress={() => handleTermPress(item.id)}
            activeOpacity={0.7}>
            <Text style={[styles.termText, {color: colors.text}]}>
              {item.term}
            </Text>
            <Text
              style={[styles.definitionText, {color: colors.textSecondary}]}
              numberOfLines={2}>
              {item.definition}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const useStyles = createThemedStyles(colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
    },
    settingsButton: {
      padding: 8,
      borderRadius: 8,
      backgroundColor: colors.card,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    settingsText: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.primary,
    },
    listContainer: {
      paddingBottom: 16,
    },
    termCard: {
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      borderWidth: 1,
      backgroundColor: colors.card,
      borderColor: colors.border,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    termText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
      color: colors.text,
    },
    definitionText: {
      fontSize: 14,
      lineHeight: 20,
      color: colors.textSecondary,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 40,
    },
    emptyText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: colors.textSecondary,
    },
    emptySubText: {
      fontSize: 14,
      textAlign: 'center',
      color: colors.textSecondary,
    },
  }),
);

export default HomeScreen;
