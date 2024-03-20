import React from 'react';
import { View, Alert } from 'react-native';
import { GluestackUIProvider, Text, Button, Input, InputField, ButtonText } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

// Dummy data tot we een database hebben
const dummyUser = {
    username: 'dummyUser',
    email: 'dummy@example.com',
    password: 'Wachtwoord'
};

export default function Account() {

    const handleEdit = () => {
        // Functie om de Edit uit te voeren
        // Logica hieronder
        console.log('Edit');
    }

    const handleLogout = () => {
        // Functie om de user uit te loggen
        // Logica hieronder
        console.log('Logout');
    }

    const handleDeleteAccount = () => {
        // Code voor het verwijderen van het account
        Alert.alert(
            'Delete Account',
            'Are you sure you want to delete your account?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        // Logica toe om het account te verwijderen
                        console.log('Delete Account');
                    },
                    style: 'destructive'
                }
            ]
        );
    }

    return (
        <GluestackUIProvider config={config}>
            <View style={{ padding: 20 }}>
                <Text variant="heading" style={{ marginBottom: 20, textAlign: 'center' }}>Welcome {dummyUser.username}</Text>
                <View style={{ marginBottom: 10 }}>
                    <Text variant="label">Username:</Text>
                    <Input
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                    <InputField placeholder={dummyUser.username} />
                    </Input>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text variant="label">Password:</Text>
                    <Input
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                    <InputField placeholder={dummyUser.password} />
                    </Input>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text variant="label">E-mail:</Text>
                    <Input
                        variant="outline"
                        size="md"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                    <InputField placeholder={dummyUser.email} />
                    </Input>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Button
                        size="md"
                        variant="solid"
                        action="positive"
                        isDisabled={false}
                        isFocusVisible={false}
                        onPress={handleEdit}
                    >
                    <ButtonText>Edit</ButtonText>
                    </Button>

                    <Button
                        size='md'
                        variant='solid'
                        action='primary'
                        isDisabled={false}
                        isFocusVisible={false}
                        onPress={handleLogout}
                    >
                        <ButtonText>Logout</ButtonText>
                    </Button>

                    <Button
                        size="md"
                        variant="solid"
                        action="negative"
                        isDisabled={false}
                        isFocusVisible={false}
                        onPress={handleDeleteAccount}
                    >
                    <ButtonText>Delete Account</ButtonText>
                    </Button>
                </View>
            </View>
        </GluestackUIProvider>
    );
}