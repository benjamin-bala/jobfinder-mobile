import { useContext } from 'react';
import { Context } from '../../Context';
import { StyleSheet, Text } from 'react-native';

export default function Paragraph({ fontSize, fontFamily, color, text }) {
  const { font, colors } = useContext(Context);

  // console.log(themeProperties);

  const textStyle = StyleSheet.create({
    fontSize: fontSize ? fontSize : font.fontsize.font16,
    fontFamily:
      fontFamily === 'bold'
        ? font.fonttype.bold
        : fontFamily === 'semibold'
        ? font.fonttype.semibold
        : font.fonttype.regular || null,
    color: color ? color : colors.black1,
  });

  return <Text style={textStyle}>{text}</Text>;
}
