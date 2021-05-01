import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { Constants } from 'expo'

import contacts, {compareNames} from '../Contacts'
import ContactsList from '../Components/ContactsList'
import { TabRouter } from 'react-navigation'

export default class ContactListScreen extends React.Component {
    state = {
        contacts: contacts,
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                //<View >
                    <TouchableOpacity  
                        style={styles.addContactButton}
                        onPress={() => {this.props.navigation.navigate('AddContact')}} 
                    >
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                //</View>
            )
        })
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

    render() {
        return (
            <View style={styles.container}>
            <ContactsList 
                contacts={this.state.contacts.sort(compareNames)}
                onSelectContact={contact => {
                    this.props.navigation.navigate('ContactDetails', {
                        contacts: this.state.contacts,
                        name: contact.name,
                        phone: contact.phone,
                    })
                }} 
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    addContactButton: {
        paddingRight: 15,
    },
    buttonText: {
        fontSize: 20,
        color: '#30a5ff',
    }
})