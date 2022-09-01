import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, Button } from "react-native";
import { Product } from "../types";

const defaultValue: Product = {
  name: "la mama de la mama",
  description: "Si",
  price: "5",
};

const AdddProductView = ({ navigation }: any) => {
  const [product, setProduct] = useState<Product>(defaultValue);

  const handleChange = (
    fieldName: "name" | "description" | "price",
    value: string
  ) => {
    setProduct({ ...product, [fieldName]: value } as Product);
  };

  const handleAddProduct = () => {
    console.log("Adding product", JSON.stringify(product));

    cleanProduct();

    redirectToProducts();
  };

  const redirectToProducts = () => {
    cleanProduct();

    navigation.navigate("Products");
  };

  const cleanProduct = () => {
    setProduct(defaultValue);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <TextInput
            placeholder="Name of product"
            style={styles.input}
            value={product.name}
            onChangeText={(value) => handleChange("name", value)}
          />
        </View>

        <View style={styles.view}>
          <TextInput
            placeholder="description"
            style={styles.input}
            value={product.description}
            onChangeText={(value) => handleChange("description", value)}
          />
        </View>

        <View style={styles.view}>
          <TextInput
            placeholder="price"
            style={styles.input}
            value={product.price}
            onChangeText={(value) => handleChange("price", value)}
          />
        </View>

        <View style={styles.viewButton}>
          <Button title="Add product" onPress={handleAddProduct} />
        </View>

        <View style={styles.viewButton}>
          <Button title="Cancel" onPress={redirectToProducts} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  view: {},
  input: {
    flex: 1,
    backgroundColor: "#fff2cc",
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 8,
  },
  viewButton: {
    flex: 1,
    padding: 5,
  },
  button: {},
});

export default AdddProductView;
