import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.title}>About</Text>
      <Text style={styles.title}>Services</Text>
      <Text style={styles.title}>Contact-Us</Text>
      {/* Add more header elements as needed */}
    </View>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'blue', // Customize the background color
    paddingHorizontal: 16,
  },
  backButton: {
    color: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Customize the text color
  },
};

export default Header;
