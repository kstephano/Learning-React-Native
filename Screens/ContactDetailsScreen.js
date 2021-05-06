import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default class ContactDetailsScreen extends React.Component {

    goToRandom = () => {
        const contacts = this.props.route.params.contacts
        const phone = this.props.route.params.phone
        let randomContact
        
        while (!randomContact) {
            const randomIndex = Math.floor(Math.random() * contacts.length)
            if (contacts[randomIndex].phone !== phone) {
                randomContact = contacts[randomIndex]
            }
        }

        this.props.navigation.push('ContactDetails', {
            contacts: this.props.route.params.contacts,
            name: randomContact.name,
            phone: randomContact.phone
        })
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title: this.props.route.params.name})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.route.params.phone}</Text>
                <View style={styles.button}>
                    <Button 
                    title="Go to Random Contact" 
                    onPress={() => this.goToRandom()} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    button: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
    }
})