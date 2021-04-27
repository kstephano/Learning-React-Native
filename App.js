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
import { createSwitchNavigator } from 'react-navigation'
 
import contacts, {compareNames} from './Contacts'
import AddContactScreen from './Screens/AddContactScreen'
import ContactListScreen from './Screens/ContactListScreen'

const AppNavigator = createSwitchNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
}, {
    initialRouteName: 'ContactList' 
})
 
export default class App extends React.Component {
    state = {
        showContacts: false,
        contacts: contacts,
    }

    addContact = newContact => {
        this.setState(prevState => ({
            showForm: false,
             contact: [...prevState.contact, newContact],
        }))
    }

    toggleForm = () => {
        this.setState(prevState => ({showForm: !prevState.showForm}))
    }

    render() {
        <AppNavigator screenProps={contacts} />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})