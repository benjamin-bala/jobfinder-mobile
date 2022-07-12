import { StatusBar, View } from 'react-native';
import { useContext } from 'react';
import { Context } from '../../context';

export default function Skeleton() {
  const { colors, metrics } = useContext(Context);

  return (
    <View>
      <StatusBar barStyle={'dark-content'} />
      <View
        style={{
          paddingTop: '5%',
          backgroundColor: colors.gray4,
          justifyContent: 'center',
          alignItems: 'center',
          height: metrics.screenHeight / 3.5,
          paddingHorizontal: 22,
        }}
      >
        <View
          style={{
            width: '100%',
            height: '20%',
            backgroundColor: colors.gray5,
            borderRadius: 6,
          }}
        ></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginVertical: '5%',
        }}
      >
        <View
          style={{
            backgroundColor: colors.gray5,
            width: 70,
            height: 30,
            borderRadius: 6,
          }}
        ></View>
        <View
          style={{
            backgroundColor: colors.gray5,
            width: 70,
            height: 30,
            borderRadius: 6,
            marginHorizontal: '4%',
          }}
        ></View>
        <View
          style={{
            backgroundColor: colors.gray5,
            width: 70,
            height: 30,
            borderRadius: 6,
          }}
        ></View>
      </View>

      <View style={{ paddingHorizontal: 22 }}>
        <SkeletonCard colors={colors} />
        <SkeletonCard colors={colors} />
        <SkeletonCard colors={colors} />
        <SkeletonCard colors={colors} />
      </View>
    </View>
  );
}

function SkeletonCard({ colors }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 20,
      }}
    >
      <View
        style={{
          flex: 0.5,
          width: 100,
          height: 70,
          backgroundColor: colors.gray4,
          marginRight: 10,
        }}
      ></View>
      <View style={{ flex: 2 }}>
        <View
          style={{
            backgroundColor: colors.gray4,
            width: 100,
            height: 15,
            borderRadius: 6,
          }}
        ></View>
        <View
          style={{
            backgroundColor: colors.gray4,
            width: 200,
            height: 15,
            marginVertical: 10,
            borderRadius: 6,
          }}
        ></View>
        <View
          style={{
            backgroundColor: colors.gray4,
            width: 100,
            height: 15,
            borderRadius: 6,
          }}
        ></View>
      </View>
    </View>
  );
}
