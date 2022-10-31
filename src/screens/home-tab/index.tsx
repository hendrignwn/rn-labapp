import { WHTIE_COLOR } from '@src/constants/colors';
import { getBrowseCategories } from '@src/reduxs/home/action';
import { BrowseCatgoryParams } from '@src/reduxs/home/types';
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { useDispatch } from 'react-redux';

function HomeTabScreen(props: any) {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const loadList = async (params: BrowseCatgoryParams = {}) => {
    const resp = await dispatch(getBrowseCategories(params) as any);
    setItems(resp?.categories?.items);
    setRefreshing(false);
  };
  useEffect(() => {
    loadList();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadList();
  }, []);

  const renderItem = ({ item, index }) => (
    <Card
      key={index}
      style={styles.card}
      onPress={() => navigation.navigate('DetailScreen', item)}>
      <Card.Title title={item.name} />
      <Card.Cover source={{ uri: item.icons[0]?.url }} resizeMode={'contain'} />
    </Card>
  );
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={styles.root}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onEndReachedThreshold={0.4}
      // onEndReached={onLoadMore}
    />
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: WHTIE_COLOR },
  card: { marginVertical: 8 },
});

export default HomeTabScreen;
