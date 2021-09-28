import * as React from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView 
} from 'react-native';
import Constants from 'expo-constants';
import Note from './components/Note';
import db from './config';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      noteArr: [{ note: 'NIHARIKA', date: '13 Jul 2021' }],
      noteText: '',
    };
  }
  markDone = (item) => {
    const node = db.ref('tasks').child(this.state.noteArr[item].id)
    node.remove();
    this.state.noteArr.splice(item, 1);
  };

  componentDidMount() {
    const tasks = db.ref('tasks');
    tasks.on('value', (data) => {
      const todos = data.val();
      const taskList = [];

      for (var id in todos) {
        taskList.push({ id, ...todos[id] });
        
      }
      // console.log(taskList);
        this.setState({noteArr:taskList})
        console.log(taskList)
    });

  
  }

  addTask = () => {
    var d = new Date();
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const tasks = db.ref('tasks');
    if (this.state.noteText) {
      const newtask = {
        note: this.state.noteText,
        date:
          d.getFullYear() + ' ' + monthNames[d.getMonth()] + ' ' + d.getDate(),
      };

      tasks.push(newtask);
      this.setState({ noteText: '' });
    }


  };

  render() {
    var notes = this.state.noteArr.map((index, item) => {
      return (
        <Note
          task={index}
          markDone={() => {
            this.markDone(item);
          }}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20 }}>Keep It</Text>
        </View>
        <ScrollView style={styles.scroll}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Task"
            onChangeText={(text) => {
              this.setState({ noteText: text });
            }}
            value={this.state.noteText}
          />
          <TouchableOpacity style={styles.textButton} onPress={this.addTask}>
            <Text style={{ fontSize: 20 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     paddingTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor: 'gold',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderTopColor: 'gold',
    borderTopWidth: 2,
  },
  textInput: {
    padding: 20,
    fontSize: 18,
    outline: 'none',
  },
  textButton: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    height: 40,
    width: 40,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },scroll:{flex:1, marginBottom:100}
});
