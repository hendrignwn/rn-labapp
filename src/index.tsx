import { StyleSheet, View } from 'react-native';
import Routes from '@src/routes';

function Index(props: any) {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Index;
