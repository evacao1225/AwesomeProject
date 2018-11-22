import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import FooterItem from './footerItem';

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.footerItems = [
				{
					title: 'Home',
					selected: true,
					color: '#009100',
					icon: 'home',
					size: 20
				},
				{
					title: 'Report',
					selected: false,
					color: 'black',
					icon: 'chart-bar',
					size: 20
				},
				{
					title: 'Message',
					selected: false,
					color: 'black',
					icon: 'envelope',
					size: 20
				},
				{
					title: 'User',
					selected: false,
					color: 'black',
					icon: 'user',
					size: 20
				}
		];
		this.state = {
			selected: 'Home',
			selectedColor: '#009100',
			defaultColor: 'black'
		}
	}

	// display message list
	handleClick() {
		this.setState({
			showMessage: true
		});
	}

	showFooterItem() {
		let footerItems = [];
		if(this.footerItems.length > 0) {
			this.footerItems.forEach(function(item) {
				footerItems.push(
					<FooterItem key={item.title}>
						<FontAwesome5 name={item.icon} size={item.size} color={item.color}/>
						<Text style={{color: item.color}}>{item.title}</Text>
					</FooterItem>
				);
			});
		}
		return footerItems;
	}

	render() {
		return (
			<View style={styles.footer}>
				{this.showFooterItem()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	footer: {
		height: 50,
		backgroundColor: '#F5FCFF',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		borderStyle: 'solid',
		borderTopWidth: 0.5,
		borderTopColor: '#BBB'
	}
})
