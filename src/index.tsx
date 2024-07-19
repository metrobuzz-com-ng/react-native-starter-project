import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WELCOME_TEXT} from '@env';
import {ReduxProvider} from '@redux';

export default () => {
  return (
    <ReduxProvider>
      <View style={styles.center}>
        <Text>{WELCOME_TEXT}</Text>
      </View>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
