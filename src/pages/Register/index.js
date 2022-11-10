import { View, Text, StyleSheet, TextInput, Image, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import DefaultButton from '../../components/DefaultButton'
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://bus-app-challenge-default-rtdb.firebaseio.com/'
})

export default function Register() {

    function save() {
        if (name === '' || email === '' || password === '' || age === '' || cpf === '') {
            alert('Preencha todos os campos!')
        } else {
            api.post('/user.json', {
                name: name,
                email: email,
                password: password,
                age: age,
                cpf: cpf,
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setAge('')
                setCpf('')
                setEmail('')
                setName('')
                setPassword('')
                alert('Cadastro realizado com sucesso!')
            })
        }
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [age, setAge] = useState("")

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
                <TextInput placeholder='Nome' style={styles.input} value={name} onChangeText={setName}></TextInput>
                <TextInput placeholder='Idade' style={styles.input} value={age} onChangeText={setAge}></TextInput>
                <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={setEmail}></TextInput>
                <TextInput placeholder='CPF' style={styles.input} value={cpf} onChangeText={setCpf}></TextInput>
                <TextInput secureTextEntry={true} placeholder='Senha' style={styles.input} value={password} onChangeText={setPassword}></TextInput>
                
                <DefaultButton name='Cadastrar' onPress={save}/>
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