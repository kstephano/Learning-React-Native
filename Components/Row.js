import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Row = props => (
    <TouchableOpacity 
        style={styles.row} 
        onPress={() => props.onSelectContact(props)}
    >
        <Text style={styles.name}>{props.name}</Text>
        <Text>{props.phone}</Text>
    </TouchableOpacity> 
 )

const styles = StyleSheet.create({
    row: {
        padding: 10,
        borderRadius: 5,
        borderColor: '#000000',
    },
    name: {
        textTransform: 'capitalize',
    },
})

export default Row