import { useContext, useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Context } from '../../context';
import { uuid } from '../../utils/uuid';
import Paragraph from '../Paragraph';

export default function Filter() {
  const { colors, font, state, dispatch } = useContext(Context);
  const [value, setValue] = useState('');

  const setFilter = (searchValue) => {
    if (value === searchValue && value === state?.search) {
      setValue('');
      dispatch({ type: 'filter', payload: '' });
    } else {
      setValue(searchValue);
      dispatch({ type: 'filter', payload: searchValue });
    }
  };

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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {filterData.map((filterItem) => {
        return (
          <TouchableWithoutFeedback
            key={uuid()}
            onPress={() => setFilter(filterItem.name)}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: '1%',
                backgroundColor:
                  state.search === filterItem.name
                    ? colors.primary
                    : 'transparent',
                alignSelf: 'flex-start',
                paddingHorizontal: '3%',
                paddingVertical: '1%',
                borderRadius: 6,
              }}
            >
              <Paragraph text={filterItem.symbol} />
              <Paragraph
                text={filterItem.name}
                fontSize={font.fontsize.font14}
                color={
                  state.search === filterItem.name
                    ? colors.white
                    : colors.black1
                }
                style={{ textTransform: 'capitalize', marginLeft: '3%' }}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}
