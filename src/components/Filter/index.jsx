import { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context } from '../../Context';
import Paragraph from '../Paragraph';

export default function Filter() {
  const { colors, font } = useContext(Context);

  const filterData = [
    {
      name: 'tech',
      symbol: '💻',
    },
    {
      name: 'design',
      symbol: '🎨',
    },
    {
      name: 'marketing',
      symbol: '💼',
    },
    {
      name: 'content',
      symbol: '📋',
    },
  ];

  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderColor: colors.gray5,
        borderWidth: 1,
        marginVertical: '8%',
        paddingHorizontal: '5%',
        paddingVertical: '3%',
        borderRadius: 6,
      }}
    >
      {filterData.map((filterItem) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: '1%',
            }}
          >
            <Paragraph
              text={filterItem.symbol}
              fontSize={font.fontsize.font16}
              color={colors.black1}
            />
            <Paragraph
              text={filterItem.name}
              fontSize={font.fontsize.font14}
              fontFamily={'semibold'}
              color={colors.black1}
              style={{ textTransform: 'capitalize', marginLeft: '3%' }}
            />
          </View>
        );
      })}
    </View>
  );
}
