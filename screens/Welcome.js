import { View, Image, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    // gradient background color
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      {/* container  for the content of the welcome screen */}
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("./../assets/img/logo.png")}
            style={{
              height: 400,
              width: 400,
              alignItems: "baseline",
              right: -10,
            }}
          />
        </View>

        {/* text content */}
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            bottom: 150,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 300,
              textAlign: "center",
              color: COLORS.white,
            }}
          >
            Stay Informed,
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 300,
              textAlign: "center",
              color: COLORS.white,
            }}
          >
            Share What Matters
          </Text>
        </View>

        {/* button content */}
        <View style={{ alignItems: "center" }}>
          <Button
            title="Register"
            onPress={() => navigation.navigate("Signup")}
            style={{
              marginTop: 22,
              width: "60%",
            }}
          />
        </View>

        {/* small login text content */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
              fontWeight: "400",
              fontStyle: "italic",
            }}
          >
            Already have an account ?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                fontWeight: "700",
                fontStyle: "italic",
                marginLeft: 4,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
