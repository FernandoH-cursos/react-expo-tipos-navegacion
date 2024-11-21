import { useEffect } from 'react';

import { View, Text } from 'react-native'
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";

import { products } from '@/store/products.store';

//* El hook 'useLocalSearchParams' nos permite obtener los parámetros de la URL actual como el path params, query params y hash params.

//* 'navigation.setOptions' nos permite modificar las opciones de navegación de la pantalla actual. En este caso 
//* se modifica el título de la pantalla con el título del producto.

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = products.find((product) => product.id === id);

  //* Se ejecuta cada vez que cambia el producto seleccionado. 
  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Producto",
    });
  }, [product]);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-2">
      <Text className="text-2xl font-work-black">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black">${product.price}</Text>
    </View>
  );
}

export default ProductScreen