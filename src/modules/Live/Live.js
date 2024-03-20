import { View, Text , StyleSheet, Image} from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';

export default function Live() {
    return (
        <View style={styles.container}>
            <Text style={styles.live}>Live: Newspresenter</Text>

            <Image source={require('./img/auto.jpg')} style={styles.img} />

            
        </View>
    );

    
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 10,
        
    },
    img: {
        width: 410,
        height: 600
    },
    live: {
        fontSize: 20,
        
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});
