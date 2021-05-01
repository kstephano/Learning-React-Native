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
import ContactDetailsScreen from './Screens/ContactDetailsScreen'

const Stack = createStackNavigator()
 
export default class App extends React.Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ContactList">
                    <Stack.Screen 
                        name="ContactList" 
                        component={ContactListScreen} 
                        options={{
                            headerTitle: 'Contacts',
                            headerTitleAlign: 'center',
                        }} 
                    />
                    <Stack.Screen 
                        name="AddContact" 
                        component={AddContactScreen} 
                        options={{
                            title: 'Add Contact',
                            headerTitleAlign: 'center',
                        }} 
                    />
                    <Stack.Screen
                        name="ContactDetails"
                        component={ContactDetailsScreen}
                        options={({ route }) => ({ 
                            title: route.params.name,
                            headerTitleAlign: 'center'
                        })}
                    />
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