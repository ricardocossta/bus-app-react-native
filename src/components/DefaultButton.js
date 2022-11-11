import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function DefaultButton(props) {
  return (
    <TouchableOpacity style={styles.btnRegister} onPress={props.onPress}>
        <Text style={styles.btnText}>{props.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    btnRegister: {
        backgroundColor: '#e63946',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
    },

    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})