// Importo las herramientas de React Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importo las pantallas
import TeamSelectionScreen from './screens/TeamSelectionScreen';
import GameScreen from './screens/GameScreen';

// Creo el navegador de tipo Stack
const Stack = createStackNavigator();

// La aplicación principal configura el navegador
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="TeamSelection"
        screenOptions={{
          headerShown: false,  // Oculto la cabecera para que parezca una sola app
        }}
      >
        <Stack.Screen 
          name="TeamSelection" 
          component={TeamSelectionScreen} 
          options={{ title: 'Seleccionar Equipos' }}
        />
        <Stack.Screen 
          name="Game" 
          component={GameScreen} 
          options={{ title: 'Juego' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
