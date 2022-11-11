import { View, Text, StyleSheet, TextInput, Image, SafeAreaView } from 'react-native'
import React, {useState, useContext} from 'react'
import DefaultButton from '../../components/DefaultButton'
import axios from 'axios'

import { AuthContext } from '../../context/context'

const api = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

export default function Register() {

    function newUser() {
        if (name === '' || email === '' || password === '' || age === '' || cpf === '') {
            alert('Preencha todos os campos!')
        } else {
            api.post(`/accounts:signUp?key=${API_KEY}`, {
                name: name,
                email: email,
                password: password,
                age: age,
                cpf: cpf,
                returnSecureToken: true
            })
            .then(res => {
                console.log(res)
                setToken(res.data.idToken)
                alert('Cadastro realizado com sucesso!') 
            })
            .catch(err => {
                console.log(err)
                setToken(null)
                alert('Ocorreu um erro no cadastro!')
            })
            .finally(() => {
                setAge('')
                setCpf('')
                setEmail('')
                setName('')
                setPassword('')
            })
        }
    }

    const {API_KEY} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [age, setAge] = useState("")
    const [token, setToken] = useState(null)

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
                <TextInput placeholder='Nome completo' style={styles.input} value={name} onChangeText={setName}></TextInput>
                <TextInput placeholder='Idade' style={styles.input} value={age} onChangeText={setAge}></TextInput>
                <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={setEmail}></TextInput>
                <TextInput placeholder='CPF' style={styles.input} value={cpf} onChangeText={setCpf}></TextInput>
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