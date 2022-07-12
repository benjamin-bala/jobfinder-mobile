import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import React from 'react';
import SearchBox from '../../components/Searchbox';
import Card from '../../components/Card';
import Category from '../../components/Category';
import Filter from '../../components/Filter';

export default function Home() {
  return (
    <ScrollView>
      <KeyboardAvoidingView keyboardVerticalOffset={100} behavior={'position'}>
        <View style={{ backgroundColor: '#fafafa' }}>
          <SearchBox />
          <View style={{ paddingHorizontal: 22 }}>
            <Filter />
            <Category />
            <Category />
            <Category />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
