import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { Constants } from 'expo'

import contacts, {compareNames} from './MyReactApp/Contacts'

export default class ContactListScreen extends React.Component {
    state = {
        showContacts: true,
    }

    // addContact = newContact => {
    //     this.setState(prevState => ({showForm: false, contact: [...prevState.contact, newContact]}))
    // }
 
    toggleContacts = () => {
        this.setState(prevState => ({showContacts: !prevState.showContacts}))
    }

    showForm = () => {
        this.props.navigation.navigate('AddContact')
    }

    toggleForm = () => {
        this.setState(prevState => ({showForm: !prevState.showForm}))
    }

    render() {
        return (
            <View style={styles.container}>
            <Button title="toggle contacts" onPress={this.toggleContacts} />
            <Button title="Add Contact" onPress={this.toggleForm} />
            {this.state.showContacts && (
                <ContactsList contacts={this.props.screenProps.contacts.sort(compareNames)} />
            )} 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})