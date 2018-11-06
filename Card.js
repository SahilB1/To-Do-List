import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};


const styles = {
  containerStyle: {
    backgroundColor: '#f5f5f5',
    borderWidth: 0,
    borderRadius: 1,
    borderColor: '#20b2aa',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
  }
};
export { Card };
