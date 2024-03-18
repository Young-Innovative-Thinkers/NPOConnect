import { config } from '@gluestack-ui/config';
import { Button, ButtonText, GluestackUIProvider, HStack, Modal, ModalBody, ModalContent, Text, VStack } from '@gluestack-ui/themed';
import ModerationInput from './ModerationInput';

export default function ModerationPopUp() {
    return (
        <GluestackUIProvider config={config}>
            <Modal isOpen={true}>
                <ModalContent sx={{ bgColor: '$white'}}>
                    <ModalBody my={15}>
                        <VStack gap={20}>
                            <Text sx={{ fontSize: 16, color: '$black'}}>
                                Waarom wil u het nieuwsbericht: &quot;Politie wordt aangevallen door protesteerders&quot; van ConnectExplorer verwijderen?
                            </Text>

                            <ModerationInput />
                        
                            <Text sx={{ fontSize: 16, color: '$black' }}>
                                Wilt u het account van ConnectExplorer markeren?
                            </Text>
                        
                            <Button sx={{ bgColor: '#FFD233', borderRadius: '50%', width: 150 }}>
                                <ButtonText color='#111'>Flagged</ButtonText>
                            </Button>

                            <HStack gap={10} justifyContent='center'>
                                <Button bgColor='#E4E4E4'>
                                    <ButtonText color='#111'>Annuleren</ButtonText>
                                </Button>

                                <Button>
                                    <ButtonText>Indienen</ButtonText>
                                </Button>
                            </HStack>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </GluestackUIProvider>
    );
}