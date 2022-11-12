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
    const {token, userId, userName, setCardNumber, setCardName, setDueDate, setCvv, setCardId} = useContext(AuthContext)
    const [cardList, setCardList] = useState([])

    function navigateToAddPayment() {
        navigation.navigate('AddPayment')
        setCardNumber("")
        setCardName("")
        setDueDate("")
        setCvv("")
        setCardId(null)
    }

    async function getCardByUser() {
        const res = await api.get(`/card.json?auth=${token}`)
        const data = await res.data
        if (data !== null) {
            const cards = Object.keys(data)
            .filter((key) => data[key].idUser === userId)
            .map((key) => {
                return {
                    id: key,
                    ...data[key]
                }
            })
            setCardList(cards)
        } else {
            setCardList([])
        }
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

    function editCard(props) {
        navigateToAddPayment()
        setCardId(props.id)
        setCardNumber(props.cardNumber)
        setCardName(props.cardName)
        setDueDate(props.dueDate)
        setCvv(props.cvv)
    }   

    function Item(props) {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.containerInfo}>
                    <Text style={styles.cardText}>Numero: {props.item.cardNumber}</Text>
                    <Text style={styles.cardText}>Nome: {props.item.cardName}</Text>
                    <Text style={styles.cardText}>Expiração: {props.item.dueDate}</Text>
                    <Text style={styles.cardText}>CVV: {props.item.cvv}</Text>
                </View>
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.buttonDelete} onPress={
                        () => deleteCard(props.item.id)
                    }>
                        <Text style={styles.buttonTextDelete}>Excluir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonEdit} onPress={
                        () => editCard(props.item)
                    }>
                        <Text style={styles.buttonTextEdit}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        paddingTop: 60,
        paddingLeft: 30,
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
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        width: 350,
        height: 100,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderWidth: 1,
    },

    containerInfo: {
        flex: 4,
        justifyContent: 'center',
        marginLeft: 20,
    },

    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    containerButtons: {
        flex: 1,
        backgroundColor: 'white',
    },

    buttonDelete: {
        flex: 1,
        backgroundColor: '#e63946',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
    },

    buttonTextDelete: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    buttonEdit: {
        flex: 1,
        backgroundColor: '#2C363F',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
    },

    buttonTextEdit: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },



})