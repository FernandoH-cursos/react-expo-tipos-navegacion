import { useEffect } from 'react';

import { useFonts } from 'expo-font';
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import "./global.css";

//* 'SplashScreen' es un módulo de Expo que permite controlar la pantalla de carga de la aplicación.
//* 'preventAutoHideAsync' evita que la pantalla de carga se oculte automáticamente.

//* <GestureHandlerRootView> es un componente de 'react-native-gesture-handler' que permite utilizar gestos en la app como
//* deslizar, tocar, etc.

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  //* Carga todas las fuentes necesarias para la aplicación 
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  //* Oculta la pantalla de carga cuando las fuentes se han cargado correctamente o si ha ocurrido un error. 
  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  
  // return <Slot/>;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default RootLayout;
