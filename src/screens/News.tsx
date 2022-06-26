import {View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import {Block, Image, Text} from '../components';
import {useTheme} from '../hooks';

const News = () => {
  const {sizes, colors} = useTheme();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    const {data} = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false',
    );

    setNews(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: sizes.sm,
        }}>
        {news.map((row) => {
          return (
            <Block
              card
              width={'90%'}
              marginBottom={sizes.sm}
              marginHorizontal={sizes.sm}
              key={row.id}>
              <View>
                <Image
                  resizeMode="center"
                  source={{
                    uri: row.image,
                  }}
                  width={'100%'}
                  height={100}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <Text h5 color={row.price_change_24h > 0 ? 'green' : 'red'}>
                  ${row.current_price}
                </Text>
                <Text h5>{row.name}</Text>
                <Text h5>{row.volume}</Text>
              </View>
            </Block>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default News;
