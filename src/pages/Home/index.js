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

    function deleteCard(id) {
        api.delete(`/card/${id}.json?auth=${token}`)
        .then(() => {
            alert('Cartão deletado com sucesso!')
            getCardByUser()
        })
        .catch(() => {
            alert('Erro ao deletar cartão!')
        })
    }

    function Item(props) {
        return (
            <TouchableOpacity style={styles.cardContainer} >
                <Text style={styles.cardText}>{props.item.cardNumber}</Text>
                <Text style={styles.cardText}>{props.item.nameUser}</Text>
                <Text style={styles.cardText}>{props.item.dueDate}</Text>
                <Text style={styles.cardText}>{props.item.cvv}</Text>
                <TouchableOpacity style={styles.button} onPress={
                    () => deleteCard(props.item.id)
                }>
                    <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
            </TouchableOpacity>
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
            <View style={styles.containerCards}>
                <FlatList
                    data={cardList} renderItem={(params)=> {
                        return (
                            <Item {...params}/>
                        )
                    }} 
                />
                <FunctionButton name="add-circle-outline" text="Adicionar cartão" onPress={navigateToAddPayment}/>
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

    containerCards: {
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardContainer: {
        marginTop: 30,
        width: 350,
        height: 100,
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
    },
})