import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {TermDetailScreenProps} from '@/types/navigation';
import useStore from '@/stores';

const TermDetailScreen: React.FC<TermDetailScreenProps> = ({route}) => {
  const {termId} = route.params;
  const terms = useStore(state => state.terms);
  const term = terms.find(t => t.id === termId);

  if (!term) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Term not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.term}>{term.term}</Text>
      <Text style={styles.definition}>{term.definition}</Text>
      <Text style={styles.categoryTitle}>Category</Text>
      <Text style={styles.category}>{term.category}</Text>
      {term.examples.length > 0 && (
        <>
          <Text style={styles.examplesTitle}>Examples</Text>
          {term.examples.map((example, index) => (
            <Text key={index} style={styles.example}>
              • {example}
            </Text>
          ))}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 16,
    color: '#ff3b30',
    textAlign: 'center',
  },
  term: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  definition: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  examplesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  example: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 16,
  },
});

export default TermDetailScreen;
