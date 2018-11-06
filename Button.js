import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyles}>
      <Text style={styles.textStyle}>{children}</Text>
  </TouchableOpacity>
  );
};

const styles = {
  buttonStyles: {
    borderColor: '#20b2aa',
    borderRadius: 30,
    borderWidth: 5,
    flex: 1,
    paddingTop: 18,
    paddingBottom: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 22,
    color: '#20b2aa',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  }

};

export { Button };
