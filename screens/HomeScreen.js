import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import JobCard from '../components/JobCards';

const jobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
  { id: '2', title: 'Jr Executive', company: 'Burger King', salary: '$96,000', location: 'Los Angeles, US' },
  { id: '3', title: 'Product Manager', company: 'Beats', salary: '$84,000', location: 'Florida, US' },
  { id: '4', title: 'Marketing Manager', company: 'Google', salary: '$120,000', location: 'New York, US' },
  { id: '5', title: 'Data Scientist', company: 'Amazon', salary: '$150,000', location: 'San Francisco, US' },
  { id: '6', title: 'UX Designer', company: 'Apple', salary: '$110,000', location: 'Seattle, US' },
  { id: '7', title: 'DevOps Engineer', company: 'Microsoft', salary: '$140,000', location: 'Austin, US' },
  { id: '8', title: 'Project Manager', company: 'Tesla', salary: '$130,000', location: 'Dallas, US' },
];

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {name}!</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        data={jobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={item => item.id}
        horizontal
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={jobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: 'gray',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});

export default HomeScreen;
