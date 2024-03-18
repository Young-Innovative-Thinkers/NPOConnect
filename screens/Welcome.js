import { View, Image, Text } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';

const Welcome = () => {
    return (
     <LinearGradient
        style= {{
            flex: 1
        }}
        colors={[COLORS.secondary, COLORS.primary]}
    >
        <View style={{flex:1}}>
            <Image
                source={require("./../assets/img/logo.png")}
                style={{
                    height: 400,
                    width:400,
                    alignItems: "center",
                    justifyContent:"center",
                    marginTop: 200,
                    right: -10
                }}
            />

        </View>
     </LinearGradient>
    )
}

export default  Welcome