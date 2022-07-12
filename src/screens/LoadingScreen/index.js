import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Skeleton from '../Skeleton';

const fetchFont = () => {
  return Font.loadAsync({
    'montserrat-regular': require('../../../assets/fonts/montserrat-regular.ttf'),
    'montserrat-semibold': require('../../../assets/fonts/montserrat-semibold.ttf'),
    'montserrat-bold': require('../../../assets/fonts/montserrat-Bold.ttf'),
  });
};

export default function LoadingScreen({ children }) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await fetchFont();

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <Skeleton />;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}
