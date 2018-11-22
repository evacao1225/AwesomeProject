import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyButton from './js/button';
import Header from './js/header';
import StatusBar from './js/statusBar';
import NoticeWithBubble from './js/noticeWithBubble';
import MessageList from './js/messageList';

export default class AwesomeProject extends Component {
	constructor(props) {
		super(props);
		this.headerBackgroundColor = 'gray';
		this.showMessage = this.showMessage.bind(this);
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

	// display message list
	showMessage() {
		this.setState({
			showMessage: true
		});
	}

  render() {
    return (
      <View style={styles.container}>
				<Header backgroundColor={this.headerBackgroundColor} key={'header'}>
					<StatusBar backgroundColor={this.headerBackgroundColor} />
					<NoticeWithBubble msgCount={4} handleClick={this.showMessage}/>
				</Header>
				{this.state.showMessage &&
					<MessageList messages={this.state.messages} />
				}
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
    backgroundColor: '#F5FCFF',
  }
});
