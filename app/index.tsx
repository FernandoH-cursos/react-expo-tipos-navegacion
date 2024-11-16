import { View, Text, SafeAreaView } from "react-native";
import { Link, Redirect } from "expo-router";

//* <Link> permite navegar a otra pantalla de la aplicación indicando la ruta en la propiedad 'href'.
//* <Redirect> permite redirigir a otra pantalla de la aplicación indicando la ruta en la propiedad 'href'. 

const App = () => {
  return <Redirect href="/(stack)/home" />;

  /* return (
    <SafeAreaView>
      <View className="mt-6 mx-5">
        <Text style={{ fontFamily: "WorkSans-Black" }} className="text-5xl">
          Hola mundo
        </Text>

        <Text className="text-4xl text-primary font-work-black">
          Hola mundo
        </Text>
        <Text className="text-3xl text-secondary font-work-medium">
          Hola mundo
        </Text>
        <Text className="text-2xl text-secondary-100 font-work-light">
          Hola mundo
        </Text>
        <Text className="text-xl text-tertiary">Hola mundo</Text>

        <Link href="/products">Productos</Link>
      </View>
    </SafeAreaView>
  ); */
};

export default App;
