import { Text, View } from 'react-native'

import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

//* <DrawerContentScrollView> permite agregar scroll al contenido del menú lateral de la aplicación si es necesario o si el contenido
//* es muy largo. Su propiedad 'scrollEnabled' permite habilitar o deshabilitar el scroll del contenido del menú lateral.

//* 'props' es un objeto que contiene las propiedades de la pantalla actual. En este caso se utiliza 'DrawerContentComponentProps' que
//* contiene las propiedades de la pantalla actual del menú lateral. Gracias a 'props' se vuelven a ver las opciones de menú lateral
//* aparte de este contenido personalizado adicional del drawer.

//* <DrawerItemList> permite renderizar las opciones de menú lateral de la aplicación.

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work-black text-3xl">FH</Text>
        </View>
      </View>

      {/* Drawer items (opciones de menu lateral) */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
