import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import FunctionButton from '../../components/FunctionButton'
import { useNavigation } from '@react-navigation/core'
import axios from 'axios'

import { AuthContext } from '../../context/context'

const api = axios.create({
    baseURL: 'https://bus-app-challenge-default-rtdb.firebaseio.com'
})

export default function Home() {

    const navigation = useNavigation();
    const {token, userId, userName} = useContext(AuthContext)
    const [cardList, setCardList] = useState([])

    function navigateToAddPayment() {
        navigation.navigate('AddPayment')
    }

    async function getCardByUser() {

        const res = await api.get(`/card.json?auth=${token}`)
        const data = await res.data
        const cards = Object.keys(data)
        .filter((key) => data[key].idUser === userId)
        .map((key) => {
            return {
                id: key,
                ...data[key]
            }
        })
        setCardList(cards)
    }

    function showCards() {
        return (
            <FlatList
                data={cardList}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={styles.cardContainer}>
                        <Text style={styles.cardText}>Cartão: {item.id}</Text>
                        <Text style={styles.cardText}>Cartão: {item.cardNumber}</Text>
                        <Text style={styles.cardText}>Nome: {item.name}</Text>
                        <Text style={styles.cardText}>Validade: {item.dueDate}</Text>
                        <Text style={styles.cardText}>CVV: {item.cvv}</Text>
                    </View>
                )}
            />
        )
    }

    useEffect(() => {
        getCardByUser()
    }, [])
    
    return (
        <View style={styles.container}>
            <View style={styles.containerWelcome}>
                <Text style={styles.welcomeText}>Olá,</Text>
                <Text style={styles.welcomeName}>{userName}</Text>
            </View>
            <View style={styles.containerFunctions}>
                <View style={styles.containerButtons}>
                    <FunctionButton name="card-outline" text="Meus cartões"/>
                    <FunctionButton name="add-circle-outline" text="Adicionar cartões" onPress={navigateToAddPayment}/>
                </View>
            </View>
            <View style={{flex: 1}}>
                {showCards()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e63946',
    },

    containerWelcome: {
        flex: 1,
        width: '100%',
        paddingTop: 40,
        paddingLeft: 40,
    },

    welcomeText: {
        fontSize: 22,
        fontWeight: '300',
    },

    welcomeName: {
        fontSize: 30,
        fontWeight: '500',
    },

    containerFunctions: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex: 3,
        backgroundColor: 'white',
        width: '100%',
    },

    containerButtons: {
        paddingTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },  
})