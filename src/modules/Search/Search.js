import { Avatar, PaperProvider, Searchbar, SegmentedButtons, Text  } from 'react-native-paper';
import { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import Avatar2Image from '../Home/stories/avatar2.webp';
import AvatarImage from '../Home/stories/avatar.jpg';

export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [value, setValue] = useState('top');

    return (
        <View style={styles.container}>
            <Searchbar placeholder='zoeken' value={searchQuery} onChangeText={setSearchQuery} style={styles.inputField} />

            <PaperProvider theme={buttonTheme}>
                <SegmentedButtons 
                    value={value}
                    onValueChange={setValue}
                    buttons={[
                        {
                            value: 'top',
                            label: 'Top'
                        },
                        { 
                            value: 'accounts',
                            label: 'Accounts'
                        },
                        {
                            value: 'tags',
                            label: 'Tags'
                        },
                        {
                            value: 'places',
                            label: 'Plaatsen'
                        }
                    ]}
                />

                <View style={styles.item}>
                    <Avatar.Image style={styles.avatar} size={50} source={AvatarImage} />
                    <Text variant='titleMedium'>Jimmy_n</Text>
                </View>

                <View style={styles.item}>
                    <Avatar.Image style={styles.avatar} size={50} source={Avatar2Image} />
                    <Text variant='titleMedium'>ConnectXplorer</Text>
                </View>

                <View style={styles.item}>
                    <Avatar.Image style={styles.avatar} size={50} source={AvatarImage} />
                    <Text variant='titleMedium'>Jimmy_n</Text>
                </View>

                <View style={styles.item}>
                    <Avatar.Image style={styles.avatar} size={50} source={Avatar2Image} />
                    <Text variant='titleMedium'>ConnectXplorer</Text>
                </View>
            </PaperProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 6
    },
    scene: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        backgroundColor: '#D1D3DF'
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        marginTop: 20
    }
});

const buttonTheme = {
    colors: {
        primary: '#d1d3df', // Achtergrondkleur van actieve knop
    },
};