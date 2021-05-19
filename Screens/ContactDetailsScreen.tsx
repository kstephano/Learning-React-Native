import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { ContactDetailsScreenProps, ContactsArray, ContactWithKey } from '../types'

export default class ContactDetailsScreen extends React.Component<ContactDetailsScreenProps> {

    goToRandom = () => {
        const contacts: ContactsArray = this.props.route.params.contacts
        const phone: string = this.props.route.params.phone
        let randomContact: ContactWithKey | undefined

        while (!randomContact) {
            const randomIndex: number = Math.floor(Math.random() * contacts.length)
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
                <Text style={styles.phone}>{this.props.route.params.phone}</Text>
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
    },
    phone: {
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
    },
})