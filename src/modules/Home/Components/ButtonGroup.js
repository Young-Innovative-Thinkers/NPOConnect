import { Button, ButtonText, HStack } from '@gluestack-ui/themed';

export default function ButtonGroup() {
    return (
        <HStack gap={10} mt='$2' justifyContent='center'>
            <Button bgColor='#E4E4E4'>
                <ButtonText color='#111'>Annuleren</ButtonText>
            </Button>

            <Button>
                <ButtonText>Indienen</ButtonText>
            </Button>
        </HStack>
    );
}