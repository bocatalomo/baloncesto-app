// =============================================================================
// AUTOR: Diego
// FECHA: Febrero 2026
// PROYECTO: NBA Retro Game - GameScreen (Pantalla del Partido)
// DESCRIPCIÓN: Esta es la pantalla principal donde se desarrolla el partido
//              Muestra el marcador, los equipos seleccionados y permite
//              sumar puntos a cada jugador individualmente (+2 o +3)
// =============================================================================

// -----------------------------------------------------------------------------
// 1. IMPORTACIONES DE BIBLIOTECAS
// -----------------------------------------------------------------------------

// import React: Esto es React, la biblioteca principal que uso para crear componentes
// useState: Es un "hook" de React que me permite guardar datos que pueden cambiar
//           Por ejemplo: los puntos del marcador que van aumentando
import React, { useState } from 'react';

// View: Es un contenedor básico, como un <div> en HTML
// Text: Muestra texto en la pantalla
// StyleSheet: Me permite crear estilos (como CSS pero para React Native)
// TouchableOpacity: Es un botón que responde cuando lo presiono (con efecto visual)
// Image: Muestra imágenes (en este caso los logos de los equipos)
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// useNavigation: Es un hook que me permite cambiar entre pantallas
//               Por ejemplo: ir de esta pantalla a la pantalla de resultados
import { useNavigation } from '@react-navigation/native';

// -----------------------------------------------------------------------------
// 2. IMPORTACIÓN DE LOGOS
// -----------------------------------------------------------------------------

// Aquí importo todas las imágenes de los logos de los equipos
// Estas imágenes están guardadas en la carpeta "assets" del proyecto
// Cada logo corresponde a un equipo de la NBA
import lakersLogo from '../assets/lakers.png';
import celticsLogo from '../assets/celtics.png';
import warriorsLogo from '../assets/warriors.png';
import bullsLogo from '../assets/bulls.png';
import heatLogo from '../assets/heat.png';

// -----------------------------------------------------------------------------
// 3. DATOS DE LOS EQUIPOS
// -----------------------------------------------------------------------------

// Este es un ARRAY (lista) que contiene información de cada equipo
// Cada equipo tiene:
//   - nombre: El nombre del equipo en mayúsculas (string)
//   - logo: La imagen del logo que importé arriba
//   - jugadores: Un array con los 5 jugadores titulares del equipo

// Uso "const" porque estos datos no van a cambiar durante el partido
const equipos = [
  // --- EQUIPO 1: LOS ANGELES LAKERS ---
  {
    nombre: "LAKERS",           // Nombre del equipo
    logo: lakersLogo,           // Logo importado de assets
    // Lista de 5 jugadores titulares
    jugadores: [
      "LeBron James",           // Jugador 1 (índice 0)
      "Anthony Davis",          // Jugador 2 (índice 1)
      "Austin Reaves",          // Jugador 3 (índice 2)
      "D'Angelo Russell",       // Jugador 4 (índice 3)
      "Rui Hachimura"           // Jugador 5 (índice 4)
    ]
  },

  // --- EQUIPO 2: BOSTON CELTICS ---
  {
    nombre: "CELTICS",
    logo: celticsLogo,
    jugadores: [
      "Jayson Tatum",
      "Jaylen Brown",
      "Kristaps Porzingis",
      "Derrick White",
      "Al Horford"
    ]
  },

  // --- EQUIPO 3: GOLDEN STATE WARRIORS ---
  {
    nombre: "WARRIORS",
    logo: warriorsLogo,
    jugadores: [
      "Stephen Curry",
      "Klay Thompson",
      "Andrew Wiggins",
      "Jonathan Kuminga",
      "Draymond Green"
    ]
  },

  // --- EQUIPO 4: CHICAGO BULLS ---
  {
    nombre: "BULLS",
    logo: bullsLogo,
    jugadores: [
      "Zach LaVine",
      "Nikola Vucevic",
      "Coby White",
      "Patrick Williams",
      "Alex Caruso"
    ]
  },

  // --- EQUIPO 5: MIAMI HEAT ---
  {
    nombre: "HEAT",
    logo: heatLogo,
    jugadores: [
      "Jimmy Butler",
      "Bam Adebayo",
      "Tyler Herro",
      "Nikola Jovic",
      "Duncan Robinson"
    ]
  }
];

