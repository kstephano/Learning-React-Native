import React from 'react'
import { SectionList, Text, StyleSheet, } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers'

// ContactsList.propTypes = {
//     contacts: PropTypes.array,
// }

const renderSectionHeader = obj => <Text style={styles.sectionHeader}>{obj.section.title}</Text>

// create contacts list sorted by letter, whereby each object is a letter
// e.g. 'A' paired with the array of contacts belonging to that letter.
const ContactsList = props => {

    const renderItem = obj => <Row 
        {...obj.item} 
        onSelectContact={contact => {
            props.onSelectContact(contact)
        }}
    />

    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {})

    
    // split the contactsByLetter array into objects containing a title
    // (letter) and data (contacts for that letter). 
    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))

    return (
        <SectionList
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        />
    )
}

const styles = StyleSheet.create({
    sectionHeader : {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        backgroundColor: '#c9c9c9',
        fontWeight:'bold' ,
        fontStyle: 'italic',
        textAlign: 'left',
    },
})

export default ContactsList