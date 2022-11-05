import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SigIn() {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                    source={require('../../assets/bus-stop.png')}
                    style={{width: '90%', height: '100%', borderRadius: 10}}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.containerLogin}>
                <Text style={styles.loginText}>Login</Text>
                <TextInput placeholder='Email ID' style={styles.input}></TextInput>
                <TextInput placeholder='Senha' style={styles.input}></TextInput>

                <TouchableOpacity style={styles.btnLoggin}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.loginWithText}>Ou logue com...</Text>
                <View style={styles.containerSocial}>
                    <TouchableOpacity style={styles.btnSocial}>
                        <Ionicons name='logo-google' size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSocial}>
                        <Ionicons name='logo-facebook' size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSocial}>
                        <Ionicons name='logo-apple' size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },

    containerImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerLogin: {
        justifyContent: 'flex-start',
        padding: '5%',
        flex: 2,
    },

    loginText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 22
    },

    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: '5%',
        borderBottomWidth: 1.5,   
    },

    btnLoggin: {
        backgroundColor: '#e63946',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
    },

    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    loginWithText: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: '5%',
    },

    containerSocial: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '10%',
    },

    btnSocial: {
        backgroundColor: '#fff',
        width: 80,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 15,
    }
})