import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';


export default function SettingsScreen({navigation, route}) {
  const { onLogout } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
        onPress={() => {
          // Call the logout function passed as a prop
          onLogout();
        }}
          style={{ marginRight: 15 }}
        >
          <Octicons name="sign-out" size={24} color="#5730FB" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      {/* <TouchableOpacity
        style={styles.signInButton}
        onPress={() => {
          // Call the logout function passed as a prop
          onLogout();
        }}
      >
        <Octicons name="sign-out" size={24} color="white" />
        <Text style={styles.signInButtonText}>Chiqish</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButton: {
    backgroundColor: '#5730FB',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 180,
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
