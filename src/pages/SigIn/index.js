import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import SocialButton from '../../components/SocialButton'
import DefaultButton from '../../components/DefaultButton'

export default function SigIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                <TextInput placeholder='Email ID' style={styles.input} value={email} onChangeText={setEmail}></TextInput>
                <TextInput secureTextEntry={true} placeholder='Senha' style={styles.input} value={password} onChangeText={setPassword}></TextInput>
                <DefaultButton name='Entrar'/>
                <Text style={styles.loginWithText}>Ou logue com...</Text>
                <View style={styles.containerSocial}>
                    <SocialButton name='logo-google'/>
                    <SocialButton name='logo-facebook'/>
                    <SocialButton name='logo-apple'/>
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
        marginBottom: 22,
    },

    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: '5%',
        borderBottomWidth: 1.5,   
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
})