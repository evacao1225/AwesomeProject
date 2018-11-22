import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class NoticeWithBubble extends PureComponent {

	render() {
		return (
			<TouchableOpacity style={styles.container} onPress={this.props.handleClick}>
				<View>
					<FontAwesome5 name={'envelope'} size={25} color="#fff" />
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
	msgBubble: {
		width: 16,
		height: 16,
		alignItems: 'center',
		backgroundColor: '#f00',
		borderRadius: 50,
		position: 'absolute',
		right: -8,
		top: -8
	},
	msgCount: {
		fontSize: 10,
		color: '#fff',
		fontWeight: 'bold',
		lineHeight: 16,
		backgroundColor: 'transparent'
	}
});
