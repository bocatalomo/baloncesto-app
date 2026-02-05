// Autor: Diego
// Fecha: Febrero 2026
// Descripción: Pantalla de selección de equipos donde cada jugador elige su equipo
//              Muestra dos columnas con los equipos disponibles, sus logos y jugadores

// ==========================================
// IMPORTACIONES DE BIBLIOTECAS
// ==========================================

// React es la biblioteca principal que uso para crear componentes
// useState es un hook que me permite manejar el estado (datos que cambian)
import React, { useState } from 'react';

// View es un contenedor básico como un div en HTML
// Text muestra texto en pantalla
// StyleSheet me permite crear estilos como en CSS
// TouchableOpacity es un botón que puede presionarse
// Image muestra imágenes (logos de equipos)
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// useNavigation es un hook que me permite navegar entre pantallas
import { useNavigation } from '@react-navigation/native';

// ==========================================
// IMPORTACIÓN DE LOGOS
// ==========================================

// Importo las imágenes de los logos de cada equipo desde la carpeta assets
// Uso require implícito de Expo para cargar imágenes locales
import lakersLogo from '../assets/lakers.png';
import celticsLogo from '../assets/celtics.png';
import warriorsLogo from '../assets/warriors.png';
import bullsLogo from '../assets/bulls.png';
import heatLogo from '../assets/heat.png';

// ==========================================
// DATOS DE LOS EQUIPOS
// ==========================================

// Este array contiene toda la información de cada equipo
// Cada equipo tiene: nombre (string), logo (imagen), jugadores (array de 5 strings)
const equipos = [
  // Equipo 1: Los Angeles Lakers
  {
    nombre: "LAKERS",  // Nombre del equipo en mayúsculas
    logo: lakersLogo,   // Referencia a la imagen importada
    // Array con los 5 jugadores titulares del equipo
    jugadores: ["LeBron James", "Anthony Davis", "Austin Reaves", "D'Angelo Russell", "Rui Hachimura"]
  },
  
  // Equipo 2: Boston Celtics
  {
    nombre: "CELTICS",
    logo: celticsLogo,
    jugadores: ["Jayson Tatum", "Jaylen Brown", "Kristaps Porzingis", "Derrick White", "Al Horford"]
  },
  
  // Equipo 3: Golden State Warriors
  {
    nombre: "WARRIORS",
    logo: warriorsLogo,
    jugadores: ["Stephen Curry", "Klay Thompson", "Andrew Wiggins", "Jonathan Kuminga", "Draymond Green"]
  },
  
  // Equipo 4: Chicago Bulls
  {
    nombre: "BULLS",
    logo: bullsLogo,
    jugadores: ["Zach LaVine", "Nikola Vucevic", "Coby White", "Patrick Williams", "Alex Caruso"]
  },
  
  // Equipo 5: Miami Heat
  {
    nombre: "HEAT",
    logo: heatLogo,
    jugadores: ["Jimmy Butler", "Bam Adebayo", "Tyler Herro", "Nikola Jovic", "Duncan Robinson"]
  }
];

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

