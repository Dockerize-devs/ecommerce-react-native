import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import * as Contacts from 'expo-contacts';
export default () => {

    const [contacts, setContacts] = useState([]);


    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 3) {
                    setContacts(data.slice(0, 100))
                }
            }
        })();
    }, []);

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                marginVertical: 40
            }}
            >
                <Text style={{fontWeight: 'bold', marginVertical: 20, fontSize:20}}>List of 100 Contacts</Text>
                {contacts.map((contact, index) => {
                    if (contact.phoneNumbers) {
                        return <View key={index}><Text>{`${contact.firstName} → ${contact.phoneNumbers[0].digits} (${contact.phoneNumbers[0].countryCode.toUpperCase()})`}</Text></View>
                    }

                })}
            </View>
        </ScrollView>

    );
}