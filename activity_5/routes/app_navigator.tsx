import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppNativeParamList } from "../types";
import { LoginView, SignUpView } from "../views";

const AppStack = createNativeStackNavigator<AppNativeParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="login" component={LoginView} />
        <AppStack.Screen name="signup" component={SignUpView} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
