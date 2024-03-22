import { View, Text , StyleSheet, Image} from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

export default function Live() {
    return (
        <><View style={styles.stream}>
            <Text style={styles.live}>Live: Newspresenter</Text>

            <View style={styles.messages}>
                <View style={styles.message}>
                    <Text style={styles.messagemakeup}>
                        <Text style={styles.bold}>NieuwsGierig: </Text>
                        <Text>Wat een verschrikkelijk ongeluk!</Text>
                    </Text>
                </View>
                <View style={styles.message}>
                    <Text style={styles.messagemakeup}>
                        <Text style={styles.bold}>GretaNieuwsberg: </Text>
                        <Text>Jeetje, wat erg zeg...</Text>
                    </Text>
                </View>
                <View style={styles.message}>
                    <Text style={styles.messagemakeup}>
                        <Text style={styles.bold}>Larsvandebuurt: </Text>
                        <Text>Ik hoop dat iedereen in orde is!</Text>
                    </Text>    
                </View>
            </View>

            <View style={styles.circle}></View>

            <Image source={require('./img/auto.jpg')} style={styles.img} />

            
            
        </View>


        <View style={styles.chats}>
           

            <TextInput style={styles.chat}>
                <Text style={styles.text}>Stuur een chat bericht</Text>
                
            </TextInput>
        </View></>
    );

    
}


const styles = StyleSheet.create({
    stream: {
        widht: '100%',
        height: '90%',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,

        
    },

    circle: {
        marginTop: 25,
        marginLeft: 370,
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor: '#ff0000',
        zIndex: 3,
   
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },

    live: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
        fontWeight: 'bold',
        zIndex: 2,
        color: '#ffffff'
        
    },
    img: {
        width: '100%',
        height: '100%',
        marginTop: 5,
        zIndex: 1,
        position: 'absolute',
        borderRadius: 5
    },


    chats: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        
        flex: 1,
        justifyContent: 'flex-end'        
    },
    
    chat: {
        height: 20,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#cccccc',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },

    text: {
        marginLeft: 10,
        marginTop: 20
    },

    bold: {
        fontWeight: 'bold'
    },

    message: {
        height: 30,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: '#3d3d3d77',
        borderWidth: 1,
        borderColor: '#525252',
        zIndex: 2,
        justifyContent: 'center'
    },

    messages: {
        width: '90%',
        marginLeft: 10,
        zIndex: 2,
        flex: 1,
        justifyContent: 'flex-end',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },

    messagemakeup: {
        color: '#ffffff'
    }
});