// -----------------------------------------------------------------------------
// 4. COMPONENTE PRINCIPAL - GameScreen
// -----------------------------------------------------------------------------

// export default: Esto me permite usar este componente en otros archivos
// function GameScreen: Es la función principal de esta pantalla
// { route }: Recibe parámetros de la pantalla anterior (TeamSelectionScreen)
//           route.params contiene: equipoJugador1 y equipoJugador2
export default function GameScreen({ route }) {

  // ---------------------------------------------------------------------------
  // 4.1. OBTENCIÓN DE PARÁMETROS
  // ---------------------------------------------------------------------------

  // const navigation = useNavigation(): Esto me da acceso a las funciones de navegación
  // Puedo usar navigation.navigate('NombrePantalla') para ir a otra pantalla
  const navigation = useNavigation();

  // const { equipoJugador1, equipoJugador2 } = route.params:
  // Desestructuración: Extraigo los parámetros que me pasaron
  // equipoJugador1: Es un NÚMERO (0-4) que indica qué equipo eligió el Jugador 1
  // equipoJugador2: Es un NÚMERO (0-4) que indica qué equipo eligió el Jugador 2
  // Ejemplo: Si equipoJugador1 = 0, entonces equipos[0] = Lakers
  const { equipoJugador1, equipoJugador2 } = route.params;

  // ---------------------------------------------------------------------------
  // 4.2. ESTADOS DEL MARCADOR (useState)
  // ---------------------------------------------------------------------------

  // useState(0): Crea una variable de estado con valor inicial 0
  // [variable, setVariable]: La primera es el valor, la segunda es la función para cambiarlo
  // setPuntosJugador1(nuevoValor): Así actualizo los puntos

  // PUNTOS TOTALES DE CADA JUGADOR (marcador del partido)
  const [puntosJugador1, setPuntosJugador1] = useState(0);  // Empieza en 0
  const [puntosJugador2, setPuntosJugador2] = useState(0);  // Empieza en 0

  // PUNTOS DE CADA JUGADOR INDIVIDUALMENTE
  // Uso .map(() => 0) para crear un array de 5 ceros (uno por jugador)
  // Esto me permite guardar: [puntosJugador1, puntosJugador2, ...]
  
  // puntosPorJugador1[0] = puntos del primer jugador del equipo del Jugador 1
  // puntosPorJugador1[1] = puntos del segundo jugador del equipo del Jugador 1
  // ... hasta 4 (son 5 jugadores)
  const [puntosPorJugador1, setPuntosPorJugador1] = useState(
    // equipos[equipoJugador1].jugadores me da el array de jugadores del equipo
    // .map(() => 0) convierte cada jugador en un 0 (puntos iniciales)
    equipos[equipoJugador1].jugadores.map(() => 0)
  );

  const [puntosPorJugador2, setPuntosPorJugador2] = useState(
    equipos[equipoJugador2].jugadores.map(() => 0)
  );

  // ---------------------------------------------------------------------------
  // 4.3. FUNCIONES PARA SUMAR PUNTOS
  // ---------------------------------------------------------------------------

  // Función: sumarPuntosJugador1
  // ¿Qué hace? Suma puntos al Jugador 1
  // Parámetros:
  //   - puntos: Puede ser 2 (canasta normal) o 3 (triple)
  //   - indiceJugador: El número del jugador (0-4) al que sumo los puntos
  const sumarPuntosJugador1 = (puntos, indiceJugador) => {
    // 1. Actualizo el marcador total del Jugador 1
    // setPuntosJugador1 = Suma los puntos al total actual
    setPuntosJugador1(puntosJugador1 + puntos);

    // 2. Actualizo los puntos del jugador específico
    // [...puntosPorJugador1] = Creo una COPIA del array (no modifico el original)
    // Esto es importante en React para detectar cambios
    const nuevosPuntos = [...puntosPorJugador1];

    // Sumo los puntos al jugador en la posición específica
    // indiceJugador puede ser 0, 1, 2, 3 o 4
    nuevosPuntos[indiceJugador] += puntos;

    // Actualizo el estado con el nuevo array
    setPuntosPorJugador1(nuevosPuntos);
  };

  // Función: sumarPuntosJugador2
  // ¿Qué hace? Exactamente lo mismo pero para el Jugador 2
  // Copio la misma lógica del Jugador 1
  const sumarPuntosJugador2 = (puntos, indiceJugador) => {
    setPuntosJugador2(puntosJugador2 + puntos);
    const nuevosPuntos = [...puntosPorJugador2];
    nuevosPuntos[indiceJugador] += puntos;
    setPuntosPorJugador2(nuevosPuntos);
  };

  // ---------------------------------------------------------------------------
  // 4.4. FINALIZAR EL JUEGO
  // ---------------------------------------------------------------------------

  // Función: finalizarJuego
  // ¿Qué hace? Termina el partido y navega a la pantalla de resultados
  const finalizarJuego = () => {
    // navigation.navigate('Winner'): Voy a la pantalla llamada "Winner"
    // Le paso parámetros usando el segundo argumento (objeto {})
    // Estos parámetros serán recibidos por WinnerScreen
    navigation.navigate('Winner', {
      // Índices de los equipos seleccionados (para saber qué equipos fueron)
      equipoJugador1: equipoJugador1,
      equipoJugador2: equipoJugador2,

      // Marcadores totales (ejemplo: 85 - 72)
      puntosJugador1: puntosJugador1,
      puntosJugador2: puntosJugador2,

      // Puntos individuales de cada jugador (para el ranking Top 6)
      // Esto es un array de 5 números para cada equipo
      puntosPorJugador1: puntosPorJugador1,
      puntosPorJugador2: puntosPorJugador2
    });
  };

  // ---------------------------------------------------------------------------
  // 4.5. RETORNO (INTERFAZ DE USUARIO - LO QUE SE VE EN PANTALLA)
  // ---------------------------------------------------------------------------

  // return(): Devuelvo el JSX (HTML de React)
  // Todo lo que está aquí se muestra en la pantalla del celular

  return (
    // View principal: Contenedor que ocupa toda la pantalla
    <View style={styles.pantallaCompleta}>

      {/* ========================================================================
          SECCIÓN 1: MARCADOR CENTRAL (ARRIBA)
          Muestra: "LAKERS 24 - VS - CELTICS 20"
          ======================================================================== */}

      {/* Caja oscura con el marcador en el centro de la pantalla */}
      <View style={styles.marcadorCentral}>

        {/* Fila horizontal con tres elementos: Equipo1 | VS | Equipo2 */}
        <View style={styles.filaMarcador}>

          {/* --- EQUIPO DEL JUGADOR 1 (LADO IZQUIERDO) --- */}
          <View style={styles.equipoMarcador}>
            {/* Nombre del equipo (ej: "LAKERS") */}
            <Text style={styles.nombreMarcador}>
              {/* equipos[equipoJugador1].nombre: Accedo al nombre del equipo */}
              {equipos[equipoJugador1].nombre}
            </Text>
            {/* Puntos grandes (ej: "24") */}
            <Text style={styles.puntosMarcador}>
              {/* Muestro la variable puntosJugador1 */}
              {puntosJugador1}
            </Text>
          </View>

          {/* --- TEXTO "VS" (CENTRO) --- */}
          <Text style={styles.vsMarcador}>VS</Text>

          {/* --- EQUIPO DEL JUGADOR 2 (LADO DERECHO) --- */}
          <View style={styles.equipoMarcador}>
            <Text style={styles.nombreMarcador}>
              {equipos[equipoJugador2].nombre}
            </Text>
            <Text style={styles.puntosMarcador}>
              {puntosJugador2}
            </Text>
          </View>

        </View>
      </View>

      {/* ========================================================================
          SECCIÓN 2: CONTENEDOR DE EQUIPOS (DOS COLUMNAS ABAJO)
          Muestra: En la izquierda el equipo del Jugador 1, en la derecha el del Jugador 2
          Cada equipo muestra: Logo, Título (LOCAL/VISITANTE), y 5 jugadores con botones (+2, +3)
          ======================================================================== */}

      {/* Contenedor con flexDirection: 'row' -> Dos columnas horizontales */}
      <View style={styles.contenedorEquipos}>

        {/* ======================================================================
            COLUMNA 1: EQUIPO DEL JUGADOR 1 (LOCAL)
            ====================================================================== */}

        <View style={styles.columnaEquipo}>
          {/* Título "LOCAL" en color dorado */}
          <Text style={styles.tituloEquipo}>LOCAL</Text>

          {/* Logo del equipo (más pequeño que en selección) */}
          <Image 
            source={equipos[equipoJugador1].logo} 
            style={styles.logo} 
          />

          {/* Contenedor de la lista de jugadores */}
          <View style={styles.listaJugadores}>

            {/* .map(): Recorro el array de jugadores del equipo */}
            {/* Por cada jugador, creo una fila con su nombre y botones */}
            {equipos[equipoJugador1].jugadores.map((jugador, index) => (
              // key={index}: React necesita una clave única para cada elemento
              <View key={index} style={styles.filaJugador}>
                
                {/* Nombre del jugador (ej: "LeBron James") */}
                <Text style={styles.nombreJugador}>{jugador}</Text>

                {/* Contenedor de botones (+2 y +3) */}
                <View style={styles.botonesPuntos}>
                  
                  {/* --- BOTÓN +2 PUNTOS (VERDE) --- */}
                  <TouchableOpacity
                    style={styles.botonPunto2}
                    // onPress: Cuando presiono el botón, ejecuto esta función
                    // () => sumarPuntosJugador1(2, index):
                    //   - 2 = Son 2 puntos
                    //   - index = El número del jugador (0-4)
                    onPress={() => sumarPuntosJugador1(2, index)}
                  >
                    <Text style={styles.textoBoton}>+2</Text>
                  </TouchableOpacity>

                  {/* --- BOTÓN +3 PUNTOS (AZUL) --- */}
                  <TouchableOpacity
                    style={styles.botonPunto3}
                    onPress={() => sumarPuntosJugador1(3, index)}
                  >
                    <Text style={styles.textoBoton}>+3</Text>
                  </TouchableOpacity>

                </View>
              </View>
            ))}

          </View>
        </View>

        {/* ======================================================================
            COLUMNA 2: EQUIPO DEL JUGADOR 2 (VISITANTE)
            ====================================================================== */}

        <View style={styles.columnaEquipo}>
          {/* Título "VISITANTE" en color dorado */}
          <Text style={styles.tituloEquipo}>VISITANTE</Text>

          {/* Logo del equipo */}
          <Image 
            source={equipos[equipoJugador2].logo} 
            style={styles.logo} 
          />

          {/* Lista de jugadores del Jugador 2 */}
          <View style={styles.listaJugadores}>
            {equipos[equipoJugador2].jugadores.map((jugador, index) => (
              <View key={index} style={styles.filaJugador}>
                
                <Text style={styles.nombreJugador}>{jugador}</Text>

                {/* Botones para el Jugador 2 */}
                <View style={styles.botonesPuntos}>
                  
                  {/* Botón +2 puntos para Jugador 2 */}
                  <TouchableOpacity
                    style={styles.botonPunto2}
                    onPress={() => sumarPuntosJugador2(2, index)}
                  >
                    <Text style={styles.textoBoton}>+2</Text>
                  </TouchableOpacity>

                  {/* Botón +3 puntos para Jugador 2 */}
                  <TouchableOpacity
                    style={styles.botonPunto3}
                    onPress={() => sumarPuntosJugador2(3, index)}
                  >
                    <Text style={styles.textoBoton}>+3</Text>
                  </TouchableOpacity>

                </View>
              </View>
            ))}
          </View>
        </View>

      </View>

      {/* ========================================================================
          SECCIÓN 3: BOTÓN FIN DEL JUEGO (ABAJO)
          ======================================================================== */}

      {/* Botón grande color naranja para terminar el partido */}
      <TouchableOpacity 
        style={styles.botonFin} 
        onPress={finalizarJuego}
      >
        <Text style={styles.textoBoton}>FIN DEL JUEGO</Text>
      </TouchableOpacity>

    </View>
  );
}

