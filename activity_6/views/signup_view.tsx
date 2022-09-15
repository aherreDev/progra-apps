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
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
  useToast,
} from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppNativeParamList } from "../types";
import useAuth from "../hooks/use_auth";
import { AppContext } from "../provider/app_provider";

const SignUpView = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, currentUser } = useContext(AppContext);
  const toast = useToast();

  const { navigate } =
    useNavigation<NativeStackNavigationProp<AppNativeParamList>>();

  const submit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      signup(email, password, userName);
    }
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
    if (currentUser) navigate("home");
  }, [currentUser]);

  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Registro</Text>
      </View>
      <View style={styles.text2}>
        <Text>¿Ya tienes cuenta? </Text>
        <TouchableOpacity onPress={() => navigate("login")}>
          <Text style={styles.signupText}> Inicia sesión </Text>
        </TouchableOpacity>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            isRequired
            value={userName}
            onChangeText={setUserName}
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
            placeholder="Nombre de usuario"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            isRequired
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email" />}
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
            placeholder="Correo electrónico"
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
            isRequired
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
            placeholder="Contraseña"
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
            isRequired
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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
            placeholder="Confirma contraseña"
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
          ¡Registrar ahora!
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

export default SignUpView;
