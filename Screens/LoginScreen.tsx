import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'

export default class LoginScreen extends React.Component<{}, {}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You are currently logged out</Text>
                <Button title="Press to Log In" onPress={this.login} />
            </View>
        )
    }

    login = () => {
        // todo
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        textAlign: 'center',
    },
})