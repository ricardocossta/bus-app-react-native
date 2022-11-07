import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Card(props) {
  return (
    <View style={styles.content}>
        <View style={styles.containerCardNumber}>
            <Text style={styles.cardNumber}>{props.number}</Text>
        </View>
        <View style={styles.containerCardInfos}>
            <View style={styles.cardName}>
                <Text style={styles.titlename}>{props.name ? 'Nome' : ''}</Text>
                <Text style={styles.textName}>{props.name}</Text>
            </View>
            <View style={styles.cardDueDate}>
                <Text style={styles.titleDueDate}>{props.validity ? 'Vencimento' : ''}</Text>
                <Text style={styles.textDueDate}>{props.validity}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: 230,
        backgroundColor: '#2C363F',
        borderRadius: 35,
    },

    containerCardNumber: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    cardNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
        color: 'white',
    },

    containerCardInfos: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },

    cardName: {
        flex: 1,
        marginLeft: 20,
    },

    titlename: {
        color: 'white',
        fontSize: 13,
    },

    textName: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    
    cardDueDate: {
        flex: 1,
        marginLeft: 70,
    },

    titleDueDate: {
        color: 'white',
        fontSize: 13,
    },

    textDueDate: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
})