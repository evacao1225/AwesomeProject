import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class FooterItem extends Component {
	render() {
		return (
		<TouchableOpacity style={styles.container} onPress={this.props.handleClick}>
			<View style={{alignItems: 'center'}}>
				{this.props.children}
			</View>
			{this.props.showBubble &&
				<View style={styles.msgBubble}>
					<Text style={styles.msgCount}>{this.props.msgCount}</Text>
				</View>
			}
		</TouchableOpacity>
	);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		alignItems: 'center'
	},
	msgBubble: {
		width: 16,
		height: 16,
		alignItems: 'center',
		backgroundColor: '#f00',
		borderRadius: 50,
		position: 'absolute',
		right: 10,
		top: -5
	},
	msgCount: {
		fontSize: 10,
		color: '#fff',
		fontWeight: 'bold',
		lineHeight: 16,
		backgroundColor: 'transparent'
	}
});
