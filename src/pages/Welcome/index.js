import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

export default function Welcome() {

	const navigation = useNavigation();

	return (
	<View style={styles.container}>
		<View style={styles.containerLogo}>
			<Image 
				source={require('../../assets/BusLogo.png')} 
				style={{width: '60%', height: '50%', borderRadius: 10}}
			/>
		</View>
		<View style={styles.containerForm}>
			<Text style={styles.title}>Melhor controle da sua rota e créditos na palma da sua mão!</Text>
			<Text style={styles.text}>Faça Login ou cadastre-se</Text>
			<View style={styles.containerButtons}>
				<TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('SigIn')}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
					<Text style={styles.buttonText}>Cadastro</Text>
				</TouchableOpacity>
			</View>
		</View>
	</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e63946',
	},
	containerLogo: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerForm: {
		backgroundColor: '#fff',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		flex: 1,
		padding: '5%'
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 22
	},
	text: {
		fontSize: 16,
		textAlign: 'center',
	},
	containerButtons: {
		marginTop: '10%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: 40
	},
	buttonLogin: {
		backgroundColor: '#e63946',
		borderRadius: 50,
		width: '30%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonRegister: {
		backgroundColor: '#e63946',
		borderRadius: 50,
		width: '30%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: '#fff',
	}
})