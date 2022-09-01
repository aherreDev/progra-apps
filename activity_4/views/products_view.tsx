import React from "react";
import { Button, View } from "react-native";

const ProductsView = ({ navigation }: any) => {
  return (
    <View>
      <Button
        title="Agregar Producto"
        onPress={() => navigation.navigate("AddProduct")}
      />
    </View>
  );
};

export default ProductsView;
