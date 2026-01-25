// Exporto este array como default para que otros archivos puedan importarlo directamente
// Este array contiene todos los equipos disponibles para seleccionar en el juego
export default [
  {
    id: 1,                    // Identificador único del equipo (útil para referencias futuras)
    name: "Lakers",           // Nombre del equipo que se mostrará en pantalla
    color: "#552583",         // Color púrpura característico de los Lakers (para temas UI)
    logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lal.png", // URL del logo del equipo
    players: ["LeBron James", "Anthony Davis", "Austin Reaves", "D'Angelo Russell", "Rui Hachimura"] // Array con los nombres de los jugadores
  },
  {
    id: 2,                    // ID único para los Celtics
    name: "Celtics",          // Nombre del equipo
    color: "#007A33",         // Color verde característico de los Celtics
    logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png", // Logo de los Celtics
    players: ["Jayson Tatum", "Jaylen Brown", "Kristaps Porzingis", "Derrick White", "Al Horford"] // Jugadores de los Celtics
  },
  {
    id: 3,                    // ID único para los Warriors
    name: "Warriors",         // Nombre del equipo
    color: "#1D428A",         // Color azul característico de los Warriors
    logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/gs.png", // Logo de los Warriors
    players: ["Stephen Curry", "Klay Thompson", "Andrew Wiggins", "Jonathan Kuminga", "Draymond Green"] // Jugadores de los Warriors
  },
  {
    id: 4,                    // ID único para los Bulls
    name: "Bulls",            // Nombre del equipo
    color: "#CE1141",         // Color rojo característico de los Bulls
    logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/chi.png", // Logo de los Bulls
    players: ["Zach LaVine", "Nikola Vucevic", "Coby White", "Patrick Williams", "Alex Caruso"] // Jugadores de los Bulls
  },
  {
    id: 5,                    // ID único para los Heat
    name: "Heat",             // Nombre del equipo
    color: "#98002E",         // Color rojo oscuro característico de los Heat
    logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mia.png", // Logo de los Heat
    players: ["Jimmy Butler", "Bam Adebayo", "Tyler Herro", "Nikola Jovic", "Duncan Robinson"] // Jugadores de los Heat
  }
];
