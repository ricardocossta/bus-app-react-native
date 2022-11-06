import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SocialButton(props) {
  return (
    <TouchableOpacity style={styles.btnSocial}>
        <Ionicons name={props.name} size={30}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btnSocial: {
        backgroundColor: '#fff',
        width: 80,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 15,
    },
})