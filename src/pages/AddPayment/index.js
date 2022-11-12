import { View, StyleSheet, TextInput } from 'react-native'
import React, {useContext } from 'react'
import Card from '../../components/Card'
import DefaultButton from '../../components/DefaultButton'
import { useNavigation } from '@react-navigation/core'
import axios from 'axios'

import { AuthContext } from '../../context/context'

const api = axios.create({
    baseURL: 'https://bus-app-challenge-default-rtdb.firebaseio.com'
})

export default function AddPayment() {

    const navigation = useNavigation();
    const {token, userId, userName, cardNumber, setCardNumber, cardName, setCardName, dueDate, setDueDate, cvv, setCvv, cardId} = useContext(AuthContext)

    function addCard() {
        if (cardNumber === '' || cardName === '' || dueDate === '' || cvv === '') {
            alert('Preencha todos os campos!')
        } else {
            if (cardId === null) {
                api.post(`/card.json?auth=${token}`, {	
                    idUser: userId,
                    nameUser: userName,
                    cardNumber: cardNumber,
                    cardName: cardName,
                    dueDate: dueDate,
                    cvv: cvv
                })
                .then(() => {
                    alert('Cartão adicionado com sucesso!')
                    navigation.push('Home')
                })
                .catch(() => {
                    alert('Erro ao adicionar cartão!')
                })
                .finally(() => {
                    setCardNumber('')
                    setCardName('')
                    setDueDate('')
                    setCvv('')
                })
            } else {
                api.put(`/card/${cardId}.json?auth=${token}`, {	
                    idUser: userId,
                    nameUser: userName,
                    cardNumber: cardNumber,
                    cardName: cardName,
                    dueDate: dueDate,
                    cvv: cvv
                })
                .then(() => {
                    alert('Cartão editado com sucesso!')
                    navigation.push('Home')
                })
                .catch(() => {
                    alert('Erro ao editar cartão!')
                })
                .finally(() => {
                    setCardNumber('')
                    setCardName('')
                    setDueDate('')
                    setCvv('')
                })
            }
        }
    }

    return (
    <View style={styles.container}>
        <View style={styles.creditCardContainer}>
            <Card number={cardNumber} name={cardName} dueDate={dueDate} cvv={cvv}/>   
        </View>
        <View style={styles.formContainer}>
            <View style={styles.form}>
                <TextInput placeholder='Nome no cartão' style={styles.input} value={cardName} onChangeText={setCardName}></TextInput>
                <TextInput placeholder='Numero de cartão' style={styles.input} value={cardNumber} onChangeText={setCardNumber}></TextInput>
                <TextInput placeholder='Validade' style={styles.input} value={dueDate} onChangeText={setDueDate}></TextInput>
                <TextInput placeholder='CVV' style={styles.input} value={cvv} onChangeText={setCvv}></TextInput>
                <DefaultButton name={cardId === null ? 'Adcionar Cartão' : 'Editar Cartão'} onPress={addCard}/>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'gray',
        backgroundColor: '#e63946',
    },

    creditCardContainer: {
        marginHorizontal: 10,
        backgroundColor: '#e63946',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    formContainer: {
        borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
        backgroundColor: '#fff',
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    form: {
        width: '90%',
        height: '100%',
        paddingTop: 20,
    },

    input: {
        paddingTop: 40,
        borderBottomWidth: 1,
        paddingLeft: 15,
    },
})