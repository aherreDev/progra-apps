import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AddProductView, HomeView, NotFoundView, ProductsView } from "../views";

const Stack = createNativeStackNavigator();

const RouterNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={HomeView}
          options={{ title: "This is the homeView" }}
        />
        <Stack.Screen
          name="Products"
          component={ProductsView}
          options={{ title: "Add a product", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProductView}
          options={{ title: "List of Products" }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundView}
          options={{ title: "Ups.." }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterNavigation;
