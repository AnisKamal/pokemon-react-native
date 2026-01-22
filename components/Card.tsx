import {View, ViewProps, ViewStyle} from "react-native";
import {shadows} from "@/constants/Shadows";
import {inspect} from "node:util";
import {useThemeColors} from "@/hooks/useThemeColors";


type Props = ViewProps

export function Card({style, ...rest}: Props){
    const colors = useThemeColors()
    return <View style={[style, styles, {backgroundColor: colors.grayWhite}]} {...rest}  />
}

const styles = {
    borderRadius: 8,
    ...shadows.dp2
} satisfies ViewStyle