// export default me permite usar este componente en otros archivos
// TeamSelectionScreen es el nombre de mi componente/pantalla
export default function TeamSelectionScreen() {
  
  // ==========================================
  // HOOK DE NAVEGACIÓN
  // ==========================================
  
  // useNavigation() me da acceso al objeto de navegación
  // Este objeto tiene métodos como navigate(), goBack(), etc.
  const navigation = useNavigation();
  
  // ==========================================
  // ESTADOS (DATOS QUE CAMBIAN)
  // ==========================================
  
  // useState(0) crea una variable de estado inicializada en 0
  // equipoJugador1 guarda el ÍNDICE del equipo del Jugador 1
  // Inicialmente es 0, que corresponde a LAKERS
  const [equipoJugador1, setEquipoJugador1] = useState(0);
  
  // equipoJugador2 guarda el ÍNDICE del equipo del Jugador 2
  // Inicialmente es 1, que corresponde a CELTICS
  // Esto evita que ambos empiecen con el mismo equipo
  const [equipoJugador2, setEquipoJugador2] = useState(1);
  
  // ==========================================
  // FUNCIONES MANIPULADORAS (EVENT HANDLERS)
  // ==========================================
  
  // Función para cambiar el equipo del Jugador 1
  // Esta función se ejecuta cuando el usuario presiona el botón "CAMBIAR"
  const cambiarEquipoJugador1 = () => {
    // Incremento el índice del equipo actual en 1
    setEquipoJugador1(equipoJugador1 + 1);
    
    // Verifico si llegué al último equipo
    // equipos.length me da el número total de equipos (5)
    // Resto 1 porque los índices van de 0 a 4
    if (equipoJugador1 >= equipos.length - 1) {
      // Si llegué al final, vuelvo al principio (navegación circular)
      setEquipoJugador1(0);
    }
  };
  
  // Función para cambiar el equipo del Jugador 2
  // Misma lógica que Jugador 1
  const cambiarEquipoJugador2 = () => {
    setEquipoJugador2(equipoJugador2 + 1);
    if (equipoJugador2 >= equipos.length - 1) {
      setEquipoJugador2(0);
    }
  };
  
  // Función para navegar a la pantalla de juego
  // Se ejecuta cuando el usuario presiona el botón "PLAY"
  const irAJuego = () => {
    // navigation.navigate() cambia a otra pantalla
    // Le paso parámetros usando el segundo argumento
    // Estos parámetros serán recibidos por GameScreen
    navigation.navigate('Game', { 
      equipoJugador1: equipoJugador1, 
      equipoJugador2: equipoJugador2 
    });
  };
  
  // ==========================================
  // RETORNO (LO QUE SE VE EN PANTALLA)
  // ==========================================
  
  // JSX: Una combinación de JavaScript y HTML
  // Esto describe qué se muestra en la interfaz
  return (
    // View principal que ocupa toda la pantalla
    <View style={styles.pantallaCompleta}>
      
      {/* Contenedor de columnas: organiza dos columnas lado a lado */}
      <View style={styles.contenedorDeColumnas}>
        
        {/* ==========================================
            COLUMNA DEL JUGADOR 1 (LADO IZQUIERDO)
            ========================================== */}
        <View style={styles.columna}>
          
          {/* Etiqueta "J1" en color dorado */}
          <Text style={styles.etiquetaJugador}>J1</Text>
          
          {/* Logo del equipo actual del Jugador 1 */}
          {/* uso key con el índice para forzar re-render cuando cambia el equipo */}
          <Image 
            key={`player1-${equipoJugador1}`}
            // equipos[equipoJugador1].logo accede al logo del equipo actual
            source={equipos[equipoJugador1].logo} 
            style={styles.logoImagen} 
            resizeMode="contain"
            // Si hay error al cargar la imagen, lo muestro en consola
            onError={(error) => console.log('Error loading image Player1:', error.nativeEvent.error)}
          />
          
          {/* Nombre del equipo actual, ej: "LAKERS" */}
          <Text style={styles.nombreEquipo}>
            {/* teams[equipoJugador1].nombre accede al nombre del equipo actual */}
            {equipos[equipoJugador1].nombre}
          </Text>
          
          {/* Contenedor de la lista de jugadores */}
          <View style={styles.listaJugadores}>
            {/* Muestro cada jugador en su propia caja */}
            {/* Acceso al array de jugadores usando el índice del equipo */}
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>
                {equipos[equipoJugador1].jugadores[0]}
              </Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>
                {equipos[equipoJugador1].jugadores[1]}
              </Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>
                {equipos[equipoJugador1].jugadores[2]}
              </Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>
                {equipos[equipoJugador1].jugadores[3]}
              </Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>
                {equipos[equipoJugador1].jugadores[4]}
              </Text>
            </View>
          </View>
          
          {/* Botón naranja para cambiar equipo del Jugador 1 */}
          <TouchableOpacity 
            style={styles.botonCambiar} 
            onPress={cambiarEquipoJugador1}
          >
            <Text style={styles.textoBoton}>CAMBIAR</Text>
          </TouchableOpacity>
          
        </View>

        {/* ==========================================
            COLUMNA DEL JUGADOR 2 (LADO DERECHO)
            ========================================== */}
        <View style={styles.columna}>
          
          {/* Etiqueta "J2" en color dorado */}
          <Text style={styles.etiquetaJugador}>J2</Text>
          
          {/* Logo del equipo actual del Jugador 2 */}
          <Image 
            key={`player2-${equipoJugador2}`}
            source={equipos[equipoJugador2].logo} 
            style={styles.logoImagen} 
            resizeMode="contain"
            onError={(error) => console.log('Error loading image Player2:', error.nativeEvent.error)}
          />
          
          {/* Nombre del equipo actual del Jugador 2 */}
          <Text style={styles.nombreEquipo}>
            {equipos[equipoJugador2].nombre}
          </Text>
          
          {/* Contenedor de la lista de jugadores del Jugador 2 */}
          <View style={styles.listaJugadores}>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>
                {equipos[equipoJugador2].jugadores[0]}
              </Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>
                {equipos[equipoJugador2].jugadores[1]}
              </Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>
                {equipos[equipoJugador2].jugadores[2]}
              </Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>
                {equipos[equipoJugador2].jugadores[3]}
              </Text>
            </View>
            <View style={styles.cajaJugador}>
              <Text style={styles.nombreJugador}>
                {equipos[equipoJugador2].jugadores[4]}
              </Text>
            </View>
          </View>
          
          {/* Botón naranja para cambiar equipo del Jugador 2 */}
          <TouchableOpacity 
            style={styles.botonCambiar} 
            onPress={cambiarEquipoJugador2}
          >
            <Text style={styles.textoBoton}>CAMBIAR</Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
      
      {/* ==========================================
          BOTÓN PLAY (PARTE INFERIOR)
          ========================================== */}
      
      {/* Botón grande verde para empezar el partido */}
      <TouchableOpacity 
        style={styles.botonPlay} 
        onPress={irAJuego}
      >
        <Text style={styles.textoPlay}>PLAY</Text>
      </TouchableOpacity>
      
    </View>
  );
}

