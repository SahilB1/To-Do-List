import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    padding: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#20b2aa',
    position: 'relative'
  }
};

export { CardSection };
