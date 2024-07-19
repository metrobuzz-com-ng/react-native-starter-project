import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ReduxProvider} from '@redux';
import {getters} from '@config';

export default () => {
  return (
    <ReduxProvider>
      <View style={styles.center}>
        <Text>{getters.getBaseUrl()}</Text>
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
