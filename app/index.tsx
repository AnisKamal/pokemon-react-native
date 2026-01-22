import { Platform, StyleSheet } from 'react-native';

import { Link } from 'expo-router';
import { View, Text } from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import {Card} from "@/components/Card";

export default function HomeScreen() {

    const colors = useThemeColors()

  return (
  <SafeAreaView style={[styles.container, {backgroundColor: colors.tint}]}>
      <Card>
         <ThemedText variant="headline"  >Pokédex</ThemedText>
      </Card>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
})
