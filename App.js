import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyButton from './js/button';
import Header from './js/header';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
				<Header msgCount={20}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  }
});
