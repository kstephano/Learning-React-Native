import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Row = props => (
    <View style={styles.row}>
        <Text style={styles.name}>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View> 
 )

const styles = StyleSheet.create({
    row: {
        padding: 10,
    },
    name: {
        textTransform: 'capitalize',
    }
})

export default Row