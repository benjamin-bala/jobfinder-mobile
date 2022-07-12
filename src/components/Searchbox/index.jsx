import { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../../Context';
import Paragraph from '../Paragraph';

export default function SearchBox() {
  const [text, onChangeText] = useState('');

  const { colors, font, metrics } = useContext(Context);

  const searchBoxStyle = StyleSheet.create({
    header: {
      paddingTop: '5%',
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      height: metrics.screenHeight / 3.5,
      paddingHorizontal: 22,
    },
    searchBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      paddingVertical: '3%',
      paddingHorizontal: '2%',
      borderRadius: 6,
    },
    paragraph: {
      marginVertical: '5%',
    },
    input: {
      color: colors.black2,
      width: '100%',
      paddingHorizontal: '2%',
    },
  });

  return (
    <View style={searchBoxStyle.header}>
      <StatusBar barStyle={'light-content'} />
      <View style={searchBoxStyle.paragraph}>
        <Paragraph
          text='Search Your Dream Job Here'
          fontSize={font.fontsize.font20}
          fontFamily={'bold'}
          color={colors.white}
        />
      </View>
      <View style={searchBoxStyle.searchBox}>
        <Feather name='search' size={18} color='black' />
        <TextInput
          style={searchBoxStyle.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Search for jobs, position(eg. fulltime), stack'
        />
      </View>
    </View>
  );
}
