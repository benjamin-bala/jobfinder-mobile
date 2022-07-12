import { useContext } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Paragraph from '../Paragraph';
import { Context } from '../../context';
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export default function Card({ jobInfo }) {
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
      flex: 0.5,
      aspectRatio: 1 / 1,
      marginRight: '3%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });

  return (
    <View style={cardStyle.card}>
      <View style={cardStyle.thumbnail}>
        {jobInfo.image_url ? (
          <Image
            style={cardStyle.image}
            source={{
              uri: jobInfo.image_url,
            }}
          />
        ) : (
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Paragraph
              text={`${jobInfo.company[0]}${jobInfo.company[1]}`}
              fontSize={font.fontsize.font18}
              color={colors.white}
              fontFamily={'bold'}
              style={{ textTransform: 'uppercase' }}
            />
          </View>
        )}
      </View>

      <View style={{ flex: 2 }}>
        <Paragraph
          text={jobInfo.position}
          fontSize={font.fontsize.font12}
          color={colors.gray3}
          style={{ textTransform: 'capitalize' }}
        />
        <View style={{ marginVertical: 3 }}>
          <Paragraph
            text={jobInfo.title}
            fontSize={font.fontsize.font16}
            fontFamily={'bold'}
            color={colors.black1}
            style={{ textTransform: 'capitalize' }}
          />
        </View>
        <Paragraph
          text={jobInfo.company}
          fontSize={font.fontsize.font12}
          color={colors.gray3}
          style={{ textTransform: 'capitalize' }}
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
            text={jobInfo.location}
            fontSize={font.fontsize.font10}
            color={colors.primary}
            fontFamily={'bold'}
            style={{ textTransform: 'capitalize' }}
          />
          <TouchableWithoutFeedback
            onPress={() => Linking.openURL(jobInfo.url)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Paragraph
                text='Apply Now'
                fontSize={font.fontsize.font12}
                color={colors.primary}
                fontFamily={'bold'}
              />
              <Feather name='arrow-up-right' size={18} color={colors.primary} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
