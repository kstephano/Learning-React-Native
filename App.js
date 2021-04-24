/**
 * Contact list app
 *
 * @format
 * @flow strict local
 */

import React from 'react'
import { Button, SectionList, StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'
 
import contacts, {compareNames} from './Contacts'
import ContactsList from './Components/ContactsList'
import AddContactForm from './Components/AddContactForm'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
 
export default class App extends React.Component {
    state = {
        showContacts: false,
        showForm: false,
        contacts: contacts,
    }

    addContact = newContact => {
        this.setState(prevState => ({showForm: false, contact: [...prevState.contact, newContact]}))
    }
 
    toggleContacts = () => {
        this.setState(prevState => ({showContacts: !prevState.showContacts}))
    }

    toggleForm = () => {
        this.setState(prevState => ({showForm: !prevState.showForm}))
    }

    render() {
        if (this.state.showForm) return <AddContactForm onSubmit={this.addContact}/>

        return (
            <View style={styles.container}>
            <Button title="toggle contacts" onPress={this.toggleContacts} />
            <Button title="Add Contact" onPress={this.toggleForm} />
            {this.state.showContacts && <ContactsList contacts={this.state.contacts.sort(compareNames)} />}
            </View>
        )
    }
}