import { View, Text } from 'react-native';
import ModerationPopUp from './Components/ModerationPopUp';

export default function Home() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ModerationPopUp />
            {/* <Text>Home Screen</Text> */}
        </View>
    );
}
