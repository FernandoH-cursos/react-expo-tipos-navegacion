import { CustomDrawer } from "@/components/shared/CustomDrawer";

import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

//* <Drawer> permite definir las rutas que se mostrarán en el menú lateral de la aplicación.

//* 'drawerContent' es un componente que se renderiza en el menú lateral de la aplicación. Permite definir el contenido del menú lateral.
//* que es adicional a las rutas o opciones definidas en el menú lateral.

//* En 'screenOptions' se definen las opciones de estilo del menú lateral de la app como:
//* - 'headerShown' para mostrar u ocultar el header del menú lateral. 
//* - 'overlayColor' para el color de fondo del menú lateral (overlay).
//* - 'drawerActiveTintColor' para el color del texto y fondo de la opción seleccionada en el menú lateral.
//* - 'headerShadowVisible' para mostrar u ocultar la sombra del header del menú lateral.
//* - 'sceneStyle' para el estilo del contenido de la pantalla. En este caso se define el color de fondo del contenido de la pantalla.

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        // headerShown: false,
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: "white",
        },
      }}
    >
      {/* Aqui se definen las opciones de navegacion del menu lateral(drawer) de la app*/}
      {/* 'drawerLabel' en 'options' es el titulo de la opcion del menu lateral definido */}

      {/* 'title' en 'options' es el titulo (que se encuentra al lado del icono hamburguesa)
      de la ruta actual del header del menu lateral(drawer) */}

      {/* 'drawerIcon' en 'options' permite agregar un icon al lado de la opción del menú lateral. Puede heredar el color y tamaño de 
      la opcion de menú definida como ruta en el drawe */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: "Tabs + Stack",
          title: "Tabs + Stack",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "Usuario",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
