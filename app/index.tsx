import { StyleSheet } from 'react-native';

import { Card } from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {PokemonCard} from "@/components/pokemon/PokemonCard";

export default function HomeScreen() {

    const colors = useThemeColors();
    const pokemons = Array.from({length: 35}, (_, k) => ({
      name: 'pokemon name',
      id: k + 1
    }));

  return (
  <SafeAreaView style={[styles.container, {backgroundColor: colors.tint}]}>
      <View style= {styles.header}>
         <Image source={require("@/assets/images/pokeball.png")} width={24} height={24} />
         <ThemedText variant="headline" color="grayLight" >Pokédex</ThemedText>
      </View>
      <Card style={styles.body}>
        <FlatList
          data={pokemons}
          numColumns={3}
          contentContainerStyle={[styles.gridGap, styles.list]}
          renderItem={({item}) =>
            <PokemonCard id={item.id} name={item.name} style={{flex: 1/3,  height: 200}} />  }
            keyExtractor={(item) => item.id.toString()}
          />

      </Card>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 4
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 12
  },
  body: {
    flex: 1
  },
  gridGap: {
    gap: 8
  }, 
  list: {
    padding: 12
  }
})
