import { metrics } from './metrics';

export const fontsize = {
  font8: metrics.screenWidth * (8 / 365),
  font10: metrics.screenWidth * (10 / 365),
  font12: metrics.screenWidth * (12 / 365),
  font14: metrics.screenWidth * (14 / 365),
  font16: metrics.screenWidth * (16 / 365),
  font18: metrics.screenWidth * (18 / 365),
  font20: metrics.screenWidth * (20 / 365),
  font24: metrics.screenWidth * (24 / 365),
  font32: metrics.screenWidth * (32 / 365),
  font40: metrics.screenWidth * (40 / 365),
  font48: metrics.screenWidth * (48 / 365),
  font56: metrics.screenWidth * (56 / 365),
};

export const fontweight = {
  bold: '600',
  semibold: '400',
  light: '300',
};

export const fonttype = {
  regular: 'montserrat-regular',
  bold: 'montserrat-bold',
  semibold: 'montserrat-semibold',
};
