import { View, Text, StyleSheet, TextInput, Image, SafeAreaView } from 'react-native'
import React, {useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/core'
import SocialButton from '../../components/SocialButton'
import DefaultButton from '../../components/DefaultButton'
import axios from 'axios'

import { AuthContext } from '../../context/context'

const autApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

export default function SigIn() {

    const navigation = useNavigation()
    const {setToken, API_KEY, setUserId, setUserName} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function logIn() {
        autApi.post(`/accounts:signInWithPassword?key=${API_KEY}`, {
            email,
            password,
            returnSecureToken: true
        })
        .then(res => {
            setToken(res.data.idToken)
            setUserId(res.data.localId)
            setUserName(res.data.displayName)
            navigation.navigate('Home')
        })
        .catch(err => {
            alert('Login inválido')
            setToken(null)
            setUserId(null)
            setUserName(null)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
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
                <DefaultButton name='Entrar' onPress={logIn}/>
                <Text style={styles.loginWithText}>Ou logue com...</Text>
                <View style={styles.containerSocial}>
                    <SocialButton name='logo-google'/>
                    <SocialButton name='logo-facebook'/>
                    <SocialButton name='logo-apple'/>
                </View>
            </View>
        </SafeAreaView>
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
        paddingTop: 40,
        paddingLeft: '5%',
        borderBottomWidth: 1,     
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