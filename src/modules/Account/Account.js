import React from 'react';
import { View } from 'react-native';
import { GluestackUIProvider, Text, Button, Input, InputField, ButtonText } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';


const dummyUser = {
    username: 'dummyUser',
    email: 'dummy@example.com',
    password: 'Wachtwoord'
};

export default function Account() {
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
                    >
                    <ButtonText>Edit</ButtonText>
                    </Button>

                    <Button
                        size='md'
                        variant='solid'
                        action='primary'
                        isDisabled={false}
                        isFocusVisible={false}
                        onPress={() => console.log('Logout')}
                    >
                        <ButtonText>Logout</ButtonText>
                    </Button>

                    <Button
                        size="md"
                        variant="solid"
                        action="negative"
                        isDisabled={false}
                        isFocusVisible={false}
                    >
                    <ButtonText>Delete Account</ButtonText>
                    </Button>
                </View>
            </View>
        </GluestackUIProvider>
    );
}