// Importo las herramientas que necesito de React y React Native
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importo todos los logos
import lakersLogo from '../assets/lakers.png';
import celticsLogo from '../assets/celtics.png';
import warriorsLogo from '../assets/warriors.png';
import bullsLogo from '../assets/bulls.png';
import heatLogo from '../assets/heat.png';

// Datos de los equipos
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

// Pantalla de partido
export default function GameScreen({ route }) {
  const navigation = useNavigation();
  const { equipoJugador1, equipoJugador2 } = route.params;
  
  // Estado para los marcadores
  const [puntosJugador1, setPuntosJugador1] = useState(0);
  const [puntosJugador2, setPuntosJugador2] = useState(0);
  
  // Funciones para sumar puntos
  const sumarPuntosJugador1 = (puntos) => {
    setPuntosJugador1(puntosJugador1 + puntos);
  };
  
  const sumarPuntosJugador2 = (puntos) => {
    setPuntosJugador2(puntosJugador2 + puntos);
  };
  
  // Función para finalizar el juego
  const finalizarJuego = () => {
    navigation.navigate('Winner', {
      equipoJugador1,
      equipoJugador2,
      puntosJugador1,
      puntosJugador2
    });
  };
  
  return (
    <View style={styles.pantallaCompleta}>
      
      {/* Marcador central */}
      <View style={styles.marcadorCentral}>
        <View style={styles.filaMarcador}>
          <View style={styles.equipoMarcador}>
            <Text style={styles.nombreMarcador}>{equipos[equipoJugador1].nombre}</Text>
            <Text style={styles.puntosMarcador}>{puntosJugador1}</Text>
          </View>
          <Text style={styles.vsMarcador}>VS</Text>
          <View style={styles.equipoMarcador}>
            <Text style={styles.nombreMarcador}>{equipos[equipoJugador2].nombre}</Text>
            <Text style={styles.puntosMarcador}>{puntosJugador2}</Text>
          </View>
        </View>
      </View>
      
      {/* Contenedor de equipos */}
      <View style={styles.contenedorEquipos}>
        
        {/* Equipo Jugador 1 */}
        <View style={styles.columnaEquipo}>
          <Text style={styles.tituloEquipo}>LOCAL</Text>
          <Image source={equipos[equipoJugador1].logo} style={styles.logo} />
          
          {/* Lista de jugadores con botones */}
          <View style={styles.listaJugadores}>
            {equipos[equipoJugador1].jugadores.map((jugador, index) => (
              <View key={index} style={styles.filaJugador}>
                <Text style={styles.nombreJugador}>{jugador}</Text>
                <View style={styles.botonesPuntos}>
                  <TouchableOpacity 
                    style={styles.botonPunto2} 
                    onPress={() => sumarPuntosJugador1(2)}
                  >
                    <Text style={styles.textoBoton}>+2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.botonPunto3} 
                    onPress={() => sumarPuntosJugador1(3)}
                  >
                    <Text style={styles.textoBoton}>+3</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
        
        {/* Equipo Jugador 2 */}
        <View style={styles.columnaEquipo}>
          <Text style={styles.tituloEquipo}>VISITANTE</Text>
          <Image source={equipos[equipoJugador2].logo} style={styles.logo} />
          
          {/* Lista de jugadores con botones */}
          <View style={styles.listaJugadores}>
            {equipos[equipoJugador2].jugadores.map((jugador, index) => (
              <View key={index} style={styles.filaJugador}>
                <Text style={styles.nombreJugador}>{jugador}</Text>
                <View style={styles.botonesPuntos}>
                  <TouchableOpacity 
                    style={styles.botonPunto2} 
                    onPress={() => sumarPuntosJugador2(2)}
                  >
                    <Text style={styles.textoBoton}>+2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.botonPunto3} 
                    onPress={() => sumarPuntosJugador2(3)}
                  >
                    <Text style={styles.textoBoton}>+3</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
        
      </View>
      
      {/* Botón de fin del juego */}
      <TouchableOpacity style={styles.botonFin} onPress={finalizarJuego}>
        <Text style={styles.textoBoton}>FIN DEL JUEGO</Text>
      </TouchableOpacity>
      

      
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  pantallaCompleta: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 40,
  },
  
  // Marcador central
  marcadorCentral: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  
  filaMarcador: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  equipoMarcador: {
    alignItems: 'center',
    flex: 1,
  },
  
  nombreMarcador: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  
  puntosMarcador: {
    color: '#FFD700',
    fontSize: 28,
    fontWeight: 'bold',
  },
  
  vsMarcador: {
    color: '#888888',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  
  // Contenedor de equipos
  contenedorEquipos: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  
  columnaEquipo: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#333333',
    marginHorizontal: 5,
    borderRadius: 15,
    padding: 15,
  },
  
  tituloEquipo: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  
  listaJugadores: {
    flex: 1,
    width: '100%',
  },
  
  filaJugador: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 4,
    padding: 8,
    backgroundColor: '#444444',
    borderRadius: 8,
  },
  
  nombreJugador: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  
  botonesPuntos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  
  botonPunto2: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    flex: 1,
    marginRight: 5,
  },
  
  botonPunto3: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    flex: 1,
    marginLeft: 5,
  },
  
  textoBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  
  // Botón de fin del juego
  botonFin: {
    backgroundColor: '#FF5722',
    marginHorizontal: 20,
    marginVertical: 15,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  

});