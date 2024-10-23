export interface Term {
  id: string;
  term: string;
  definition: string;
  category: string;
  examples: string[];
  dateAdded: string;
}

export interface NotificationSettings {
  enabled: boolean;
  frequency: 'low' | 'medium' | 'high'; // notifications per day
  quietHours: {
    start: string; // 24hr format "HH:mm"
    end: string; // 24hr format "HH:mm"
  };
  lastNotificationSent: string | null;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  language: 'en' | 'es' | 'fr'; // support for future localization
  categories: string[]; // categories user is interested in
}

export interface AppState {
  // User-related state
  isOnboarded: boolean;
  lastActiveDate: string | null;

  // Terms-related state
  terms: Term[];
  favoriteTerms: string[]; // array of term IDs
  recentlyViewedTerms: string[]; // array of term IDs

  // Settings and Preferences
  notifications: NotificationSettings;
  userPreferences: UserPreferences;

  // App State
  isLoading: boolean;
  error: string | null;

  // Actions
  setIsOnboarded: (value: boolean) => void;
  addTerm: (term: Term) => void;
  removeTerm: (termId: string) => void;
  toggleFavoriteTerm: (termId: string) => void;
  updateNotificationSettings: (settings: Partial<NotificationSettings>) => void;
  updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
  setError: (error: string | null) => void;
  clearRecentlyViewed: () => void;
}
