import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, onPressLearnMore } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ЛЕВ ЛЕНИВЫЙ УЧЕНИК</Text>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
