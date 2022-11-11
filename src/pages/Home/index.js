import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import FunctionButton from '../../components/FunctionButton'
import { useNavigation } from '@react-navigation/core'

import { AuthContext } from '../../context/context'

export default function Home() {

    const navigation = useNavigation();
    const {user} = useContext(AuthContext)

    function navigateToAddPayment() {
        navigation.navigate('AddPayment')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerWelcome}>
                <Text style={styles.welcomeText}>Olá,</Text>
                <Text style={styles.welcomeName}>{user.name}</Text>
            </View>
            <View style={styles.containerFunctions}>
                <View style={styles.containerButtons}>
                    <FunctionButton name="card-outline" text="Meus cartões"/>
                    <FunctionButton name="add-circle-outline" text="Adicionar cartões" onPress={navigateToAddPayment}/>
                    <FunctionButton name="bus-outline" text="Favoritos"/>
                </View>
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