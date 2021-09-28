import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

import constants from './constants.json';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  getNoOfDaysInMonth,
  noOfDaysToBeLeftEmptyInTheBeginning,
  getMonthDatesArray,
} from './libs/dateOperations';
import { SpeedDial } from 'react-native-elements';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthDatesArray: getMonthDatesArray(new Date()),
      open: false,
    };
  }

  setOpen = (val) => {
    this.setState({
      open: val,
    })
  }

  getSpeedDial = () => {
    return (
      <SpeedDial
        isOpen={this.state.open}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => this.setOpen(!this.state.open)}
        onClose={() => this.setOpen(!this.state.open)}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Add Something')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>
    )
  }

  componentDidMount() {}

  render() {
    const { monthDatesArray } = this.state;

    return (
      <View style={styles.calendarComponent}>
        <SpeedDial
          isOpen={this.state.open}
          icon={{ name: 'edit', color: '#fff' }}
          openIcon={{ name: 'close', color: '#fff' }}
          onOpen={() => this.setOpen(!this.state.open)}
          onClose={() => this.setOpen(!this.state.open)}
        >
          <SpeedDial.Action
            icon={{ name: 'add', color: '#fff' }}
            title="Add"
            onPress={() => console.log('Add Something')}
          />
          <SpeedDial.Action
            icon={{ name: 'delete', color: '#fff' }}
            title="Delete"
            onPress={() => console.log('Delete Something')}
          />
        </SpeedDial>
        <View style={styles.header}>
          <Text style={styles.dateText}>Jul 2021</Text>
          <Pressable
            style={styles.calendarIconWrapper}
            android_ripple={{ color: 'white', borderless: true }}>
            <Icon name="calendar" size={45} color={'white'} />
          </Pressable>
        </View>

        <View style={styles.body}>
          <View style={styles.weekDaysContainer}>
            {constants.weekDays.map((day) => {
              return <Text style={styles.weekDay}>{day}</Text>;
            })}
          </View>
          <View style={styles.monthDatesContainer}>
            {monthDatesArray.map((date, index) => {
              return (
                <Text
                  style={{
                    ...styles.monthDate,
                    backgroundColor:
                      date.whichMonth === 'prev' || date.whichMonth === 'next'
                        ? 'lightgray'
                        : date.whichMonth === 'current' && date.monthDate === new Date().getDate() ?
                          'lightgreen' : 'white'
                  }}>
                  {date.monthDate}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

export default Calendar;

const styles = StyleSheet.create({
  calendarComponent: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  header: {
    // borderColor: 'red',
    // borderWidth: 1,
    flex: 1,
    backgroundColor: '#528593',
    flexDirection: 'row',
  },
  body: {
    // borderColor: 'red',
    // borderWidth: 1,
    flex: 9,
  },
  weekDaysContainer: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekDay: {
    borderWidth: 1,
    borderColor: 'white',
    width: '14.28%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#528593',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  monthDatesContainer: {
    flex: 9,
    // borderColor: 'red',
    // borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  monthDate: {
    //  borderColor: 'red',
    //   borderWidth: 1,
    width: '14.28%',
    height: '20%',
    fontSize: 24,
    textAlign: 'center',
  },
  dateText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    // borderColor: 'red',
    // borderWidth: 1,
    width: '50%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  calendarIconWrapper: {
    // borderColor: 'red',
    // borderWidth: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
