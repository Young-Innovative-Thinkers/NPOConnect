import React from "react";
import { View, Alert } from "react-native";
import {
  GluestackUIProvider,
  Text,
  Button,
  ButtonText,
  ScrollView,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const dummyUser = {
  username: "Sara de Jong",
};

export default function Account() {
  return (
    <GluestackUIProvider config={config}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            borderTopRightRadius: 90,
            borderTopLeftRadius: 90,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.2,
          }}
        >
          <View style={{ position: "absolute", top: 30, left: 30 }}>
            <FontAwesome name="arrow-left" size={24} color="gray" />
          </View>

          <View style={{ position: "absolute", top: 30, right: 30 }}>
            <FontAwesome name="cog" size={24} color="gray" />
          </View>

          <Image
            source={require("../../../assets/UserProfile.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: "center",
              marginTop: 20,
            }}
          />
          <Text
            variant="heading"
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 5,
              textAlign: "center",
            }}
          >
            {dummyUser.username}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text variant="heading" style={{ marginRight: 10, color: "blue" }}>
              ConnectXplorer
            </Text>
            <FontAwesome name="check" size={20} color="blue" />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: -5,
            }}
          >
            <Text
              style={{ marginRight: 70, color: "gray", fontStyle: "italic" }}
            >
              Posts
            </Text>
            <Text style={{ marginLeft: 0, color: "gray", fontStyle: "italic" }}>
              Followers
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <FontAwesome name="microphone" size={15} color="gray" />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>15</Text>

            <View style={{ width: 80 }} />

            <FontAwesome name="users" size={15} color="gray" />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>25</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Button
              size="md"
              variant="solid"
              action="positive"
              isDisabled={false}
              isFocusVisible={false}
              style={{ backgroundColor: "#FF6C00", marginLeft: 60 }}
            >
              <ButtonText>Edit Profile</ButtonText>
            </Button>

            <Button
              size="md"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              style={{ backgroundColor: "#FF6C00", marginRight: 60 }}
            >
              <ButtonText>Followers</ButtonText>
            </Button>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 30,
          }}
        >
          <View
            style={{
              width: 177,
              height: 113,
              backgroundColor: "white",
              borderRadius: 10,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/VideoNieuws.png")}
              style={{
                width: 180,
                height: 120,
                borderRadius: 10,
                alignSelf: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            />
          </View>
          <View
            style={{
              width: 177,
              height: 113,
              backgroundColor: "white",
              borderRadius: 10,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/NieuwsImage.png")}
              style={{
                width: 180,
                height: 120,
                borderRadius: 10,
                alignSelf: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            />
          </View>
        </View>

        <View style={{ justifyContent: "center", padding: 30, marginTop: -40 }}>
          <View
            style={{
              width: 370,
              height: 70,
              backgroundColor: "white",
              borderRadius: 10,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.2,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/NosPost1.png")}
              style={{
                width: 370,
                height: 35,
                alignSelf: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            />
          </View>
        </View>

        <View style={{ justifyContent: "center", padding: 30, marginTop: -40 }}>
          <View
            style={{
              width: 370,
              height: 70,
              backgroundColor: "white",
              borderRadius: 10,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.2,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/NosPost2.png")}
              style={{
                width: 370,
                height: 35,
                alignSelf: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            />
          </View>
        </View>

        <View style={{ justifyContent: "center", padding: 30, marginTop: -40 }}>
          <View
            style={{
              width: 370,
              height: 70,
              backgroundColor: "white",
              borderRadius: 10,
              padding: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.2,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/NosPost3.png")}
              style={{
                width: 370,
                height: 45,
                alignSelf: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </GluestackUIProvider>
  );
}
