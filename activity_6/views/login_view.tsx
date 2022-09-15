import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
  useToast,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppNativeParamList } from "../types";
import useFirebase from "../hooks/use_firebase";
import useAuth from "../hooks/use_auth";
import { AppContext } from "../provider/app_provider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { navigate } =
    useNavigation<NativeStackNavigationProp<AppNativeParamList>>();
  const { login, error, currentUser } = useContext(AppContext);
  const toast = useToast();

  const submit = () => {
    login(email, password);
  };

  useEffect(() => {
    if (error)
      toast.show({
        description: error,
        render: () => {
          return (
            <Box bg="red.500" px="2" py="1" color="white" rounded="sm" mb={5}>
              {error}
            </Box>
          );
        },
      });
  }, [error]);

  useEffect(() => {
    console.log("currentUser", currentUser);
    if (currentUser) {
      console.log("navigate to home");
      navigate("home");
    }
  }, [currentUser]);

  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Inicio de sesión</Text>
      </View>
      <View style={styles.text2}>
        <Text>¿No estás registrado? </Text>
        <TouchableOpacity onPress={() => navigate("signup")}>
          <Text style={styles.signupText}> ¡Registrate!</Text>
        </TouchableOpacity>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Nombre de usuario o correo electrónico"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            value={password}
            onChangeText={setPassword}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Contraseñas"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button onPress={submit} style={styles.buttonDesign}>
          Ingresar
        </Button>
      </View>

      {/* Line */}
      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>O</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      {/* Box */}
      <View style={styles.boxStyle}>
        <Pressable onPress={() => navigate("#")}>
          <Box
            style={{ height: 80, width: 80 }}
            shadow={3}
            _light={{
              backgroundColor: "gray.50",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
        </Pressable>

        <Pressable onPress={() => navigate("#")}>
          <Box
            style={styles.imageStyle}
            shadow={3}
            _light={{
              backgroundColor: "gray.50",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
        </Pressable>

        <Pressable onPress={() => navigate("#")}>
          <Box
            style={styles.imageStyle}
            shadow={3}
            _light={{
              backgroundColor: "gray.50",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
        </Pressable>

        <Pressable onPress={() => navigate("#")}>
          <Box
            style={styles.imageStyle}
            shadow={3}
            _light={{
              backgroundColor: "gray.50",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  signupText: {
    fontWeight: "bold",
  },
  emailField: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "#026efd",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
});
