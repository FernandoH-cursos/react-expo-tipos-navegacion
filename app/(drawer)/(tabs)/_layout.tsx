import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

//* <Tabs> permite navegar entre diferentes pantallas de la aplicación y proporciona una barra de pestañas en la parte inferior de la
//* pantalla. Cada pestaña se define con el componente <Tabs.Screen> y se puede personalizar con las propiedades 'title' y 'tabBarIcon'.
//* 'title' define el texto que se muestra en la pestaña y 'tabBarIcon' define el icono que se muestra en la pestaña.
//* En 'name' se define la ruta de la pantalla que se mostrará al hacer clic en la pestaña.
//* 'tabBarActiveTintColor' define el color del icono de la pestaña activa. En este caso, se establece en 'indigo'.
//* 'tabBarShowLabel' define si se muestra el texto de la pestaña, si es false solo se mostrará el icono y no el texto.
//* 'headerShown' define si se muestra el header de navegación en la pantalla.
//* 'tabBarStyle' define el estilo de la barra de pestañas. En este caso, se establece el color de fondo en 'black'. 
//* 'tabBarActiveBackgroundColor' define el color de fondo de la pestaña activa. En este caso, se establece en 'red'.
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        tabBarShowLabel: true,
        // headerShown: false,
        /* tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveBackgroundColor: 'white' */
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          headerShown: false,
          title: "Stack",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="star-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
