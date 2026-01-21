import {Text, View} from "react-native";
import {useLocaleSearchParams} from "expo-router";

export default function Pokemon(){
  const params = useLocaleSearchParams();
  return (<View>
      <Text> Pokemon  {params.id} </Text>
  </View>)
}
