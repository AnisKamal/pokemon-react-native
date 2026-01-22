import { Platform, StyleSheet } from 'react-native';

import { Link } from 'expo-router';
import { View, Text } from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/ThemedText";

export default function HomeScreen() {
  return (

  <SafeAreaView style={styles.container}>
      <ThemedText variant="headline">Pokédex</ThemedText>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#FF0000'}
})
