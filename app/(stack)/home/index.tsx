import { View, SafeAreaView } from "react-native";
import { Link, router } from "expo-router";

import { CustomButton } from "@/components/shared/CustomButton";

//* 'asChild' en un <Link> hace que un componente se renderice como un hijo de <Link>

//* 'router' es un objeto que contiene funciones para navegar entre pantallas de la aplicación.
//* 'router.push()' navega a una pantalla de la aplicación indicando la ruta del router.  
const HomeScreen = () => {
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
