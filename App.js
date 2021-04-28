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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import AddContactScreen from './Screens/AddContactScreen'
import ContactListScreen from './Screens/ContactListScreen'

const Stack = createStackNavigator()
 
export default class App extends React.Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ContactList">
                    <Stack.Screen 
                        name="ContactList" 
                        component={ContactListScreen} 
                        options={ {title: 'Contacts'} } />
                    <Stack.Screen 
                        name="AddContact" 
                        component={AddContactScreen} 
                        options={ {title: 'Add Contact'} } />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})