import { StyleSheet, Text } from 'react-native';
import React from 'react';

export default function Paragraph() {
  const textStyle = StyleSheet.create({
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
    color: props.color,
  });

  return <Text style={textStyle}>{props.text}</Text>;
}
