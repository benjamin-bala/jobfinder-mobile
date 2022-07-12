import { View, KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { useEffect, useContext } from 'react';
import SearchBox from '../../components/Searchbox';
import Category from '../../components/Category';
import Filter from '../../components/Filter';
import { JobsApi } from '../../api';
import { Context } from '../../context';
import Skeleton from '../Skeleton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Paragraph from '../../components/Paragraph';
import ErrorScreen from '../Error';

export default function Home() {
  const { loading, error, data, refetch } = JobsApi();
  const { dispatch, state } = useContext(Context);

  useEffect(() => {
    if (!loading && data) {
      dispatch({ type: 'store_data', payload: { jobs: data?.jobs } });
    }
  }, [loading, data, dispatch]);

  if (loading) return <Skeleton />;

  if (error) return <ErrorScreen event={refetch} />;

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
    <ScrollView style={{ backgroundColor: '#fafafa' }}>
      <KeyboardAvoidingView>
        <View>
          <SearchBox />
          <View style={{ paddingHorizontal: 22 }}>
            <Filter />
            {filteredData && <Category data={filteredData} />}
            {filteredData && filteredData.length <= 0 ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MaterialCommunityIcons
                  name='message-text-outline'
                  size={30}
                  color='black'
                />
                <Paragraph
                  style={{ marginVertical: 15 }}
                  text={'Sorry, we could not find your dream job.'}
                />
              </View>
            ) : null}
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
