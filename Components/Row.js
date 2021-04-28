import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Row = props => (
    <View style={styles.row}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View> 
 )

const styles = StyleSheet.create({
    row: {
        padding: 10,
    },
})

export default Row