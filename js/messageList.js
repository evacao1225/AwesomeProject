import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MessageList extends Component {
	 showMessageItem() {
		let messageItems = [];
		if(props.messages.length > 0) {
			props.messages.map(function(item) {
				messageItems.push(
					<View>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.content}>{item.content}</Text>
						<hr />
					</View>
				)
			});
		}
		return messageItems;
	}

	render() {
		return (
			<View>
				{this.showMessageItem()}
			</View>
		);
	}
}
