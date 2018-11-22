import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class MessageList extends Component {
	constructor(props) {
		super(props);
		this.handlePress = this.handlePress.bind(this);
	}

	handlePress(e) {
		console.log('hello');
		console.log(e.target.name);
	}

	 showMessageItem() {
		let messageItems = [];
		if(this.props.messages.length > 0) {
			this.props.messages.forEach(function(item) {
				messageItems.push(
					<TouchableOpacity key={item.title} style={styles.msgItem} onPress={this.handlePress}>
						<View style={styles.itemLeft}>
							<FontAwesome5 name={'envelope'} size={25} color="gray" />
						</View>
						<View style={styles.itemRight}>
							<Text style={styles.title}>{item.title}</Text>
							<Text style={styles.content}>{item.content}</Text>
						</View>
					</TouchableOpacity>
				)
			});
		}
		return messageItems;
	}

	render() {
		return (
			<View style={styles.container}>
				{this.showMessageItem()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'flex-start',
	//	alignItems: 'stretch'
	},
	msgItem: {
		//flex: 1,
		height: 60,
		marginLeft: 10,
		marginRight: 10,
		flexDirection: 'row',
		borderStyle: 'solid',
		borderBottomColor: '#ddd',
		borderBottomWidth: 1,
		//backgroundColor: 'skyblue',
		alignItems: 'center'
	},
	itemLeft: {
		//borderStyle: 'solid',
		//borderColor: 'black',
		//borderWidth: 1,
		width: 25,
		height: 25,
		marginLeft: 10,
		marginRight: 10
	},
	itemRight: {
		alignSelf: 'flex-start',
		//height: 20,
		marginTop: 10,
		//marginBottom: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingLeft: 10,
	},
	content: {
		fontSize: 15,
		paddingLeft: 10,
		fontWeight: 'normal'
	}
})
