import { StatusBar, View, TouchableHighlight } from 'react-native';
import { useContext } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Paragraph from '../../components/Paragraph';
import { Context } from '../../context';

export default function ErrorScreen(props) {
  const { colors, font } = useContext(Context);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StatusBar barStyle={'dark-content'} />
      <FontAwesome5 name='exclamation-triangle' size={54} color='#f83231' />
      <View>
        <Paragraph
          text={'Opps! You ran into an error...'}
          fontSize={font.fontsize.font16}
          color={colors.black1}
          style={{ marginVertical: 15 }}
        />
        <TouchableHighlight onPress={() => props.event()}>
          <View
            style={{
              backgroundColor: colors.gray3,
              paddingVertical: 10,
              borderRadius: 6,
            }}
          >
            <Paragraph
              text={'Try again'}
              fontSize={font.fontsize.font16}
              color={colors.white}
              fontFamily={'semibold'}
              style={{ textAlign: 'center' }}
            />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
