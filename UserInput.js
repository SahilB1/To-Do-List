import React from 'react';
import { TextInput, View, Text } from 'react-native';

const UserInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,

  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    fontWeight: 'bold',
    color: '#20b2aa'
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export default UserInput;
