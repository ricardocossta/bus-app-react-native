import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function FunctionButton(props) {
  return (
    <TouchableOpacity style={styles.containerButton} onPress={props.onPress}>
        <Ionicons name={props.name} size={35} color='white'></Ionicons>
        <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    containerButton: {
        position: 'absolute',
        bottom: 20,
        right: 10,
        width: '40%',
        height: '10%',
        backgroundColor: '#2C363F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 15,
    },

    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
})