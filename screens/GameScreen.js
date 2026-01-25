// Importo las herramientas que necesito de React y React Native
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Importo todos los logos
import lakersLogo from '../assets/lakers.png';
import celticsLogo from '../assets/celtics.png';
import warriorsLogo from '../assets/warriors.png';
import bullsLogo from '../assets/bulls.png';
import heatLogo from '../assets/heat.png';

// Datos de los equipos disponibles (iguales que en TeamSelectionScreen)
const equipos = [
  {
    nombre: "LAKERS",
    logo: lakersLogo,
    jugadores: ["LeBron James", "Anthony Davis", "Austin Reaves", "D'Angelo Russell", "Rui Hachimura"]
  },
  {
    nombre: "CELTICS",
    logo: celticsLogo,
    jugadores: ["Jayson Tatum", "Jaylen Brown", "Kristaps Porzingis", "Derrick White", "Al Horford"]
  },
  {
    nombre: "WARRIORS",
    logo: warriorsLogo,
    jugadores: ["Stephen Curry", "Klay Thompson", "Andrew Wiggins", "Jonathan Kuminga", "Draymond Green"]
  },
  {
    nombre: "BULLS",
    logo: bullsLogo,
    jugadores: ["Zach LaVine", "Nikola Vucevic", "Coby White", "Patrick Williams", "Alex Caruso"]
  },
  {
    nombre: "HEAT",
    logo: heatLogo,
    jugadores: ["Jimmy Butler", "Bam Adebayo", "Tyler Herro", "Nikola Jovic", "Duncan Robinson"]
  }
];

// Esta función crea la pantalla de juego
export default function GameScreen({ route }) {
  // Obtengo los índices de los equipos seleccionados de los parámetros
  const { equipoJugador1, equipoJugador2 } = route.params;
  
  // Devuelvo lo que se va a ver en pantalla
  return (
    <View style={styles.pantallaCompleta}>
      
      {/* Contenedor que tiene las dos columnas una al lado de la otra */}
      <View style={styles.contenedorDeColumnas}>
        
        {/* Columna del Jugador 1 */}
        <View style={styles.columna}>
          
          {/* Etiqueta del Jugador 1 */}
          <Text style={styles.etiquetaJugador}>J1</Text>
          
          {/* Logo del equipo actual del Jugador 1 */}
          <Image 
            source={equipos[equipoJugador1].logo} 
            style={styles.logoImagen} 
            resizeMode="contain"
          />
          
          {/* Nombre del equipo actual del Jugador 1 */}
          <Text style={styles.nombreEquipo}>{equipos[equipoJugador1].nombre}</Text>
          
          {/* Lista de jugadores del equipo actual del Jugador 1 */}
          <View style={styles.listaJugadores}>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>{equipos[equipoJugador1].jugadores[0]}</Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>{equipos[equipoJugador1].jugadores[1]}</Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>{equipos[equipoJugador1].jugadores[2]}</Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>{equipos[equipoJugador1].jugadores[3]}</Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>{equipos[equipoJugador1].jugadores[4]}</Text>
            </View>
          </View>
          
        </View>

        {/* Columna del Jugador 2 */}
        <View style={styles.columna}>
          
          {/* Etiqueta del Jugador 2 */}
          <Text style={styles.etiquetaJugador}>J2</Text>
          
          {/* Logo del equipo actual del Jugador 2 */}
          <Image 
            source={equipos[equipoJugador2].logo} 
            style={styles.logoImagen} 
            resizeMode="contain"
          />
          
          {/* Nombre del equipo actual del Jugador 2 */}
          <Text style={styles.nombreEquipo}>{equipos[equipoJugador2].nombre}</Text>
          
          {/* Lista de jugadores del equipo actual del Jugador 2 */}
          <View style={styles.listaJugadores}>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>{equipos[equipoJugador2].jugadores[0]}</Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>{equipos[equipoJugador2].jugadores[1]}</Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>{equipos[equipoJugador2].jugadores[2]}</Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>{equipos[equipoJugador2].jugadores[3]}</Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>{equipos[equipoJugador2].jugadores[4]}</Text>
            </View>
          </View>
          
        </View>
        
      </View>
      
    </View>
  );
}

// Estilos para los colores y tamaños (iguales que en TeamSelectionScreen)
const styles = StyleSheet.create({
  // La pantalla completa
  pantallaCompleta: {
    flex: 1,                    // Ocupa toda la pantalla
    backgroundColor: '#121212', // Fondo gris oscuro
    paddingTop: 40,             // Espacio arriba para no tapar la hora
  },
  
  // El contenedor que organiza las dos columnas horizontalmente
  contenedorDeColumnas: {
    flex: 1,                    // Ocupa casi toda la pantalla
    flexDirection: 'row',      // Pone las cosas una al lado de la otra
    paddingHorizontal: 20,      // Espacio a los lados
  },
  
  // Cada columna individual
  columna: {
    flex: 1,                    // Cada columna ocupa la mitad del espacio
    alignItems: 'center',       // Centra todo lo que está adentro
    backgroundColor: '#333333', // Fondo gris más claro
    marginHorizontal: 10,       // Espacio entre las columnas
    borderRadius: 20,           // Bordes redondeados
    paddingVertical: 20,        // Espacio arriba y abajo
  },
  
  // La etiqueta J1 o J2
  etiquetaJugador: {
    fontSize: 24,               // Tamaño de letra grande
    fontWeight: 'bold',         // Negrita
    color: '#FFD700',          // Color dorado
    marginBottom: 15,           // Espacio abajo
  },
  
  // El logo del equipo
  logoImagen: {
    width: 100,                 // Ancho del logo
    height: 100,                // Alto del logo
    borderRadius: 50,           // Bordes redondeados
    marginBottom: 10,           // Espacio abajo
    backgroundColor: '#555555', // Fondo gris oscuro
  },
  
  // El nombre del equipo
  nombreEquipo: {
    fontSize: 20,               // Tamaño de letra
    fontWeight: 'bold',         // Negrita
    color: '#FFFFFF',          // Color blanco
    marginBottom: 20,           // Espacio abajo
    textAlign: 'center',        // Centra el texto
  },
  
  // La lista que contiene a todos los jugadores
  listaJugadores: {
    flex: 1,                    // Ocupa el espacio que queda
    width: '100%',              // Ancho completo
    marginBottom: 20,           // Espacio abajo
  },
  
  // La caja individual de cada jugador
  cajaJugador: {
    backgroundColor: '#444444', // Fondo gris medio
    paddingVertical: 8,         // Espacio arriba y abajo
    paddingHorizontal: 12,      // Espacio a los lados
    marginVertical: 3,          // Espacio entre cajas
    borderRadius: 8,            // Bordes redondeados
    marginHorizontal: 10,       // Espacio a los lados
  },
  
  // El nombre del jugador
  nombreJugador: {
    color: '#CCCCCC',          // Color gris claro
    fontSize: 14,               // Tamaño de letra pequeño
    textAlign: 'center',        // Centra el texto
  },
});