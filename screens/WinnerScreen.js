// Importo las herramientas que necesito de React y React Native
import React from 'react';
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

// Pantalla de ganador
export default function WinnerScreen({ route }) {
  const navigation = useNavigation();
  const {
    equipoJugador1,
    equipoJugador2,
    puntosJugador1,
    puntosJugador2,
    puntosPorJugador1 = [],
    puntosPorJugador2 = []
  } = route.params;

  // Determinar el resultado
  let esEmpate = false;
  let equipoGanador = null;
  let equipoPerdedor = null;
  let puntosGanador = 0;
  let puntosPerdedor = 0;

  if (puntosJugador1 > puntosJugador2) {
    equipoGanador = equipos[equipoJugador1];
    equipoPerdedor = equipos[equipoJugador2];
    puntosGanador = puntosJugador1;
    puntosPerdedor = puntosJugador2;
  } else if (puntosJugador2 > puntosJugador1) {
    equipoGanador = equipos[equipoJugador2];
    equipoPerdedor = equipos[equipoJugador1];
    puntosGanador = puntosJugador2;
    puntosPerdedor = puntosJugador1;
  } else {
    esEmpate = true;
  }

  // Crear lista de todos los jugadores con sus puntos
  // Usar equipos directamente para garantizar que siempre haya datos
  const jugadoresEquipo1 = equipos[equipoJugador1]?.jugadores || [];
  const jugadoresEquipo2 = equipos[equipoJugador2]?.jugadores || [];

  let todosLosJugadores = [];

  for (let i = 0; i < 5; i++) {
    if (jugadoresEquipo1[i]) {
      todosLosJugadores.push({
        nombre: jugadoresEquipo1[i],
        puntos: puntosPorJugador1?.[i] || 0,
        equipo: equipos[equipoJugador1]?.nombre || ''
      });
    }
    if (jugadoresEquipo2[i]) {
      todosLosJugadores.push({
        nombre: jugadoresEquipo2[i],
        puntos: puntosPorJugador2?.[i] || 0,
        equipo: equipos[equipoJugador2]?.nombre || ''
      });
    }
  }

  // Ordenar por puntos y tomar los 6 mejores
  const mejoresJugadores = todosLosJugadores
    .sort((a, b) => b.puntos - a.puntos)
    .slice(0, 6);
  
  // Función para volver al inicio
  const volverAlInicio = () => {
    navigation.navigate('TeamSelection');
  };
  
  return (
    <View style={styles.pantallaCompleta}>
      
      <View style={styles.contenedorResultado}>
        
        {esEmpate ? (
          // Caso de empate
          <View style={styles.contenedorEmpate}>
            <Text style={styles.tituloEmpate}>EMPATE</Text>
            <View style={styles.contenedorEquiposEmpate}>
              <View style={styles.equipoEmpate}>
                <Image source={equipos[equipoJugador1].logo} style={styles.logoGrande} />
                <Text style={styles.nombreEquipo}>{equipos[equipoJugador1].nombre}</Text>
                <Text style={styles.puntos}>{puntosJugador1}</Text>
              </View>
              <Text style={styles.separador}>-</Text>
              <View style={styles.equipoEmpate}>
                <Image source={equipos[equipoJugador2].logo} style={styles.logoGrande} />
                <Text style={styles.nombreEquipo}>{equipos[equipoJugador2].nombre}</Text>
                <Text style={styles.puntos}>{puntosJugador2}</Text>
              </View>
            </View>
          </View>
        ) : (
          // Caso de ganador
          <View style={styles.contenedorGanador}>
            <Text style={styles.tituloGanador}>¡GANADOR!</Text>
            <Image source={equipoGanador.logo} style={styles.logoGrande} />
            <Text style={styles.nombreGanador}>{equipoGanador.nombre}</Text>
            <View style={styles.contenedorMarcador}>
              <Text style={styles.marcadorFinal}>
                {puntosGanador} - {puntosPerdedor}
              </Text>
            </View>
            <Text style={styles.subtituloGanador}>Victoria</Text>
          </View>
        )}
        
      </View>

      {/* Lista de mejores jugadores */}
      <View style={styles.mejoresJugadores}>
        <Text style={styles.tituloMejores}>TOP 6 JUGADORES</Text>
        {mejoresJugadores.length === 0 && (
          <Text style={{ color: '#888', textAlign: 'center' }}>Sin datos</Text>
        )}
        {mejoresJugadores.map((jugador, index) => (
          <View key={index} style={styles.filaJugador}>
            <Text style={styles.posicion}>{index + 1}.</Text>
            <Text style={styles.nombreJugador}>{jugador.nombre}</Text>
            <Text style={styles.puntosJugador}>{jugador.puntos} pts</Text>
          </View>
        ))}
      </View>

      {/* Botón para volver al inicio */}
      <TouchableOpacity style={styles.botonVolver} onPress={volverAlInicio}>
        <Text style={styles.textoBoton}>JUGAR OTRA VEZ</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  contenedorResultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 200,
  },
  
  // Estilos de empate
  contenedorEmpate: {
    alignItems: 'center',
  },
  
  tituloEmpate: {
    color: '#FFD700',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  
  contenedorEquiposEmpate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  equipoEmpate: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  
  separador: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  
  // Estilos de ganador
  contenedorGanador: {
    alignItems: 'center',
  },
  
  tituloGanador: {
    color: '#4CAF50',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  
  nombreGanador: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  
  contenedorMarcador: {
    backgroundColor: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 15,
  },
  
  marcadorFinal: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  subtituloGanador: {
    color: '#4CAF50',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  
  // Estilos comunes
  logoGrande: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  
  nombreEquipo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  
  puntos: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  // Botón volver
  botonVolver: {
    backgroundColor: '#2196F3',
    marginHorizontal: 30,
    marginBottom: 15,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  
  textoBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  mejoresJugadores: {
    position: 'absolute',
    bottom: 90,
    width: '90%',
    backgroundColor: '#333333',
    borderRadius: 15,
    padding: 15,
    maxHeight: 280,
  },

  tituloMejores: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  filaJugador: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },

  posicion: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
    width: 30,
  },

  nombreJugador: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
  },

  puntosJugador: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: 'bold',
  },
});