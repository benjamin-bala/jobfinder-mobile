import { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Paragraph from '../Paragraph';
import { Context } from '../../Context';
import { Feather } from '@expo/vector-icons';

export default function Card() {
  const { colors, font } = useContext(Context);
  const cardStyle = StyleSheet.create({
    card: {
      flexDirection: 'row',
      marginVertical: '5%',
      width: '100%',
      backgroundColor: colors.white,
      padding: 10,
      shadowColor: colors.gray3,
      shadowOpacity: 0.12,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      borderRadius: 6,
    },
    thumbnail: {
      width: '18%',
      aspectRatio: '1/2',
      backgroundColor: colors.gray3,
      marginRight: '3%',
    },
  });

  return (
    <View style={cardStyle.card}>
      <View style={cardStyle.thumbnail}></View>

      <View style={{ flex: 1 }}>
        <Paragraph
          text='Fulltime'
          fontSize={font.fontsize.font12}
          color={colors.gray3}
        />
        <View style={{ marginVertical: 3 }}>
          <Paragraph
            text='Web Developer'
            fontSize={font.fontsize.font16}
            fontFamily={'bold'}
            color={colors.black1}
          />
        </View>
        <Paragraph
          text='Maker'
          fontSize={font.fontsize.font12}
          color={colors.gray3}
        />
        <View
          style={{
            marginVertical: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Paragraph
            text='Remote'
            fontSize={font.fontsize.font10}
            color={colors.primary}
            fontFamily={'bold'}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Paragraph
              text='Apply Now'
              fontSize={font.fontsize.font12}
              color={colors.primary}
              fontFamily={'bold'}
            />
            <Feather name='arrow-up-right' size={18} color={colors.primary} />
          </View>
        </View>
      </View>
    </View>
  );
}
