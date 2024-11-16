import { Stack } from 'expo-router';

//* <Stack> es un componente de enrutamiento que permite navegar entre diferentes pantallas de la aplicación. Permite mostrar un
//* header, entre otras cosas para poder ver de forma clara la navegación de la aplicación.

//* En 'screenOptions' se definen las opciones de estilo del header de navegación de la app como:
//* - 'headerStyle' para el estilo del header. En este caso se define el color de fondo del header.}
//* - 'headerTintColor' para el color del texto del header.
//* - 'headerTitleStyle' para el estilo del texto del header. En este caso se define el peso de la fuente del texto del header.
//* - 'headerShadowVisible' para mostrar u ocultar la sombra del header.
//* - 'headerShown' para mostrar u ocultar el header de navegación.  
//* - 'contentStyle' para el estilo del contenido de la pantalla. En este caso se define el color de fondo del contenido de la pantalla. 

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "white",
        }
      }}
    >
      {/* Aquí se definen las pantallas de la aplicación */}
      {/* 'title' en 'options' agrega el titulo de la pantalla en el header de navegacion */}
      {/* 'animation' en 'options' permite agregar el tipo de transicion al navegar con la ruta en la que se especifica */}
      <Stack.Screen name="home/index" options={{ title: "Inicio" }} />
      <Stack.Screen name="products/index" options={{ title: "Productos",animation: 'fade_from_bottom' }} />
      <Stack.Screen name="profile/index" options={{ title: "Perfil" }} />
      <Stack.Screen name="settings/index" options={{ title: "Ajustes Pantalla" }} />
    </Stack>
  );
}

export default StackLayout