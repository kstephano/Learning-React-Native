import React from 'react'
import { Button, Text, View } from 'react-native'

export default class ContactDetailsScreen extends React.Component {

    goToRandom = () => {
        // todo
    }
    
    render() {
        return (
            <View>
                <Text>phone # coming soon</Text>
                <Button title="go to random contact" onPress={() => this.goToRandom} />
            </View>
        )
    }
}