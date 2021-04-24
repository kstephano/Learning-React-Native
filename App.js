/**
 * Contact list app
 *
 * @format
 * @flow strict local
 */

import React from 'react'
import { Button, SectionList, StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'
 
import contacts, {compareNames} from './Contacts'
import ContactsList from './Components/ContactsList'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
 
export default class App extends React.Component {
    state = {
        showContacts: false,
        contacts: contacts,
    }

    sort = () => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts].sort(compareNames),
        }))
    }
 
    toggleContacts = () => {
        this.setState(prevState => ({showContacts: !prevState.showContacts}))
    }

    render() {
        return (
            <View style={styles.container}>
            <Button title="toggle contacts" onPress={this.toggleContacts} />
            <Button title="sort contacts" onPress={this.sort} />
            {this.state.showContacts && <ContactsList contacts={this.state.contacts} />}
            </View>
        )
    }
}