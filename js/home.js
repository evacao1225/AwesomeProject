import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Header from './header';
import StatusBar from './statusBar';
import Footer from './footer';
import MessageList from './messageList';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.headerBackgroundColor = '#272727';
		//this.showMessage = this.showMessage.bind(this);
		this.state = {
			showMessage: false,
			messages: [
				{
					title: 'message 1',
					content: 'this is message 1.',
					read: false
				},
				{
					title: 'message 2',
					content: 'this is message 2.',
					read: false
				},
				{
					title: 'message 3',
					content: 'this is message 3.',
					read: false
				},
				{
					title: 'message 4',
					content: 'this is message 4.',
					read: false
				}
			]
		};
	}


	render() {
	return (
		<View style={{flex: 1}}>
			<ScrollView>
			<View style={styles.container}>
				<Header backgroundColor={this.headerBackgroundColor} key={'header'}>
					<StatusBar backgroundColor={this.headerBackgroundColor} barStyle={'light-content'}/>
				</Header>
				{this.state.showMessage &&
					<MessageList messages={this.state.messages} />
				}
			</View>
			</ScrollView>
			<Footer />
		</View>
	);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FCFCFC',
  }
});