// -----------------------------------------------------------------------------
// 5. ESTILOS (StyleSheet.create)
// -----------------------------------------------------------------------------

// StyleSheet.create(): Crea los estilos para esta pantalla
// Esto es como CSS pero en formato JavaScript
// Cada propiedad es camelCase (primera letra minúscula, siguiente mayúscula)

const styles = StyleSheet.create({

  // ==========================================================================
  // 5.1. ESTILO PRINCIPAL
  // ==========================================================================

  // Contenedor de toda la pantalla
  pantallaCompleta: {
    flex: 1,                      // Ocupa toda la pantalla disponible
    backgroundColor: '#121212',   // Gris muy oscuro (casi negro)
    paddingTop: 40,               // Espacio arriba para la barra de estado
  },

  // ==========================================================================
  // 5.2. MARCADOR CENTRAL
  // ==========================================================================

  // Caja oscura con el marcador en el centro
  marcadorCentral: {
    backgroundColor: '#1e1e1e',   // Gris muy oscuro
    padding: 15,                  // Espacio interior de 15px
    borderRadius: 15,             // Bordes redondeados (15px)
    marginHorizontal: 20,         // Espacio a izquierda y derecha
    marginBottom: 10,             // Espacio abajo
  },

  // Fila horizontal del marcador
  filaMarcador: {
    flexDirection: 'row',               // Elementos en horizontal (uno al lado del otro)
    justifyContent: 'space-between',    // Distribuir espacio entre elementos
    alignItems: 'center',              // Centrar verticalmente
  },

  // Contenedor del nombre y puntos de un equipo
  equipoMarcador: {
    alignItems: 'center',              // Centrar contenido horizontalmente
    flex: 1,                           // Ocupar espacio disponible (proporcional)
  },

  // Nombre del equipo en el marcador (ej: "LAKERS")
  nombreMarcador: {
    color: '#FFFFFF',      // Color blanco
    fontSize: 14,          // Tamaño de letra 14px
    fontWeight: 'bold',    // Texto en negrita
    marginBottom: 3,       // Espacio de 3px abajo
  },

  // Puntos grandes en el marcador (ej: "24")
  puntosMarcador: {
    color: '#FFD700',      // Color dorado (amarillo)
    fontSize: 28,          // Tamaño grande (28px)
    fontWeight: 'bold',    // Negrita
  },

  // Texto "VS" en el centro
  vsMarcador: {
    color: '#888888',      // Color gris
    fontSize: 16,          // Tamaño 16px
    fontWeight: 'bold',    // Negrita
    marginHorizontal: 15,  // Espacio a izquierda y derecha
  },

  // ==========================================================================
  // 5.3. CONTENEDOR DE EQUIPOS (DOS COLUMNAS)
  // ==========================================================================

  // Contenedor con las dos columnas de equipos
  contenedorEquipos: {
    flex: 1,                      // Ocupar el espacio disponible
    flexDirection: 'row',         // Dos columnas horizontales
    paddingHorizontal: 10,        // Espacio a los lados
  },

  // Columna de un equipo individual
  columnaEquipo: {
    flex: 1,                        // 50% del espacio cada una
    alignItems: 'center',           // Centrar contenido horizontalmente
    backgroundColor: '#333333',     // Gris oscuro para la columna
    marginHorizontal: 5,          // Espacio entre columnas (5px)
    borderRadius: 15,               // Bordes redondeados
    padding: 15,                    // Espacio interior
  },

  // Título "LOCAL" o "VISITANTE"
  tituloEquipo: {
    color: '#FFD700',      // Color dorado
    fontSize: 18,          // Tamaño 18px
    fontWeight: 'bold',    // Negrita
    marginBottom: 10,      // Espacio abajo
  },

  // Logo del equipo (más pequeño que en la pantalla de selección)
  logo: {
    width: 60,         // Ancho 60px
    height: 60,        // Alto 60px
    borderRadius: 30,  // делает круг (30 = mitad del ancho)
    marginBottom: 10,  // Espacio abajo
  },

  // ==========================================================================
  // 5.4. FILA DE JUGADOR
  // ==========================================================================

  // Contenedor de la lista de jugadores
  listaJugadores: {
    flex: 1,            // Ocupar el espacio disponible
    width: '100%',     // Ancho completo de la columna
  },

  // Fila individual con el nombre y botones de un jugador
  filaJugador: {
    flexDirection: 'column',      // Vertical: nombre arriba, botones abajo
    alignItems: 'center',         // Centrar contenido
    marginVertical: 4,          // Espacio entre filas
    padding: 8,                  // Espacio interior
    backgroundColor: '#444444',   // Gris medio para la caja
    borderRadius: 8,              // Bordes redondeados
  },

  // Nombre del jugador
  nombreJugador: {
    color: '#FFFFFF',      // Blanco
    fontSize: 11,          // Pequeño (11px)
    fontWeight: 'bold',    // Negrita
    textAlign: 'center',   // Centrar texto
    marginBottom: 4,        // Espacio abajo
  },

  // Contenedor de los botones (+2 y +3)
  botonesPuntos: {
    flexDirection: 'row',              // Botones uno al lado del otro
    justifyContent: 'space-between',   // Separar los botones
    width: '100%',                    // Ancho completo
  },

  // Botón verde para +2 puntos
  botonPunto2: {
    backgroundColor: '#4CAF50',    // Verde
    paddingVertical: 8,           // Espacio arriba y abajo
    paddingHorizontal: 20,        // Espacio a los lados
    borderRadius: 6,              // Bordes redondeados
    flex: 1,                       // Ocupar espacio disponible
    marginRight: 5,              // Espacio a la derecha del botón
  },

  // Botón azul para +3 puntos
  botonPunto3: {
    backgroundColor: '#2196F3',    // Azul
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    flex: 1,
    marginLeft: 5,   // Espacio a la izquierda del botón
  },

  // Texto de los botones (+2, +3, FIN DEL JUEGO)
  textoBoton: {
    color: '#FFFFFF',      // Blanco
    fontWeight: 'bold',    // Negrita
    textAlign: 'center',   // Centrar texto
    fontSize: 12,          // Tamaño 12px
  },

  // ==========================================================================
  // 5.5. BOTÓN FIN DEL JUEGO
  // ==========================================================================

  // Botón grande naranja para terminar el partido
  botonFin: {
    backgroundColor: '#FF5722',    // Naranja
    marginHorizontal: 20,         // Espacio a los lados
    marginVertical: 15,           // Espacio arriba y abajo
    paddingVertical: 15,          // Alto del botón
    borderRadius: 10,            // Bordes redondeados
    alignItems: 'center',        // Centrar texto
  },

});

// =============================================================================
// NOTAS FINALES:
// =============================================================================
//
// 1. FLUJO DE DATOS:
//    - TeamSelectionScreen me pasa: equipoJugador1 y equipoJugador2
//    - Yo guardo los puntos en: puntosJugador1, puntosJugador2
//    - También guardo puntos individuales: puntosPorJugador1, puntosPorJugador2
//    - Al terminar, le paso todo a WinnerScreen
//
// 2. NAVEGACIÓN:
//    - navigation.navigate('Winner', {...}) -> Va a la pantalla de resultados
//
// 3. ACTUALIZACIÓN DE ESTADO:
//    - setPuntosJugador1(++): Actualiza el marcador total
//    - setPuntosPorJugador1([...]): Actualiza los puntos de un jugador específico
//
// 4. ESTILOS:
//    - Todos los colores siguen el tema oscuro de la app
//    - gold (#FFD700) para destacar títulos y puntos
//    - verde (#4CAF50) para +2 puntos
//    - azul (#2196F3) para +3 puntos
//    - naranja (#FF5722) para acciones importantes (FIN DEL JUEGO)
//
// =============================================================================
