// Autor: Diego
// Fecha: Febrero 2026
// Descripción: Este es el archivo principal de la aplicación NBA Retro Game
//              Aquí configuro la navegación entre las tres pantallas principales
//              usando React Navigation

// Importo las herramientas básicas de React
import React from 'react';

// NavigationContainer es el componente que envuelve toda la navegación
// createStackNavigator me permite crear un navegador de tipo "pila"
// En una pila, las pantallas se apilan una sobre otra
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importo las tres pantallas que voy a usar en mi aplicación
// Cada pantalla es un componente que muestra una parte diferente del juego
import TeamSelectionScreen from './screens/TeamSelectionScreen';
import GameScreen from './screens/GameScreen';
import WinnerScreen from './screens/WinnerScreen';

// Creo el navegador de tipo Stack
// StackNavigator es una función que devuelve un componente de navegación
const Stack = createStackNavigator();

// Esta es la función principal de mi aplicación
// export default me permite usar este componente en otros archivos
// NavigationContainer debe envolver todo el navegador
export default function App() {
  return (
    // NavigationContainer maneja el estado de la navegación
    <NavigationContainer>
      {/* Stack.Navigator define las pantallas disponibles */}
      {/* initialRouteName indica cuál pantalla se muestra primero */}
      <Stack.Navigator 
        initialRouteName="TeamSelection"
        {/* screenOptions aplica opciones a todas las pantallas */}
        screenOptions={{
          // headerShown: false oculta la barra de encabezado superior
          // Esto hace que la app parezca una sola pantalla continua
          headerShown: false,
        }}
      >
        {/* Stack.Screen define cada pantalla individual */}
        {/* name es el identificador único de la pantalla */}
        {/* component es el componente que se muestra */}
        {/* options define opciones específicas para esta pantalla */}
        
        {/* Pantalla 1: Selección de equipos */}
        <Stack.Screen 
          name="TeamSelection" 
          component={TeamSelectionScreen} 
          options={{ title: 'Seleccionar Equipos' }}
        />
        
        {/* Pantalla 2: Juego/Pantalla del partido */}
        <Stack.Screen 
          name="Game" 
          component={GameScreen} 
          options={{ title: 'Partido' }}
        />
        
        {/* Pantalla 3: Pantalla de resultados/ganador */}
        <Stack.Screen 
          name="Winner" 
          component={WinnerScreen} 
          options={{ title: 'Resultado' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
