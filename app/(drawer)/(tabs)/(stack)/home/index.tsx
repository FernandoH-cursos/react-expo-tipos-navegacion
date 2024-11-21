import { View, SafeAreaView } from "react-native";

import { CustomButton } from "@/components/shared/CustomButton";

import { Link, router, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

//* 'asChild' en un <Link> hace que un componente se renderice como un hijo de <Link>

//* 'router' es un objeto que contiene funciones para navegar entre pantallas de la aplicación.
//* 'router.push()' navega a una pantalla de la aplicación indicando la ruta del router.

//* 'useNavigation()' es un hook de react-navigation que devuelve el objeto de navegación de la pantalla actual.
//* 'navigation.dispatch()' envía una acción a la navegación de la pantalla actual.
//* 'DraweActions' es un objeto que contiene acciones para el drawer de la aplicación. 'toggleDrawer' abre o cierra el drawer. 
const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  }


  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          onPress={() => router.push("/products")}
          color="primary"
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          onPress={() => router.push("/profile")}
          color="secondary"
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-2"
          onPress={() => router.push("/settings")}
          color="tertiary"
        >
          Ajustes
        </CustomButton>

        <Link className="mb-2" href="/products" asChild>
          <CustomButton className="mb-10" variant="text-only" color="primary">
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>
          Abrir menú
        </CustomButton>

        {/* <Link className="mb-5" href="/products">
          Productos
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil
        </Link>
        <Link className="mb-5" href="/settings">
          Ajustes
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
