import React, { FC } from "react";
import { Button, View } from "react-native";

const HomeView: FC = ({ navigation }: any) => {
  return (
    <View>
      <Button
        title="Ir a productos"
        onPress={() => navigation.navigate("Products")}
      />
      <Button
        title="Error View"
        onPress={() => navigation.navigate("NotFound")}
      />
    </View>
  );
};

export default HomeView;
