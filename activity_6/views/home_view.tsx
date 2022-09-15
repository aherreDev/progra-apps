import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Center } from "native-base";
import { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";
import useAuth from "../hooks/use_auth";
import { AppNativeParamList } from "../types";
import { AppContext } from "../provider/app_provider";

const HomeView = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<AppNativeParamList>>();

  const { currentUser, logout } = useContext(AppContext);

  useEffect(() => {
    if (!currentUser) navigate("login");
  }, [currentUser]);

  return (
    <View>
      <Center alignItems="center" justifyContent="center" h="100%">
        <Text>Welcome {currentUser?.displayName}</Text>
        <Button size="lg" marginTop="5" onPress={logout}>
          LogOut
        </Button>
      </Center>
    </View>
  );
};

export default HomeView;
