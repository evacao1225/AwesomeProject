import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import NoticeWithBubble from './noticeWithBubble';
import StatusBar from './statusBar';

export default Header = function(props) {
	let styles = StyleSheet.create({
		header: {
			//flex: 1,
			backgroundColor: props.backgroundColor,
			//justifyContent: 'flex-end',
			//width: 50,
			height: 60
		}
	});

	return (
		/*<View style={styles.header} >
			<StatusBar backgroundColor={styles.header.backgroundColor} />
			<NoticeWithBubble msgCount={props.msgCount} />
		</View>*/
		<View style={styles.header}>
			{props.children}
		</View>
	);
}
