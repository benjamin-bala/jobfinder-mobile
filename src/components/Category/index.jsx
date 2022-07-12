import { useContext } from 'react';
import { View } from 'react-native';
import Paragraph from '../Paragraph';
import { Context } from '../../Context';
import Card from '../Card';

export default function Category() {
  const { colors, font } = useContext(Context);
  return (
    <View>
      <View style={{ paddingVertical: 10 }}>
        <Paragraph
          text='22-06-22'
          fontSize={font.fontsize.font16}
          fontFamily={'bold'}
          color={colors.black1}
        />
      </View>
      <View>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
}
