// Autor: Diego
// Fecha: Febrero 2026
// Descripción: Pantalla final que muestra el resultado del partido
//              Muestra el equipo ganador (o empate), el marcador final
//              y un ranking de los 6 mejores anotadores del partido

// ==========================================
// IMPORTACIONES DE BIBLIOTECAS
// ==========================================

import React from 'react';

// Componentes necesarios
// View: contenedor, Text: texto, StyleSheet: estilos
// TouchableOpacity: botón, Image: imágenes de logos
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Hook para navegar hacia atrás
import { useNavigation } from '@react-navigation/native';

// ==========================================
// IMPORTACIÓN DE LOGOS
// ==========================================

import lakersLogo from '../assets/lakers.png';
import celticsLogo from '../assets/celtics.png';
import warriorsLogo from '../assets/warriors.png';
import bullsLogo from '../assets/bulls.png';
import heatLogo from '../assets/heat.png';

// ==========================================
// DATOS DE LOS EQUIPOS
// ==========================================

// Copio el mismo array de equipos que en las otras pantallas
// Esto es necesario porque WinnerScreen trabaja de forma independiente
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

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function WinnerScreen({ route }) {
  
  // ==========================================
  // OBTENCIÓN DE PARÁMETROS
  // ==========================================
  
  const navigation = useNavigation();
  
  // Recibo todos los parámetros que me pasaron desde GameScreen
  // Uso valores por defecto [] por si viene undefined (retrocompatibilidad)
  const {
    equipoJugador1,              // Índice del equipo del Jugador 1
    equipoJugador2,              // Índice del equipo del Jugador 2
    puntosJugador1,             // Puntos totales del Jugador 1
    puntosJugador2,              // Puntos totales del Jugador 2
    puntosPorJugador1 = [],      // Array con puntos de cada jugador del equipo 1
    puntosPorJugador2 = []       // Array con puntos de cada jugador del equipo 2
  } = route.params;

  // ==========================================
  // DETERMINACIÓN DEL GANADOR
  // ==========================================
  
  // Variables para almacenar el resultado
  let esEmpate = false;          // ¿Fue un empate?
  let equipoGanador = null;      // Objeto del equipo winner
  let equipoPerdedor = null;     // Objeto del equipo perdedor
  let puntosGanador = 0;         // Puntos del winner
  let puntosPerdedor = 0;       // Puntos del perdedor

  // Comparo los marcadores para determinar el resultado
  if (puntosJugador1 > puntosJugador2) {
    // Ganó el Jugador 1
    equipoGanador = equipos[equipoJugador1];      // Busco el equipo en el array
    equipoPerdedor = equipos[equipoJugador2];
    puntosGanador = puntosJugador1;
    puntosPerdedor = puntosJugador2;
  } else if (puntosJugador2 > puntosJugador1) {
    // Ganó el Jugador 2
    equipoGanador = equipos[equipoJugador2];
    equipoPerdedor = equipos[equipoJugador1];
    puntosGanador = puntosJugador2;
    puntosPerdedor = puntosJugador1;
  } else {
    // Empate - ambos tienen los mismos puntos
    esEmpate = true;
  }

  // ==========================================
  // CREACIÓN DEL RANKING DE JUGADORES
  // ==========================================
  
  // Obtengo los arrays de jugadores de cada equipo
  // Uso || [] por seguridad si viene undefined
  const jugadoresEquipo1 = equipos[equipoJugador1]?.jugadores || [];
  const jugadoresEquipo2 = equipos[equipoJugador2]?.jugadores || [];

  // Array que contendrá todos los jugadores con sus puntos
  let todosLosJugadores = [];

  // Recorro los 5 jugadores de cada equipo
  for (let i = 0; i < 5; i++) {
    // Si existe el jugador i del equipo 1, lo agrego
    if (jugadoresEquipo1[i]) {
      todosLosJugadores.push({
        nombre: jugadoresEquipo1[i],                                    // Nombre del jugador
        puntos: puntosPorJugador1?.[i] || 0,                           // Sus puntos (0 si no hay datos)
        equipo: equipos[equipoJugador1]?.nombre || ''                  // Nombre del equipo
      });
    }
    // Si existe el jugador i del equipo 2, lo agrego
    if (jugadoresEquipo2[i]) {
      todosLosJugadores.push({
        nombre: jugadoresEquipo2[i],
        puntos: puntosPorJugador2?.[i] || 0,
        equipo: equipos[equipoJugador2]?.nombre || ''
      });
    }
  }

  // Ordeno los jugadores por puntos (de mayor a menor)
  // .sort() compara dos elementos: a y b
  // Si b.puntos - a.puntos es positivo, b va antes que a
  const mejoresJugadores = todosLosJugadores
    .sort((a, b) => b.puntos - a.puntos)  // Orden descendente
    .slice(0, 6);                         // Tomo solo los primeros 6

  // ==========================================
  // FUNCIÓN PARA VOLVER AL INICIO
  // ==========================================
  
  const volverAlInicio = () => {
    // Navego directamente a TeamSelection (reinicia el ciclo)
    navigation.navigate('TeamSelection');
  };
  
  // ==========================================
  // RETORNO (INTERFAZ DE USUARIO)
  // ==========================================
  
  return (
    // Contenedor principal
    <View style={styles.pantallaCompleta}>
      
      {/* Contenedor del resultado (ganador o empate) */}
      <View style={styles.contenedorResultado}>
        
        {/* Uso operador ternario para mostrar: EMPATE vs GANADOR */}
        {esEmpate ? (
          
          // ==========================================
          // CASO: EMPATE
          // ==========================================
          
          <View style={styles.contenedorEmpate}>
            {/* Título "EMPATE" en dorado */}
            <Text style={styles.tituloEmpate}>EMPATE</Text>
            
            {/* Contenedor con los dos equipos lado a lado */}
            <View style={styles.contenedorEquiposEmpate}>
              
              {/* Equipo del Jugador 1 */}
              <View style={styles.equipoEmpate}>
                {/* Logo grande */}
                <Image 
                  source={equipos[equipoJugador1].logo} 
                  style={styles.logoGrande} 
                />
                {/* Nombre del equipo */}
                <Text style={styles.nombreEquipo}>
                  {equipos[equipoJugador1].nombre}
                </Text>
                {/* Sus puntos */}
                <Text style={styles.puntos}>{puntosJugador1}</Text>
              </View>
              
              {/* Separador "-" entre los equipos */}
              <Text style={styles.separador}>-</Text>
              
              {/* Equipo del Jugador 2 */}
              <View style={styles.equipoEmpate}>
                <Image 
                  source={equipos[equipoJugador2].logo} 
                  style={styles.logoGrande} 
                />
                <Text style={styles.nombreEquipo}>
                  {equipos[equipoJugador2].nombre}
                </Text>
                <Text style={styles.puntos}>{puntosJugador2}</Text>
              </View>
              
            </View>
          </View>
          
        ) : (
          
          // ==========================================
          // CASO: HAY GANADOR
          // ==========================================
          
          <View style={styles.contenedorGanador}>
            {/* Título "¡GANADOR!" en verde */}
            <Text style={styles.tituloGanador}>¡GANADOR!</Text>
            
            {/* Logo grande del equipo winner */}
            <Image 
              source={equipoGanador.logo} 
              style={styles.logoGrande} 
            />
            
            {/* Nombre del equipo winner */}
            <Text style={styles.nombreGanador}>
              {equipoGanador.nombre}
            </Text>
            
            {/* Contenedor con el marcador final */}
            <View style={styles.contenedorMarcador}>
              {/* Ejemplo: "85 - 72" */}
              <Text style={styles.marcadorFinal}>
                {puntosGanador} - {puntosPerdedor}
              </Text>
            </View>
            
            {/* Subtítulo "Victoria" */}
            <Text style={styles.subtituloGanador}>Victoria</Text>
          </View>
          
        )}
        
      </View>

      {/* ==========================================
          RANKING DE MEJORES JUGADORES
          ========================================== */}
      
      {/* Contenedor del ranking (posición absoluta abajo) */}
      <View style={styles.mejoresJugadores}>
        
        {/* Título del ranking */}
        <Text style={styles.tituloMejores}>TOP 6 JUGADORES</Text>
        
        {/* Si no hay datos, muestro mensaje */}
        {mejoresJugadores.length === 0 && (
          <Text style={{ color: '#888', textAlign: 'center' }}>
            Sin datos
          </Text>
        )}
        
        {/* Mapeo cada jugador del ranking */}
        {mejoresJugadores.map((jugador, index) => (
          // Fila con: posición, nombre, puntos
          <View key={index} style={styles.filaJugador}>
            {/* Posición: 1., 2., 3., etc. */}
            <Text style={styles.posicion}>{index + 1}.</Text>
            
            {/* Nombre del jugador */}
            <Text style={styles.nombreJugador}>
              {jugador.nombre}
            </Text>
            
            {/* Puntos anotados (ej: "12 pts") */}
            <Text style={styles.puntosJugador}>
              {jugador.puntos} pts
            </Text>
          </View>
        ))}
        
      </View>

      {/* ==========================================
          BOTÓN PARA JUGAR OTRA VEZ
          ========================================== */}
      
      <TouchableOpacity 
        style={styles.botonVolver} 
        onPress={volverAlInicio}
      >
        <Text style={styles.textoBoton}>JUGAR OTRA VEZ</Text>
      </TouchableOpacity>
      
    </View>
  );
}

