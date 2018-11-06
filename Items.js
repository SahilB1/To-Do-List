import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class itemsToDo extends Component {
  render() {
    return (

      //key & keyval are key words in React Native
      <View key={this.props.keyval} style={styles.items}>

        <Text style={styles.itemText}>{this.props.val.date}</Text>
        <Text style={styles.itemText}>{this.props.val.item}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.itemDelete}>
          <Text style={styles.itemDeleteText}>Cut</Text>
        </TouchableOpacity>

      </View>
  );
}
}

const styles = {
  item: {
    postion: 'relative',
    padding: 20,
    paddingRight: 50,
    borderBottomWidth: 4,
    borderBottomColor: '#20b2aa'
  },
  itemText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#20b2aa'
  },
  itemDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  itemDeleteText: {
    color: 'white'
  }
};

export default itemsToDo;
