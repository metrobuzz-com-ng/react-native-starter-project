import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WELCOME_TEXT} from '@env';

export default () => {
  return (
    <View style={styles.center}>
      <Text>{WELCOME_TEXT}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
