import { useContext } from 'react';
import { View } from 'react-native';
import Paragraph from '../Paragraph';
import { Context } from '../../context';
import Card from '../Card';
import { uuid } from '../../utils/uuid';

export default function Category(props) {
  const { colors, font } = useContext(Context);
  const groups = props.data.reduce((groups, data) => {
    const date = data.date_added.split(' ')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(data);
    return groups;
  }, {});

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      data: groups[date],
    };
  });

  return groupArrays.map((jobData) => {
    return (
      <View key={uuid()}>
        <View style={{ paddingVertical: 10 }}>
          <Paragraph
            text={jobData.date}
            fontSize={font.fontsize.font16}
            fontFamily={'bold'}
            color={colors.black1}
          />
        </View>
        <View>
          {jobData.data.map((jobInfo) => {
            return <Card key={uuid()} jobInfo={jobInfo} />;
          })}
        </View>
      </View>
    );
  });
}
