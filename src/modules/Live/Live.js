import { TextInput } from 'react-native-paper';
import { View, Text , StyleSheet, Image} from 'react-native';
import React from 'react';


export default function Live() {
    return (
        <><View style={styles.stream}>
            <View style={styles.profile}>
                <Image source={require('./img/pf1.png')} style={styles.profilep} />
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={styles.pfT}>CityLover</Text>
                    <Text style={styles.pfL}>Live</Text>                            
                </View>

            </View>

            

            <View style={styles.messages}>
                <View style={styles.message}>
                    <Image source={require('./img/pf1.png')} style={styles.pf} />
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                        <Text style={styles.bold}>ConnectXplorer</Text>
                        <Text style={styles.normal}>Ik hoop dat iedereen in orde is!</Text>                            
                    </View>
                </View>
                <View style={styles.message}>
                    <Image source={require('./img/pf2.png')} style={styles.pf} />
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                        <Text style={styles.bold}>Jimmy_N</Text>
                        <Text style={styles.normal}>Kan iemand vertellen wat er aan de hand is?</Text>                            
                    </View>
                </View>
                <View style={styles.message}>
                    <Image source={require('./img/pf3.png')} style={styles.pf} />
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                        <Text style={styles.bold}>Tj_2503</Text>
                        <Text style={styles.normal}>WEG MET DE POLITIE!!!</Text>                            
                    </View>
                </View>
                <View style={styles.message}>
                    <Image source={require('./img/pf4.png')} style={styles.pf} />
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                        <Text style={styles.bold}>Mr_Bot</Text>
                        <Text style={styles.normal}>Waar gaat dit land naartoe?!</Text>                            
                    </View>
                </View>
            </View>            

            <Image source={require('./img/popo.jpg')} style={styles.img} />
            {/* <Image src={auto} style={styles.img}/> */}
            
            
        </View>
        
        {/* <KeyboardAwareScrollView>
            <TextInput style={styles.chat} placeholder='Stuur een chat bericht' >
                <Text style={styles.text}>Stuur een chat bericht</Text>
                
            </TextInput>
        
        </KeyboardAwareScrollView> */}

        <View style={styles.chats}>
           
            <TextInput style={styles.chat} placeholder='Stuur een chat bericht' >
                <Text style={styles.text}>Stuur een chat bericht</Text>
                
            </TextInput>
            
        </View></>
    );

    
}


const styles = StyleSheet.create({
    stream: {
        widht: '100%',
        height: '92%',
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

    profile: {
        width: 120,
        height: 60,
        marginLeft: 280,
        marginTop: 423,
        paddingLeft: 5,
        zIndex: 2,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: '#ggg',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },

    profilep: {
        height: 40,
        width: 40,
        marginRight: 3
    },

    pfT: {
        fontSize: 15,
        fontWeight: '300',
    },

    pfL: {
        fontSize: 9,
        fontStyle: 'italic',
        color: 'red'
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
        height: '70%',
        marginTop: 5,
        zIndex: 1,
        position: 'absolute',
        borderRadius: 5
    },


    chats: {
        marginTop: 0,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        
        flex: 1,
        justifyContent: 'flex-end',
        color: '#C8CED6'        
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
        backgroundColor: '#ffffff',
        zIndex: 4,
        color: '#C8CED6'
    },

    text: {
        marginLeft: 10,
        marginTop: 20,
        color: '#C8CED6'
    },

    bold: {
        fontWeight: 'bold',
        color: '#006EFF',
        fontSize: 10,
        fontStyle: 'italic'
    },

    normal: {
        color: '#000000',
        fontSize: 11,
        fontWeight: '500'
    },

    message: {
        height: 50,
        paddingLeft: 35,
        backgroundColor: '#ffffff',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    messages: {
        width: '100%',
        // marginLeft: 10,
        zIndex: 1,
        flex: 1,
        justifyContent: 'flex-end',
        shadowColor: '#B9BABE',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

    messagemakeup: {
        color: '#000000'
    },

    pf: {
        height: 40,
        width: 40,
        marginRight: 7
        
    }
});
