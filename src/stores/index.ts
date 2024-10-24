import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppState} from './types';

const useStore = create<AppState>()(
  persist(
    set => ({
      // Initial state
      isOnboarded: false,
      lastActiveDate: null,
      terms: [],
      favoriteTerms: [],
      recentlyViewedTerms: [],

      notifications: {
        enabled: true,
        frequency: 'medium',
        quietHours: {
          start: '22:00',
          end: '07:00',
        },
        lastNotificationSent: null,
      },

      userPreferences: {
        theme: 'system',
        fontSize: 'medium',
        language: 'en',
        categories: ['all'],
      },

      isLoading: false,
      error: null,

      // Actions
      setIsOnboarded: value => set({isOnboarded: value}),

      addTerm: term =>
        set(state => ({
          terms: [...state.terms, term],
        })),

      removeTerm: termId =>
        set(state => ({
          terms: state.terms.filter(term => term.id !== termId),
        })),

      toggleFavoriteTerm: termId =>
        set(state => ({
          favoriteTerms: state.favoriteTerms.includes(termId)
            ? state.favoriteTerms.filter(id => id !== termId)
            : [...state.favoriteTerms, termId],
        })),

      updateNotificationSettings: settings =>
        set(state => ({
          notifications: {...state.notifications, ...settings},
        })),

      updateUserPreferences: preferences =>
        set(state => ({
          userPreferences: {...state.userPreferences, ...preferences},
        })),

      setError: error => set({error}),

      clearRecentlyViewed: () => set({recentlyViewedTerms: []}),
    }),
    {
      name: 'tick-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useStore;
