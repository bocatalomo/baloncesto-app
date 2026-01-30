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
  },
  {
    nombre: "CELTICS",
    logo: celticsLogo,
  },
  {
    nombre: "WARRIORS",
    logo: warriorsLogo,
  },
  {
    nombre: "BULLS",
    logo: bullsLogo,
  },
  {
    nombre: "HEAT",
    logo: heatLogo,
  }
];

// Pantalla de ganador
export default function WinnerScreen({ route }) {
  const navigation = useNavigation();
  const { equipoJugador1, equipoJugador2, puntosJugador1, puntosJugador2 } = route.params;
  
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
    marginBottom: 40,
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
});