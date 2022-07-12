import { View, KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { useEffect, useContext } from 'react';
import SearchBox from '../../components/Searchbox';
import Category from '../../components/Category';
import Filter from '../../components/Filter';
import { JobsApi } from '../../api';
import { Context } from '../../Context';
import Skeleton from '../Skeleton';

export default function Home() {
  const { loading, error, data } = JobsApi();
  const { dispatch, state } = useContext(Context);

  useEffect(() => {
    if (!loading && data) {
      dispatch({ type: 'store_data', payload: { jobs: data?.jobs } });
    }
  }, [loading, data, dispatch]);

  if (loading) return <Skeleton />;

  if (error) return <Text>Error</Text>;

  const filteredData =
    state?.jobs &&
    state?.jobs.filter((jobs) => {
      return (
        jobs.title.toLowerCase().includes(state?.search.toLowerCase()) ||
        jobs.position.toLowerCase().includes(state?.search.toLowerCase()) ||
        jobs.category.toLowerCase().includes(state?.search.toLowerCase())
      );
    });

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <View style={{ backgroundColor: '#fafafa' }}>
          <SearchBox />
          <View style={{ paddingHorizontal: 22 }}>
            <Filter />
            {filteredData && <Category data={filteredData} />}
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