// ==========================================
// ESTILOS
// ==========================================

const styles = StyleSheet.create({
  
  // Contenedor principal de toda la pantalla
  pantallaCompleta: {
    flex: 1,                                     // Ocupa toda la pantalla
    backgroundColor: '#121212',                 // Gris muy oscuro
    paddingTop: 40,                              // Espacio arriba
    justifyContent: 'center',                    // Centrar contenido verticalmente
    alignItems: 'center',                        // Centrar contenido horizontalmente
  },
  
  // Contenedor del resultado (ganador o empate)
  contenedorResultado: {
    flex: 1,                                     // Ocupar espacio disponible
    justifyContent: 'center',                    // Centrar verticalmente
    alignItems: 'center',                        // Centrar horizontalmente
    paddingHorizontal: 30,                      // Espacio a los lados
    paddingBottom: 200,                          // Espacio abajo para el ranking
  },
  
  // ==========================================
  // ESTILOS PARA EMPATE
  // ==========================================
  
  // Contenedor centrado para el caso de empate
  contenedorEmpate: {
    alignItems: 'center',                         // Centrar contenido
  },
  
  // Texto "EMPATE" en dorado
  tituloEmpate: {
    color: '#FFD700',                           // Dorado
    fontSize: 32,                                // Grande (32px)
    fontWeight: 'bold',                          // Negrita
    marginBottom: 30,                            // Espacio abajo
    textAlign: 'center',                         // Centrar texto
  },
  
  // Contenedor horizontal con los dos equipos
  contenedorEquiposEmpate: {
    flexDirection: 'row',                       // Elementos en horizontal
    alignItems: 'center',                       // Centrar verticalmente
    justifyContent: 'center',                   // Centrar horizontalmente
  },
  
  // Contenedor de un equipo individual en empate
  equipoEmpate: {
    alignItems: 'center',                        // Centrar contenido
    marginHorizontal: 20,                       // Espacio entre equipos
  },
  
  // Separador "-" entre los equipos
  separador: {
    color: '#FFFFFF',                           // Blanco
    fontSize: 24,                               // Tamaño 24px
    fontWeight: 'bold',                          // Negrita
    marginHorizontal: 10,                       // Espacio a los lados
  },
  
  // ==========================================
  // ESTILOS PARA GANADOR
  // ==========================================
  
  // Contenedor centrado para el caso de ganador
  contenedorGanador: {
    alignItems: 'center',                        // Centrar contenido
  },
  
  // Texto "¡GANADOR!" en verde
  tituloGanador: {
    color: '#4CAF50',                           // Verde (color de éxito)
    fontSize: 36,                               // Muy grande (36px)
    fontWeight: 'bold',                          // Negrita
    marginBottom: 30,                            // Espacio abajo
    textAlign: 'center',                         // Centrar texto
  },
  
  // Nombre del equipo winner
  nombreGanador: {
    color: '#FFFFFF',                           // Blanco
    fontSize: 28,                               // Grande (28px)
    fontWeight: 'bold',                          // Negrita
    marginTop: 15,                               // Espacio arriba
    marginBottom: 10,                            // Espacio abajo
    textAlign: 'center',                         // Centrar texto
  },
  
  // Contenedor del marcador final (caja gris)
  contenedorMarcador: {
    backgroundColor: '#333333',                  // Gris oscuro
    paddingVertical: 10,                        // Espacio vertical
    paddingHorizontal: 30,                      // Espacio horizontal
    borderRadius: 10,                            // Bordes redondeados
    marginVertical: 15,                         // Espacio vertical
  },
  
  // Texto del marcador final (ej: "85 - 72")
  marcadorFinal: {
    color: '#FFFFFF',                           // Blanco
    fontSize: 24,                               // Tamaño 24px
    fontWeight: 'bold',                          // Negrita
    textAlign: 'center',                         // Centrar texto
  },
  
  // Subtítulo "Victoria" en verde
  subtituloGanador: {
    color: '#4CAF50',                           // Verde
    fontSize: 20,                               // Tamaño 20px
    fontWeight: 'bold',                          // Negrita
    marginTop: 10,                               // Espacio arriba
  },
  
  // ==========================================
  // ESTILOS COMUNES
  // ==========================================
  
  // Logo grande (usado en empate y winner)
  logoGrande: {
    width: 120,                                 // Ancho 120px
    height: 120,                               // Alto 120px
    borderRadius: 60,                            // делает круг perfecto
    marginBottom: 15,                            // Espacio abajo
  },
  
  // Nombre del equipo (usado en empate)
  nombreEquipo: {
    color: '#FFFFFF',                           // Blanco
    fontSize: 18,                               // Tamaño 18px
    fontWeight: 'bold',                          // Negrita
    marginBottom: 10,                            // Espacio abajo
    textAlign: 'center',                         // Centrar texto
  },
  
  // Puntos de un equipo (usado en empate)
  puntos: {
    color: '#FFD700',                           // Dorado
    fontSize: 24,                               // Tamaño 24px
    fontWeight: 'bold',                          // Negrita
  },
  
  // ==========================================
  // ESTILOS DEL RANKING
  // ==========================================
  
  // Contenedor del ranking (posición absoluta)
  mejoresJugadores: {
    position: 'absolute',                       // Posición absoluta
    bottom: 90,                                 // A 90px del bottom
    width: '90%',                               // 90% del ancho
    backgroundColor: '#333333',                  // Gris oscuro
    borderRadius: 15,                            // Bordes redondeados
    padding: 15,                                 // Espacio interior
    maxHeight: 280,                              // Altura máxima
  },
  
  // Título "TOP 6 JUGADORES"
  tituloMejores: {
    color: '#FFD700',                           // Dorado
    fontSize: 18,                               // Tamaño 18px
    fontWeight: 'bold',                          // Negrita
    textAlign: 'center',                         // Centrar texto
    marginBottom: 10,                            // Espacio abajo
  },
  
  // Fila de un jugador en el ranking
  filaJugador: {
    flexDirection: 'row',                       // Elementos en horizontal
    justifyContent: 'space-between',             // Distribuir espacio
    alignItems: 'center',                        // Centrar verticalmente
    paddingVertical: 5,                         // Espacio vertical
    borderBottomWidth: 1,                        // Línea separadora abajo
    borderBottomColor: '#444444',                // Color de la línea
  },
  
  // Posición (1., 2., 3., etc.)
  posicion: {
    color: '#FFD700',                           // Dorado
    fontSize: 14,                               // Tamaño 14px
    fontWeight: 'bold',                          // Negrita
    width: 30,                                   // Ancho fijo de 30px
  },
  
  // Nombre del jugador en el ranking
  nombreJugador: {
    color: '#FFFFFF',                           // Blanco
    fontSize: 14,                               // Tamaño 14px
    flex: 1,                                    // Ocupar espacio disponible
  },
  
  // Puntos del jugador en el ranking
  puntosJugador: {
    color: '#4CAF50',                           // Verde
    fontSize: 14,                               // Tamaño 14px
    fontWeight: 'bold',                          // Negrita
  },
  
  // ==========================================
  // BOTÓN VOLVER
  // ==========================================
  
  // Botón azul para volver a jugar
  botonVolver: {
    backgroundColor: '#2196F3',                  // Azul
    marginHorizontal: 30,                       // Espacio a los lados
    marginBottom: 15,                           // Espacio abajo
    paddingVertical: 15,                        // Alto del botón
    borderRadius: 10,                            // Bordes redondeados
    alignItems: 'center',                        // Centrar texto
  },
  
  // Texto del botón "JUGAR OTRA VEZ"
  textoBoton: {
    color: '#FFFFFF',                           // Blanco
    fontWeight: 'bold',                          // Negrita
    fontSize: 16,                               // Tamaño 16px
    textAlign: 'center',                         // Centrar texto
  },
});