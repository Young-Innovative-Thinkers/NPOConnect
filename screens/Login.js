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

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
              textAlign: "left",
              fontWeight: "900",
              marginVertical: 12,
              color: COLORS.orange,
            }}
          >
            Welcome Back ! 👋
          </Text>

          {/* Subtitle */}
          <Text
            style={{
              fontSize: 16,
              textAlign: "left",
              color: COLORS.black,
            }}
          >
            Hey! Good to see you again.
          </Text>
        </View>

        {/* Email address input  */}
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
        {/* Password input with show/hide functionality  */}
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
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Login btn */}
        <Button
          title="Login"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />
        {/* Register link - text and button */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Don't have an account ?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
