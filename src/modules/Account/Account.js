import React from 'react';
import { View } from 'react-native';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, Text } from '@gluestack-ui/themed';

const dummyUser = {
    username: 'dummyUser',
    email: 'dummy@example.com',
    password: 'Wachtwoord'
  };

  export default function Account() {
    return (
        <GluestackUIProvider config={config}>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Account Screen</Text>
                <Text style={{ marginBottom: 5 }}>Gebruikersnaam: {dummyUser.username}</Text>
                <Text style={{ marginBottom: 5 }}>Wachtwoord: {dummyUser.password}</Text>
                <Text>E-mail: {dummyUser.email}</Text>
            </View>
        </GluestackUIProvider>
    );
}