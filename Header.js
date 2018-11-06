//Import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';


//Make component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#20b2aa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    fontSize: 30,
    fontFamily: 'Avenir',
    color: 'black'
  }
};
//Make component available to other parts of app
export { Header };