// ==========================================
// ESTILOS (COMO CSS PERO PARA REACT NATIVE)
// ==========================================

// StyleSheet.create() optimiza los estilos para React Native
const styles = StyleSheet.create({
  
  // Estilo para el contenedor principal de toda la pantalla
  pantallaCompleta: {
    flex: 1,                    // Ocupa toda la pantalla disponible
    backgroundColor: '#121212', // Gris muy oscuro (casi negro)
    paddingTop: 40,             // Espacio arriba para la barra de estado
  },
  
  // Contenedor que pone las dos columnas una al lado de la otra
  contenedorDeColumnas: {
    flex: 1,                    // Ocupa el espacio disponible
    flexDirection: 'row',        // 'row' = horizontal, 'column' = vertical
    paddingHorizontal: 20,       // Espacio de 20px a izquierda y derecha
  },
  
  // Estilo para cada columna individual (J1 y J2)
  columna: {
    flex: 1,                    // Cada columna ocupa 50% del espacio
    alignItems: 'center',        // Centra el contenido horizontalmente
    backgroundColor: '#333333', // Gris oscuro para la columna
    marginHorizontal: 10,        // Espacio entre columnas
    borderRadius: 20,           // Bordes redondeados (20px de radio)
    paddingVertical: 20,         // Espacio arriba y abajo dentro de la columna
  },
  
  // Estilo para las etiquetas "J1" y "J2"
  etiquetaJugador: {
    fontSize: 24,               // Tamaño de letra 24px
    fontWeight: 'bold',         // Texto en negrita
    color: '#FFD700',          // Color dorado (amarillo oscuro)
    marginBottom: 15,           // Espacio de 15px debajo
  },
  
  // Estilo para la imagen del logo del equipo
  logoImagen: {
    width: 100,                 // Ancho de 100px
    height: 100,               // Alto de 100px
    borderRadius: 50,           // делает круг (50 = mitad del ancho)
    marginBottom: 10,           // Espacio debajo del logo
    backgroundColor: '#555555', // Fondo gris por si no carga la imagen
  },
  
  // Estilo para el nombre del equipo (ej: "LAKERS")
  nombreEquipo: {
    fontSize: 20,              // Tamaño de letra 20px
    fontWeight: 'bold',         // Negrita
    color: '#FFFFFF',          // Color blanco
    marginBottom: 20,           // Espacio debajo
    textAlign: 'center',        // Centra el texto
  },
  
  // Contenedor que agrupa todas las cajas de jugadores
  listaJugadores: {
    flex: 1,                    // Ocupa el espacio restante
    width: '100%',              // Ancho completo de la columna
    marginBottom: 20,           // Espacio debajo de la lista
  },
  
  // Estilo para la caja individual de cada jugador
  cajaJugador: {
    backgroundColor: '#444444', // Gris medio para la caja
    paddingVertical: 8,         // Espacio arriba y abajo
    paddingHorizontal: 12,      // Espacio a los lados
    marginVertical: 3,          // Espacio entre cajas
    borderRadius: 8,            // Bordes redondeados
    marginHorizontal: 10,       // Espacio a los lados dentro de la columna
  },
  
  // Estilo para el nombre del jugador dentro de la caja
  nombreJugador: {
    color: '#CCCCCC',         // Gris claro para el texto
    fontSize: 14,              // Tamaño de letra 14px
    textAlign: 'center',        // Centra el texto
  },
  
  // Estilo para el botón "CAMBIAR" (naranja)
  botonCambiar: {
    backgroundColor: '#FF5722', // Naranja (color de advertencia)
    paddingVertical: 12,        // Espacio arriba y abajo
    paddingHorizontal: 30,      // Espacio a los lados
    borderRadius: 10,            // Bordes redondeados
  },
  
  // Estilo para el texto dentro del botón "CAMBIAR"
  textoBoton: {
    color: '#FFFFFF',          // Texto blanco
    fontWeight: 'bold',         // Negrita
    fontSize: 14,               // Tamaño de letra 14px
    textAlign: 'center',        // Centra el texto
  },
  
  // Estilo para el botón grande "PLAY" (verde)
  botonPlay: {
    backgroundColor: '#4CAF50', // Verde (color de éxito)
    marginHorizontal: 30,        // Espacio a los lados
    paddingVertical: 20,         // Alto del botón
    borderRadius: 15,            // Bordes redondeados
    marginBottom: 30,           // Espacio abajo
    alignItems: 'center',       // Centra el contenido
  },
  
  // Estilo para el texto "PLAY"
  textoPlay: {
    color: '#FFFFFF',          // Texto blanco
    fontWeight: 'bold',         // Negrita
    fontSize: 24,              // Tamaño grande (24px)
    letterSpacing: 3,          // Espacio entre letras (3px)
  },
});


