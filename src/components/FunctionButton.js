import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function FunctionButton(props) {
  return (
    <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonIcon} onPress={props.onPress}>
            <Ionicons name={props.name} size={32} color='white'></Ionicons>
        </TouchableOpacity>
        <Text style={styles.buttonText}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containerButton: {
        width: 100,
        flexDirection: 'column',
        alignItems: 'center',
    },

    buttonIcon: {
        backgroundColor: '#2C363F',
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },

    buttonText: {
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        color: 'gray',
    },
})