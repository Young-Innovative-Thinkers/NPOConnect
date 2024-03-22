import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";

const Signup = ({ navigation }) => {
  // State to manage whether the password is shown or hidden
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    // Wrapper
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Main container */}
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        {/* Title */}
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 50,
              textAlign: "center",
              fontWeight: "900",
              marginVertical: 12,
              color: COLORS.orange,
            }}
          >
            Sign Up
          </Text>
        </View>

        {/* First name input */}
        <View style={{ marginBottom: 12 }}>
          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="First name"
              placeholderTextColor={COLORS.grey}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        {/* Last name input */}
        <View style={{ marginBottom: 12 }}>
          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Last name"
              placeholderTextColor={COLORS.grey}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        {/* Username input */}
        <View style={{ marginBottom: 12 }}>
          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Username"
              placeholderTextColor={COLORS.grey}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        {/* Email address input */}
        <View style={{ marginBottom: 12 }}>
          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Email address"
              placeholderTextColor={COLORS.grey}
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        {/* Phone number input */}
        <View style={{ marginBottom: 12 }}>
          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="+31"
              placeholderTextColor={COLORS.grey}
              keyboardType="numeric"
              style={{
                width: "12%",
                borderRightWidth: 1,
                borderLeftColor: COLORS.grey,
                height: "100%",
              }}
            />

            <TextInput
              placeholder="Phone number"
              placeholderTextColor={COLORS.grey}
              keyboardType="numeric"
              style={{
                width: "80%",
              }}
            />
          </View>
        </View>

        {/* Password input with show/hide functionality */}
        <View style={{ marginBottom: 12 }}>
          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={COLORS.grey}
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
            />

            {/* Toggle btn fot password visibility */}
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={COLORS.grey} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.grey} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Section for "Already have an account?" */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
            marginVertical: 20,
          }}
        >
          {/* Text and link to login screen */}
          <Text
            style={{ fontSize: 16, fontStyle: "italic", color: COLORS.black }}
          >
            Already have an account
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                fontStyle: "italic",
                color: COLORS.lightBlue,
                fontWeight: "700",
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>

        {/* Register button */}
        <Button
          title="Register"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
