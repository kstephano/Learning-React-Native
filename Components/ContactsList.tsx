import React from 'react'
import { SectionList, Text, StyleSheet, SectionListRenderItemInfo } from 'react-native'

import Row from './Row'
import { ArraysByLetter, ContactsListProps, ContactWithKey, IHeader, Section } from '../types'
import { SectionListRenderItem } from 'react-native'

const renderSectionHeader = (obj: IHeader) => <Text style={styles.sectionHeader}>{obj.section.title}</Text>

// create contacts list sorted by letter, whereby each object is a letter
// e.g. 'A' paired with the array of contacts belonging to that letter.
const ContactsList = (props: ContactsListProps) => {

    const renderItem: SectionListRenderItem<ContactWithKey, Section> = (obj: SectionListRenderItemInfo<ContactWithKey>) => <Row 
        {...obj.item} 
        onSelectContact={(contact: ContactWithKey) => {
            props.onSelectContact(contact)
        }}
    />

    const contactsByLetter: ArraysByLetter = props.contacts.reduce((obj: ArraysByLetter, contact: ContactWithKey) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {})

    
    // split the contactsByLetter array into objects containing a title
    // (letter) and data (contacts for that letter). 
    const sections: Section[] = Object.keys(contactsByLetter).sort().map(letter => ({
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