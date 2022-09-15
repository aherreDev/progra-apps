import { NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import AppProvider from "./provider/app_provider";
import AppNavigator from "./routes/app_navigator";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </NativeBaseProvider>
  );
}
