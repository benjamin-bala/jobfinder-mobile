import { useWindowDimensions } from 'react-native';

const { width, height } = useWindowDimensions();

interface metricsInterface {
  readonly screenWidth: number;
  readonly screenHeight: number;
}

export const metrics: metricsInterface = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
