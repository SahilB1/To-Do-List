import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ItemsToDo extends Component {
  render() {
    return (

      //key & keyval are key words in React Native
      <View key={this.props.key} style={styles.items}>

        <Text style={styles.itemText}>{this.props.val.date}</Text>
        <Text style={styles.itemText}>{this.props.val.item}</Text>


        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.itemDelete}>
          <Text style={styles.itemDeleteText}>Delete</Text>
        </TouchableOpacity>

      </View>
  );
}
}

const styles = {
  items: {
    //postion: 'relative',
    padding: 20,
    paddingRight: 100,
    borderLeftWidth: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    borderLeftColor: '#1e90ff',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 }
  },
  itemText: {
    paddingLeft: 20,
    color: 'white',
    borderLeftWidth: 10,
    paddingTop: 10,
    width: 250,
    borderLeftColor: '#00bfff',
    fontSize: 17.5
  },
  itemDelete: {
    position: 'absolute',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6347',
    padding: 10,
    top: 20,
    bottom: 20,
    right: 10
  },
  itemDeleteText: {
    color: 'white',
  }
};

export default ItemsToDo;
