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
        if (this.props.params?.newContact !== prevProps.params?.newContact) {
            if (this.props.route.params?.newContact) { 
                this.addContact(this.props.route.params?.newContact)
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
            <ContactsList contacts={contacts.sort(compareNames)} />
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