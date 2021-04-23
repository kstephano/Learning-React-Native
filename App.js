/**
 * Contact list app
 *
 * @format
 * @flow strict-local
 */

 import React from 'react'
 import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
 import { Constants } from 'expo'
 
 import contacts from './contacts'
 
 export default class App extends React.Component {
     state = {
         showContacts: false,
     }
 
     toggleContacts = () => {
         this.setStates(prevState => ({showContacts: !prevState.showContacts}))
     }
     
     render() {
         return (
             <View style={this.styles.container}>
                 <Button title="toggle contacts" onPress={this.toggleContacts} />
                 <ScrollView>
                     {contacts.map(contact => (
                         <View key={contact.key}>
                             <Text>{contact.name}</Text>
                             <Text>{contact.phone}</Text>
                         </View>
                     ))}
                 </ScrollView>
             </View>
         ) 
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    })
 }