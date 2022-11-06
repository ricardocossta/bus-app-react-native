import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import DefaultButton from '../../components/DefaultButton'

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [age, setAge] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                    source={require('../../assets/bus-station.png')}
                    style={{width: '90%', height: '80%', borderRadius: 10}}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.containerRegister}>
                <Text style={styles.registerText}>Cadastro</Text>
                <TextInput placeholder='Nome' style={styles.input} value={name} onChangeText={setName}></TextInput>
                <TextInput placeholder='Idade' style={styles.input} value={age} onChangeText={setAge}></TextInput>
                <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={setEmail}></TextInput>
                <TextInput placeholder='CPF' style={styles.input} value={cpf} onChangeText={setCpf}></TextInput>
                <TextInput secureTextEntry={true} placeholder='Senha' style={styles.input} value={password} onChangeText={setPassword}></TextInput>
                
                <DefaultButton name='Cadastrar'/>
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
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: '5%',
        borderBottomWidth: 1,   
    },
})