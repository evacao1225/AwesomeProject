import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import NoticeWithBubble from './noticeWithBubble';
import StatusBar from './statusBar';

export default Header = function(props) {
	return (
		<View style={styles.header} >
			<StatusBar backgroundColor={styles.header.backgroundColor} />
			<NoticeWithBubble msgCount={props.msgCount} />
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flex: 1,
		backgroundColor: 'gray',
		justifyContent: 'flex-end',
		width: 100
	}
});
