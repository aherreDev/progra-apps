import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdddProductView, ProductsView } from "../views";

const ProductsStack = createNativeStackNavigator();

const ProductsNavigator = () => {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen name="ProductsHome" component={ProductsView} />
      <ProductsStack.Screen name="AddProduct" component={AdddProductView} />
    </ProductsStack.Navigator>
  );
};

export default ProductsNavigator;
