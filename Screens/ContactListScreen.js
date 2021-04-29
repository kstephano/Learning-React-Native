import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { Constants } from 'expo'

import contacts, {compareNames} from '../Contacts'
import ContactsList from '../Components/ContactsList'
import { TabRouter } from 'react-navigation'

export default class ContactListScreen extends React.Component {
    state = {
        contacts: contacts,
    }

    static navigationOptions = {
        headerTitle: 'Contacts',
    }
 
    componentDidUpdate(prevProps) {
        if (this.props.route.params?.newContact !== prevProps.route.params?.newContact) {
            if (this.props.route.params?.newContact) { 
                this.addContact( {
                    key: this.state.contacts.length,
                    name: this.props.route.params.newContact.name.toLowerCase(),
                    phone: this.props.route.params.newContact.phone,
                })
            }
        }
    }

    addContact = newContact => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
        }))
    }

    showForm = () => {
        this.props.navigation.navigate('AddContact')
    }

    render() {
        return (
            <View style={styles.container}>
            <Button title="Add Contact" onPress={this.showForm} />
            <ContactsList contacts={this.state.contacts.sort(compareNames)} />
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