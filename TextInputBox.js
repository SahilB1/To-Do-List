import React, { Component } from 'react';
import { View,
         Text,
         TouchableOpacity,
         ScrollView,
         TextInput,
         Alert, AsyncStorage, StatusBar } from 'react-native';
//import { connect } from 'react-redux';
//import store from 'react-native-simple-store';
import ItemsToDo from './ItemsToDo';
//import { itemUpdate } from '../actions';

//const myKey = '@MyApp:key';

class inputBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemArray: [],
      itemText: '',
    };
  }

componentDidMount() {
  AsyncStorage.getItem('myKey').then((itemArray) => {
    this.setState({ items: JSON.parse(itemArray) });
  });
}

saveData() {
  const dataArray = [];
  const data = {
    itemArray: this.state.itemArray
  };
  dataArray.push(data);
}

/*displayData = async () => {
  try {
      await AsyncStorage.getItem('myKey').then((itemArray) => {
      const parsed = JSON.parse(itemArray);
      return (parsed);
    });
  } catch (error) {
    Alert.alert('Error', "Couldn't show data");
  }
}*/
/*async onLoad() {
  try {
    await AsyncStorage.getItem(myKey);
    this.setState({ itemArray: 'test !' });
    //Alert.alert('Saved', 'Loading done');
  } catch (error) {
    Alert.alert('Error', 'Problem loading data');
  }
}*/

/*async onSave() {
  const { itemText } = this.state;

  try {
    await AsyncStorage.setItem(myKey, itemText);
    Alert.alert('Saved', 'Items saved on device');
  } catch (error) {
    Alert.alert('Error', 'Problem saving data');
  }
}*/

deleteAlertFunction(key) {
  Alert.alert(
    'Alert',
    'Are you sure you want to delete this item?',
    [
      { text: 'Yes', onPress: () => this.deleteItem(key) },
      { text: 'Cancel', onPress: () => this.state.itemArray }
    ]
  );
}

deleteAll() {
  Alert.alert(
    'Alert',
    'Are you sure you want to delete all items?',
    [
      { text: 'Yes', onPress: () => this.clearArray() },
      { text: 'Cancel', onPress: () => this.state.itemArray }
    ]
  );
}

clearArray() {
  this.setState({
    itemArray: []
  });
}

  addItem() {
    if (this.state.itemText) {
      const date = new Date();
      this.state.itemArray.push({
      date: (date.getMonth() + 1) +
         '/' + date.getDate() +
         '/' + date.getFullYear(),
         item: this.state.itemText
      });
      this.setState({ itemArray: this.state.itemArray });
      this.setState({ itemText: '' });
    }
  }

    deleteItem(key) {
      this.state.itemArray.splice(key, 1);
      this.setState({ items: this.state.itemArray });
    }

  render() {
    const items = this.state.itemArray.map((val, key) => {
      return (
        <ItemsToDo
                  key={key}
                  keyval={key}
                  val={val}
                  deleteMethod={() => this.deleteAlertFunction(key)}
        />
      );
    });
    return (
    <View style={styles.container}>
      <View>
        <StatusBar
        backgroundColor='#1e90ff'
        barStyle="light-content"
        />
      </View>
      <View style={styles.headerViewStyle}>
        <Text style={styles.headerTextStyle}>- Notes -</Text>
      </View>

      <View style={styles.darkMode}>
        <ScrollView style={styles.ScrollViewStyle}>
          {items}
        </ScrollView>
      </View>

        <View style={styles.footer}>

          <TextInput
            style={styles.textInput}
            onChangeText={(itemText) => this.setState({ itemText })}
            value={this.state.itemText}
            placeholder="Enter items here..."
            placeholderTextColor='#d3d3d3'
            underlineColorAndroid='transparent'
          />

        </View>

        <TouchableOpacity onPress={this.deleteAll.bind(this)} style={styles.deleteAllButton}>
          <Text style={styles.deleteAllButtonText}>{' Delete \n   All'}</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={this.addItem.bind(this)}
          //onPress={this.saveData.bind(this)}
          //onPress={this.showData.bind(this)}
          style={styles.addButton}
        >
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

    </View>
  );
}
}


const styles = {
  container: {
    flex: 1
  },
  save: {
    position: 'absolute',
    left: 140,
    bottom: 85,
    backgroundColor: '#708090',
    width: 150,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10
  },
  saveStyle: {
    fontSize: 13,
    color: '#ffffff'
  },
  displayData: {
    position: 'absolute',
    right: 85,
    bottom: 75,
    backgroundColor: '#ffffff',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    elevation: 10
  },
  displayDataText: {
    fontSize: 13,
    color: '#ffffff'
  },
  deleteAllButton: {
    position: 'absolute',
    right: 5,
    bottom: 75,
    backgroundColor: '#00bfff',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10
  },
  darkMode: {
    backgroundColor: '#708090',
    flex: 1,
  },
  deleteAllButtonText: {
    color: '#ffffff',
    fontSize: 14,
    justifyContent: 'center',
    fontFamily: 'Roboto',
    alignItems: 'center'
  },
  addButton: {
    position: 'absolute',
    //index: 11,
    left: 5,
    bottom: 75,
    backgroundColor: '#00bfff',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 33,
    justifyContent: 'center'
  },
  headerViewStyle: {
    backgroundColor: '#00bfff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
  headerTextStyle: {
    fontSize: 35,
    fontFamily: 'notoserif',
    color: '#ffffff'
  },
  ScrollViewStyle: {
    flex: 1,
    marginBottom: 150,
    backgroundColor: '#708090'
    //paddingTop: 15
  },
  textInput: {
    fontSize: 15,
    color: 'white',
    padding: 20,
    backgroundColor: '#708090',
    borderTopWidth: 3,
    borderTopColor: 'white'
  },
  footer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    //zindex: 10
  },
};

export default inputBox;
