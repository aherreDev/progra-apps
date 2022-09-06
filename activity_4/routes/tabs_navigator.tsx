import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ConfigView, HomeView } from "../views";
import ProductsNavigator from "./products_navigator";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Products" component={ProductsNavigator} />
        <Tab.Screen name="Config" component={ConfigView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabsNavigator;
