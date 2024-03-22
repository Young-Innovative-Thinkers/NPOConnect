import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/modules/Home/Home";
import Search from "./src/modules/Search/Search";
import Live from "./src/modules/Live/Live";
import Account from "./src/modules/Account/Account";
import Favorites from "./src/modules/Favorites/Favorites";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Image, View } from "react-native";
import { Login, Signup, Welcome } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const Tab = createBottomTabNavigator();

// export default function App() {
// return (
//     <NavigationContainer>
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={Home} />
//             <Tab.Screen name="Search" component={Search} />
//             <Tab.Screen name="Live" component={Live} />
//             <Tab.Screen name="Account" component={Account} />
//             <Tab.Screen name="Favorites" component={Favorites} />
//         </Tab.Navigator>
//     </NavigationContainer>
// );
// }
