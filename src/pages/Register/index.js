import { View, Text, StyleSheet, TextInput, Image, SafeAreaView } from 'react-native'
import React, {useState, useContext} from 'react'
import DefaultButton from '../../components/DefaultButton'
import axios from 'axios'

import { AuthContext } from '../../context/context'

const autApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

export default function Register() {

    const {API_KEY} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    
    function newUser() {
        if (email === '' || password === '' ) {
            alert('Preencha todos os campos!')
        } else {
            autApi.post(`/accounts:signUp?key=${API_KEY}`, {
                email: email,
                password: password,
                displayName: name,
                returnSecureToken: true
            })
            .then(res => {
                console.warn(res.data)
                alert('Usuário cadastrado com sucesso!')
            })
            .catch(err => {
                console.warn(err)
                alert('Erro ao cadastrar usuário!')
                
            })
            .finally(() => {
                setEmail('')
                setPassword('')
            })
        }
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                    source={require('../../assets/bus-station.png')}
                    style={{width: '90%', height: '80%', borderRadius: 10}}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.containerRegister}>
                <Text style={styles.registerText}>Cadastro</Text>
                <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={setEmail}></TextInput>
                <TextInput placeholder='Nome completo' style={styles.input} value={name} onChangeText={setName}></TextInput>
                <TextInput secureTextEntry={true} placeholder='Senha' style={styles.input} value={password} onChangeText={setPassword}></TextInput>
                
                <DefaultButton name='Cadastrar' onPress={newUser}/>
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
        paddingTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerRegister: {
        justifyContent: 'flex-start',
        padding: '5%',
        flex: 3,
    },

    registerText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 22
    },

    input: {
        paddingTop: 40,
        paddingLeft: '5%',
        borderBottomWidth: 1,   
    },
})