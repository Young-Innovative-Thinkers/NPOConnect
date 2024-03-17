import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Account from "./src/modules/Account/Account";
import Favorites from "./src/modules/Favorites/Favorites";
import Home from "./src/modules/Home/Home";
import Live from "./src/modules/Live/Live";
import Search from "./src/modules/Search/Search";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Live" component={Live} />
        <Tab.Screen name="Account" component={Account} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

