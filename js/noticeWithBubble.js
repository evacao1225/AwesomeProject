import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
//import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class NoticeWithBubble extends PureComponent {
	//<FontAwesome>{Icons.envelope}</FontAwesome>

	render() {
		return (
			<TouchableOpacity style={styles.container} onPress={this.props.handleClick}>
				<View style={styles.msgIcon}>

				</View>
				<View style={styles.msgBubble}>
					<Text style={styles.msgCount}>{this.props.msgCount}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		alignSelf: 'flex-end',
		marginRight: 15,
		marginTop: 10
	},
	msgIcon: {
		width: 30,
		height: 30,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#000'
	},
	msgBubble: {
		width: 20,
		height: 20,
		alignItems: 'center',
		backgroundColor: '#f00',
		borderRadius: 50,
		position: 'absolute',
		right: -10,
		top: -10
	},
	msgCount: {
		fontSize: 10,
		color: '#fff',
		fontWeight: 'bold',
		lineHeight: 20,
		backgroundColor: 'transparent'
	}
});
